import React, { useState } from 'react';
import './Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>Contact Our Travel Experts</h1>
        <p>Have questions about a holiday package or custom itinerary? We are here to help 24/7</p>
      </div>

      <div className="page-container">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h2>Get In Touch</h2>
            <p>Our travel concierge team is ready to plan your next dream vacation.</p>

            <div className="contact-method">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Head Office</h4>
                <p>Travel Lykke Pvt Ltd, Tech Park, Indiranagar, Bengaluru, India</p>
              </div>
            </div>

            <div className="contact-method">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Call & WhatsApp</h4>
                <p>+91 98765 43210 / +91 80 1234 5678</p>
              </div>
            </div>

            <div className="contact-method">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email Support</h4>
                <p>support@travellykke.com / holidays@travellykke.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. One of our destination specialists will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send Us A Message</h3>
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                  />
                </div>

                <div className="form-group">
                  <label>Destination / Query</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us where you want to travel..." 
                    required 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;