import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import { useAuth } from './AuthContext';
import { addBooking } from './bookingStore';
import { ADDONS, calcTotal, formatINR, getPackageById } from './Data';
import './Packages.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const toISO = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

function tomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return toISO(d);
}

function Stepper({ label, hint, value, min, max, onChange }) {
  return (
    <div className="pk-stepper">
      <div>
        <strong>{label}</strong>
        {hint && <small>{hint}</small>}
      </div>
      <div className="pk-stepper-ctrl">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
        >
          −
        </button>
        <span aria-live="polite">{value}</span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const pkg = getPackageById(id);
  const minDate = useMemo(tomorrowISO, []);

  const [form, setForm] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    phone: '',
    date: '',
    adults: 2,
    children: 0,
    addons: [],
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [saveError, setSaveError] = useState('');

  const pricing = useMemo(
    () => (pkg ? calcTotal(pkg, form.adults, form.children, form.addons) : null),
    [pkg, form.adults, form.children, form.addons]
  );

  if (!pkg) {
    return (
      <div>
        <Banner title="Package not found" subtitle="We couldn't find the package you are trying to book." />
        <div className="pk-page pk-center">
          <Link to="/packages" className="pk-btn pk-btn-primary">Browse all packages</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const setField = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const toggleAddon = (addonId) => {
    setForm((f) => ({
      ...f,
      addons: f.addons.includes(addonId)
        ? f.addons.filter((a) => a !== addonId)
        : [...f.addons, addonId],
    }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter the lead traveller\'s name.';
    if (!EMAIL_RE.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) next.phone = 'Please enter a valid phone number.';
    if (!form.date) next.date = 'Please choose your travel date.';
    else if (form.date < minDate) next.date = 'Please choose a future date.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    const booking = addBooking(user.email, {
      packageId: pkg.id,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      date: form.date,
      adults: form.adults,
      children: form.children,
      addons: form.addons,
      notes: form.notes.trim(),
      total: pricing.total,
    });

    if (!booking) {
      setSaveError('We could not save your booking. Please allow local storage in your browser and try again.');
      return;
    }
    navigate('/bookings', { state: { booked: booking.ref } });
  };

  return (
    <div>
      <Banner title="Complete your booking" subtitle={pkg.title} image={pkg.banner || pkg.image} />

      <div className="pk-page">
        <div className="pk-breadcrumb">
          <Link to="/packages">Packages</Link> / <Link to={`/package/${pkg.id}`}>{pkg.title}</Link> / <span>Book</span>
        </div>

        <form className="pk-booking-layout" onSubmit={handleSubmit} noValidate>
          <div className="pk-form">
            <h2>Traveller details</h2>

            <div className="pk-field">
              <label htmlFor="b-name">Lead traveller name</label>
              <input id="b-name" className="pk-input" value={form.name} onChange={(e) => setField('name', e.target.value)} autoComplete="name" />
              {errors.name && <span className="pk-err" role="alert">{errors.name}</span>}
            </div>

            <div className="pk-row">
              <div className="pk-field">
                <label htmlFor="b-email">Email</label>
                <input id="b-email" type="email" className="pk-input" value={form.email} onChange={(e) => setField('email', e.target.value)} autoComplete="email" />
                {errors.email && <span className="pk-err" role="alert">{errors.email}</span>}
              </div>
              <div className="pk-field">
                <label htmlFor="b-phone">Phone</label>
                <input id="b-phone" type="tel" className="pk-input" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setField('phone', e.target.value)} autoComplete="tel" />
                {errors.phone && <span className="pk-err" role="alert">{errors.phone}</span>}
              </div>
            </div>

            <div className="pk-field">
              <label htmlFor="b-date">Preferred travel date</label>
              <input id="b-date" type="date" className="pk-input" min={minDate} value={form.date} onChange={(e) => setField('date', e.target.value)} />
              {errors.date && <span className="pk-err" role="alert">{errors.date}</span>}
            </div>

            <h2>Travellers</h2>
            <Stepper
              label="Adults"
              hint="12 years and above"
              value={form.adults}
              min={1}
              max={9}
              onChange={(v) => setField('adults', v)}
            />
            <Stepper
              label="Children"
              hint="Below 12 years"
              value={form.children}
              min={0}
              max={6}
              onChange={(v) => setField('children', v)}
            />

            <h2>Add-ons</h2>
            <div className="pk-addons">
              {ADDONS.map((a) => (
                <label key={a.id} className={`pk-addon ${form.addons.includes(a.id) ? 'pk-addon-on' : ''}`}>
                  <input
                    type="checkbox"
                    checked={form.addons.includes(a.id)}
                    onChange={() => toggleAddon(a.id)}
                  />
                  <span>{a.label}</span>
                  <em>{formatINR(a.price)} / traveller</em>
                </label>
              ))}
            </div>

            <div className="pk-field">
              <label htmlFor="b-notes">Special requests (optional)</label>
              <textarea id="b-notes" className="pk-input" rows="3" value={form.notes} onChange={(e) => setField('notes', e.target.value)} />
            </div>
          </div>

          <aside className="pk-summary">
            <div className="pk-book-card">
              <img className="pk-summary-img" src={pkg.image} alt={pkg.title} />
              <h3>{pkg.title}</h3>
              <p className="pk-summary-sub">{pkg.days} days / {pkg.days - 1} nights · {pkg.destinations.join(', ')}</p>

              <dl className="pk-lines">
                <div><dt>{form.adults} adult{form.adults > 1 ? 's' : ''} × {formatINR(pkg.price)}</dt><dd>{formatINR(pricing.adultsTotal)}</dd></div>
                {form.children > 0 && (
                  <div><dt>{form.children} child{form.children > 1 ? 'ren' : ''} × {formatINR(pricing.childPrice)}</dt><dd>{formatINR(pricing.childrenTotal)}</dd></div>
                )}
                {pricing.addons.map((a) => (
                  <div key={a.id}><dt>{a.label}</dt><dd>{formatINR(a.total)}</dd></div>
                ))}
                <div className="pk-total"><dt>Total</dt><dd>{formatINR(pricing.total)}</dd></div>
              </dl>

              {saveError && <p className="pk-err" role="alert">{saveError}</p>}

              <button type="submit" className="pk-btn pk-btn-primary pk-btn-block">
                Confirm booking
              </button>
              <Link to={`/package/${pkg.id}`} className="pk-btn pk-btn-ghost pk-btn-block">
                Back to package
              </Link>
              <p className="pk-note">No payment is taken on this site. Our team will contact you to confirm details and payment.</p>
            </div>
          </aside>
        </form>
      </div>

      <Footer />
    </div>
  );
}
