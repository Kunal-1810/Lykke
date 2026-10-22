import React, { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import { CONTACT, getPackageById } from './Data';
import './Packages.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FAQS = [
  ['How do I book a package?', 'Open any package, choose "Select & Book", log in, fill in the traveller details and confirm. Your booking appears under My Bookings.'],
  ['Do I pay when I book?', 'No payment is taken on this website. After you confirm, our team contacts you to finalise details and payment.'],
  ['Can I cancel a booking?', 'Yes. Go to My Bookings and use "Cancel booking" on the trip.'],
  ['Are visas included?', 'Visa fees are not included, but you can add visa assistance while booking.'],
  ['Can you customise a trip?', 'Yes. Send us your plans through the Contact page and we will build a trip around them.'],
];

const TEXT_PAGES = {
  reviews: {
    title: 'Reviews',
    subtitle: 'Rated 4.6 out of 5 by our travellers.',
    body: [
      'Travellers rate Travel Lykke 4.6 out of 5 on online platforms. We are proud of the feedback, and we read every message.',
      'Travelled with us recently? Tell us how it went through the Contact page.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we handle your information.',
    body: [
      'We collect the details you give us, such as your name, email, phone number and trip preferences, to create your account, process bookings and answer enquiries.',
      'We do not sell your personal information. We share it only with partners needed to deliver your trip, such as hotels and local operators.',
      'You can ask us to correct or delete your information at any time by contacting us.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Please read before booking.',
    body: [
      'Package prices are per person and may change with availability, season and currency. Your final price is confirmed by our team when we contact you.',
      'Cancellation and refund terms are shared when your booking is confirmed. Visa decisions rest with the issuing authority.',
      'Travellers are responsible for holding valid passports and the documents required for their destination.',
    ],
  },
};

function Contact() {
  const [params] = useSearchParams();
  const pkg = getPackageById(params.get('package') || '');
  const topic = params.get('topic') || '';
  const initialMessage = pkg
    ? `I'd like to know more about "${pkg.title}".`
    : topic
    ? `I'm interested in a trip to ${topic}.`
    : '';

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: initialMessage });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const setField = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!EMAIL_RE.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 5) next.message = 'Please tell us a little about your trip.';
    setErrors(next);
    if (Object.keys(next).length) return;

    try {
      const list = JSON.parse(window.localStorage.getItem('tl_enquiries') || '[]');
      list.push({ ...form, at: new Date().toISOString() });
      window.localStorage.setItem('tl_enquiries', JSON.stringify(list));
    } catch (err) {
      /* ignore storage errors */
    }

    if (CONTACT.email) {
      const body = `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Travel enquiry')}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="pk-empty">
        <h2>Thank you, {form.name.split(' ')[0]}!</h2>
        <p>Your enquiry has been recorded.</p>
        <div className="pk-actions-row">
          <Link to="/packages" className="pk-btn pk-btn-primary">Browse packages</Link>
          <Link to="/" className="pk-btn pk-btn-ghost">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <form className="pk-form pk-form-narrow" onSubmit={submit} noValidate>
      <div className="pk-field">
        <label htmlFor="c-name">Name</label>
        <input id="c-name" className="pk-input" value={form.name} onChange={(e) => setField('name', e.target.value)} />
        {errors.name && <span className="pk-err" role="alert">{errors.name}</span>}
      </div>
      <div className="pk-row">
        <div className="pk-field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" type="email" className="pk-input" value={form.email} onChange={(e) => setField('email', e.target.value)} />
          {errors.email && <span className="pk-err" role="alert">{errors.email}</span>}
        </div>
        <div className="pk-field">
          <label htmlFor="c-phone">Phone (optional)</label>
          <input id="c-phone" type="tel" className="pk-input" value={form.phone} onChange={(e) => setField('phone', e.target.value)} />
        </div>
      </div>
      <div className="pk-field">
        <label htmlFor="c-msg">Message</label>
        <textarea id="c-msg" rows="5" className="pk-input" value={form.message} onChange={(e) => setField('message', e.target.value)} />
        {errors.message && <span className="pk-err" role="alert">{errors.message}</span>}
      </div>
      <button type="submit" className="pk-btn pk-btn-primary">Send enquiry</button>
    </form>
  );
}

function Faqs() {
  const [open, setOpen] = useState(0);
  return (
    <div className="pk-acc">
      {FAQS.map(([q, a], i) => (
        <div key={q} className={`pk-acc-item ${open === i ? 'pk-acc-open' : ''}`}>
          <button type="button" className="pk-acc-head" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="pk-acc-title">{q}</span>
            <span className="pk-acc-icon" aria-hidden="true">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div className="pk-acc-body"><p>{a}</p></div>}
        </div>
      ))}
    </div>
  );
}

export default function InfoPage() {
  const { slug } = useParams();
  let title;
  let subtitle;
  let content;

  if (slug === 'contact') {
    title = 'Contact us';
    subtitle = 'Tell us about your dream holiday and we will help plan it.';
    content = <Contact />;
  } else if (slug === 'faqs') {
    title = 'FAQs';
    subtitle = 'Quick answers to common questions.';
    content = <Faqs />;
  } else if (TEXT_PAGES[slug]) {
    const page = TEXT_PAGES[slug];
    title = page.title;
    subtitle = page.subtitle;
    content = (
      <>
        {page.body.map((t) => <p key={t}>{t}</p>)}
        {slug === 'reviews' && (
          <div className="pk-actions-row">
            <Link to="/info/contact" className="pk-btn pk-btn-primary">Share your feedback</Link>
            <Link to="/packages" className="pk-btn pk-btn-ghost">Browse packages</Link>
          </div>
        )}
      </>
    );
  } else {
    title = 'Page not found';
    subtitle = 'We could not find that page.';
    content = <Link to="/" className="pk-btn pk-btn-primary">Back to home</Link>;
  }

  return (
    <div>
      <Banner title={title} subtitle={subtitle} />
      <div className="pk-page pk-narrow">{content}</div>
      <Footer />
    </div>
  );
}
