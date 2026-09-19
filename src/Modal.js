import React, { useState } from 'react';
import './Modal.css';

export const LoginModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-pop" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>{isSignUp ? 'Account Created!' : 'Welcome Back!'}</h3>
            <p>Redirecting to your personalized travel dashboard...</p>
          </div>
        ) : (
          <div className="auth-form-container">
            <h2>{isSignUp ? 'Create Your Lykke Account' : 'Login to Travel Lykke'}</h2>
            <p className="auth-subtitle">Unlock exclusive member prices & track your bookings</p>

            <form onSubmit={handleSubmit} className="auth-form">
              {isSignUp && (
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </div>
              )}

              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>

              <button type="submit" className="auth-submit-btn">
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </form>

            <div className="auth-switch">
              {isSignUp ? (
                <span>Already have an account? <button onClick={() => setIsSignUp(false)}>Log In</button></span>
              ) : (
                <span>Don't have an account? <button onClick={() => setIsSignUp(true)}>Sign Up</button></span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const BookingsModal = ({ isOpen, onClose, bookings = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-pop large-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2>My Travel Bookings</h2>
        <p className="auth-subtitle">Manage upcoming trips, view itineraries, and download e-tickets</p>

        {bookings.length === 0 ? (
          <div className="empty-bookings">
            <div className="empty-icon">✈️</div>
            <h3>No Active Bookings Found</h3>
            <p>Explore our handpicked international holiday packages and plan your dream trip!</p>
            <button className="browse-btn" onClick={onClose}>Browse Holidays</button>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking, idx) => (
              <div key={idx} className="booking-card">
                <img src={booking.image} alt={booking.title} className="booking-img" />
                <div className="booking-details">
                  <h4>{booking.title}</h4>
                  <p className="booking-meta">📍 {booking.location} • ⏳ {booking.days}</p>
                  <p className="booking-date">📅 Travel Date: <strong>15 Oct 2026</strong></p>
                  <span className="booking-status confirmed">Confirmed</span>
                </div>
                <div className="booking-price-side">
                  <span className="booking-price">{booking.price}</span>
                  <button className="view-ticket-btn" onClick={() => alert(`Downloading E-Ticket for ${booking.title}`)}>E-Ticket</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const PackageDetailModal = ({ isOpen, onClose, pkg, onBookNow }) => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!isOpen || !pkg) return null;

  const handleBook = () => {
    onBookNow(pkg);
    setBookingConfirmed(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-pop pkg-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {bookingConfirmed ? (
          <div className="modal-success">
            <div className="success-icon">🎉</div>
            <h3>Booking Reserved!</h3>
            <p>Your reservation for <strong>{pkg.title}</strong> is saved under My Bookings.</p>
            <button className="browse-btn" onClick={() => { setBookingConfirmed(false); onClose(); }}>View My Bookings</button>
          </div>
        ) : (
          <div className="pkg-detail-body">
            <div className="pkg-image-wrapper">
              <img src={pkg.image} alt={pkg.title} className="pkg-full-img" />
              <div className="pkg-badge">{pkg.days}</div>
            </div>

            <div className="pkg-info">
              <h2>{pkg.title}</h2>
              <p className="pkg-loc">📍 {pkg.location}</p>
              
              {pkg.rating && (
                <div className="pkg-rating-row">
                  <span className="star-rating">★ {pkg.rating}</span>
                  <span className="review-count">({pkg.reviews} verified reviews)</span>
                </div>
              )}

              <div className="pkg-highlights">
                <h4>Package Highlights:</h4>
                <ul>
                  {pkg.highlights ? (
                    pkg.highlights.map((item, index) => <li key={index}>✓ {item}</li>)
                  ) : (
                    <>
                      <li>✓ Guided City Tour & Sightseeing</li>
                      <li>✓ Daily Breakfast & Premium Hotel Stay</li>
                      <li>✓ Airport Pick & Drop Transfers</li>
                      <li>✓ 24/7 On-Trip Concierge Support</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="pkg-footer-action">
                <div className="pkg-price-tag">
                  <span className="price-label">Starting From</span>
                  <span className="price-val">{pkg.price || pkg.startingPrice}</span>
                  <span className="price-unit">per person</span>
                </div>
                <button className="book-now-btn" onClick={handleBook}>Book This Holiday</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
