import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Banner from './Banner';
import Features from './Features';
import Footer from './Footer';
import { useAuth } from './AuthContext';
import { cancelBooking, getBookings } from './bookingStore';
import { ADDONS, formatINR, getPackageById } from './Data';
import './Packages.css';

const fmtDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

function Bookings() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [bookings, setBookings] = useState(() => (user ? getBookings(user.email) : []));
  const [confirming, setConfirming] = useState(null);
  const justBooked = location.state && location.state.booked;

  useEffect(() => {
    setBookings(user ? getBookings(user.email) : []);
    setConfirming(null);
  }, [user]);

  const handleCancel = (ref) => {
    setBookings(cancelBooking(user.email, ref));
    setConfirming(null);
  };

  return (
    <div>
      <Banner title="My bookings" subtitle="Everything you have booked with Travel Lykke, in one place." />

      <div className="pk-page">
        {!user ? (
          <div className="pk-empty">
            <h2>Log in to see your bookings</h2>
            <p>Your trips are saved to your account.</p>
            <div className="pk-actions-row">
              <button
                type="button"
                className="pk-btn pk-btn-primary"
                onClick={() => navigate('/login', { state: { from: '/bookings' } })}
              >
                Login
              </button>
              <button
                type="button"
                className="pk-btn pk-btn-ghost"
                onClick={() => navigate('/register', { state: { from: '/bookings' } })}
              >
                Create an account
              </button>
            </div>
          </div>
        ) : (
          <>
            {justBooked && (
              <div className="pk-alert pk-alert-success" role="status">
                Booking confirmed! Your reference is <strong>{justBooked}</strong>. Our team will contact you shortly.
              </div>
            )}

            {bookings.length === 0 ? (
              <div className="pk-empty">
                <h2>No current bookings</h2>
                <p>Pick a package and your trip will show up here.</p>
                <Link to="/packages" className="pk-btn pk-btn-primary">Browse packages</Link>
              </div>
            ) : (
              <div className="pk-bookings">
                {bookings.map((b) => {
                  const pkg = getPackageById(b.packageId);
                  const cancelled = b.status === 'Cancelled';
                  return (
                    <article key={b.ref} className={`pk-booking ${cancelled ? 'pk-booking-cancelled' : ''}`}>
                      {pkg && <img className="pk-booking-img" src={pkg.image} alt={pkg.title} />}
                      <div className="pk-booking-body">
                        <div className="pk-booking-top">
                          <h3>{pkg ? pkg.title : 'Package no longer available'}</h3>
                          <span className={`pk-status ${cancelled ? 'pk-status-off' : 'pk-status-on'}`}>{b.status}</span>
                        </div>
                        <p className="pk-booking-ref">Ref {b.ref} · booked {fmtDate(b.createdAt.slice(0, 10))}</p>
                        <ul className="pk-booking-facts">
                          <li><b>Travel date</b> {fmtDate(b.date)}</li>
                          <li><b>Travellers</b> {b.adults} adult{b.adults > 1 ? 's' : ''}{b.children > 0 ? `, ${b.children} child${b.children > 1 ? 'ren' : ''}` : ''}</li>
                          <li><b>Lead traveller</b> {b.name}</li>
                          {b.addons.length > 0 && (
                            <li><b>Add-ons</b> {b.addons.map((id) => (ADDONS.find((a) => a.id === id) || { label: id }).label).join(', ')}</li>
                          )}
                          <li><b>Total</b> {formatINR(b.total)}</li>
                        </ul>
                        <div className="pk-actions-row">
                          {pkg && (
                            <Link to={`/package/${pkg.id}`} className="pk-btn pk-btn-ghost pk-btn-sm">View package</Link>
                          )}
                          {cancelled && pkg && (
                            <button type="button" className="pk-btn pk-btn-primary pk-btn-sm" onClick={() => navigate(`/book/${pkg.id}`)}>
                              Book again
                            </button>
                          )}
                          {!cancelled && confirming !== b.ref && (
                            <button type="button" className="pk-btn pk-btn-danger pk-btn-sm" onClick={() => setConfirming(b.ref)}>
                              Cancel booking
                            </button>
                          )}
                          {!cancelled && confirming === b.ref && (
                            <>
                              <span className="pk-confirm-text">Cancel this booking?</span>
                              <button type="button" className="pk-btn pk-btn-danger pk-btn-sm" onClick={() => handleCancel(b.ref)}>
                                Yes, cancel
                              </button>
                              <button type="button" className="pk-btn pk-btn-ghost pk-btn-sm" onClick={() => setConfirming(null)}>
                                Keep it
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      <Features />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Bookings;
