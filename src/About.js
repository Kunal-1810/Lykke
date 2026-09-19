import React from 'react';
import './Pages.css';
import logo from './images/logo.svg';

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>About Travel Lykke</h1>
        <p>Designing unforgettable holiday experiences for global Indian travelers</p>
      </div>

      <div className="page-container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Travel Lykke is a premier travel agency dedicated to redefining international holidays for Global Indians. We combine local expertise, transparent pricing, and 24/7 dedicated support to create bespoke vacations across Asia, Europe, Africa, and beyond.
            </p>

            <div className="about-stats">
              <div className="stat-box">
                <h3>50,000+</h3>
                <p>Happy Travelers</p>
              </div>
              <div className="stat-box">
                <h3>40+</h3>
                <p>Global Destinations</p>
              </div>
              <div className="stat-box">
                <h3>4.8 / 5</h3>
                <p>Customer Rating</p>
              </div>
            </div>
          </div>

          <div className="about-card-box">
            <img src={logo} alt="Travel Lykke" className="about-logo-img" />
            <h3>Holidays for Global Indians</h3>
            <p>From seamless visa documentation to luxury private transfers and authentic local cuisine recommendations, we handle every detail so you can travel stress-free.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;