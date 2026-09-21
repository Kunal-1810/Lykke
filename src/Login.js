import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";
import bg from './images/bg.image.jpg';
import logo from './images/logo.svg';
import logo1 from './images/logo1.svg';

function Login() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const handleCardClick = (packageId) => {
  console.log('Clicked package:', packageId);
};

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative',
        }}
      >
        <div className="top-bar">
          <img className="Logo" href="#" src={logo} alt="Logo"/>
          <div className="nav-buttons">
            <button className="MyBookings" onClick={() => navigate("/bookings")}> <strong> My Bookings</strong>
            </button>
            <button className="Login" onClick={() => navigate("/login")}> <strong> Login</strong></button>
            <button className="About Us" onClick={() => navigate("/About")}> <strong> About </strong></button>
          </div>
        </div>

        <div className="pagename">
        <h2> HOLIDAYS FOR GLOBAL INDIANS </h2>
      </div>
      </div>
<div>
    <p>No current bookings </p>
</div>


        <h3>What makes us different? </h3>
          <div>
            <div className="cards-container">
              <div className="card1">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z"/>
                    <path d="M9 10l2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="card-title4">Seamless visa processing</h3>
                <p className="card-desc4">
                  Quick, hassle-free visa assistance for a smooth travel start.
                </p>
              </div>

              <div className="card1">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    <path d="M9 9h4M9 13h6"/>
                    <path d="M14 15l2-2 2.5 2.5L16 18l-2.5-.5.5-2.5z"/>
                  </svg>
                </div>
                <h3 className="card-title4">Curated by experts</h3>
                <p className="card-desc4">
                  Expert-designed itineraries ensuring unique, memorable travel experiences.
                </p>
              </div>

              <div className="card1">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 13a8 8 0 0 1 16 0"/>
                    <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H5a1 1 0 0 0-1 1z"/>
                    <path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h1a1 1 0 0 1 1 1z"/>
                    <path d="M15 19a2 2 0 0 1-2 2h-1"/>
                  </svg>
                </div>
                <h3 className="card-title4">Prompt on-trip Support</h3>
                <p className="card-desc4">
                  Round-the-clock assistance to keep your journey smooth, wherever you are.
                </p>
              </div>

              <div className="card1">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12l-4 3 4 3"/>
                    <path d="M16 12l4 3-4 3"/>
                    <path d="M13 4c-2 3-2 6 0 9s2 6 0 9" fill="none"/>
                    <path d="M11.5 6.5a2.5 2.5 0 1 1 3 3.9c-1 .8-2.5 1.6-2.5 3.1"/>
                  </svg>
                </div>
                <h3 className="card-title4">Exclusive Deals</h3>
                <p className="card-desc4">
                  Special offers, seasonal promotions, and loyalty rewards to make every trip more rewarding.
                </p>
              </div>

              <div className="card1">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="3.2"/>
                    <path d="M5 20c0-3.5 3-6 7-6"/>
                    <path d="M17.5 14.5l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"/>
                  </svg>
                </div>
                <h3 className="card-title4">Rated 4.6 out of 5</h3>
                <p className="card-desc4">
                  Rave reviews on online platforms from our happy customers.
                </p>
              </div>

              <div className="card1">
                <div className="card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E6007E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 20c8 0 12-6 12-14-6 0-10 3-11 8-3 1-4 4-4 6z"/>
                    <path d="M8 16c2-3 5-5 9-6"/>
                  </svg>
                </div>
                <h3 className="card-title4">Sustainable Travel</h3>
                <p className="card-desc4">
                  Environment friendly experience in collaboration with local communities.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />

          <footer className="site-footer">
            <div className="footer-top">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="footer-logo-text">
                    <img className="Logo" src={logo1} alt="Logo1" />
                  </div>
                </div>
                <h6 className="footer-tagline">
                  Holidays For<br />Global Indians
                </h6>
              </div>


            <div className="footer-col1">
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Packages</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Must Visit</h4>
                <ul>
                  <li><a href="#">Egypt</a></li>
                  <li><a href="#">Georgia</a></li>
                  <li><a href="#">Kenya</a></li>
                  <li><a href="#">Turkey</a></li>
                  <li><a href="#">Azerbaijan</a></li>
                  <li><a href="#">Philippines</a></li>
                  <li><a href="#">Kazakhstan</a></li>
                  <li><a href="#">Tanzania</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Popular</h4>
                <ul>
                  <li><a href="#">Thailand</a></li>
                  <li><a href="#">Singapore</a></li>
                  <li><a href="#">Malaysia</a></li>
                  <li><a href="#">Maldives</a></li>
                  <li><a href="#">Mauritius</a></li>
                  <li><a href="#">Vietnam</a></li>
                  <li><a href="#">Bhutan</a></li>
                  <li><a href="#">Jordan</a></li>
                  <li><a href="#">Sri Lanka</a></li>
                  <li><a href="#">Greece</a></li>
                </ul>
              </div>
             </div> 


            </div>
            <div className="footer-bottom">
              <p className="footer-copyright">© 2026 TRAVEL LYKKE PRIVATE LIMITED. All Rights Reserved</p>
              <div className="footer-socials">
                <a href="#" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h3l1-4h-4v-2a1 1 0 0 1 1-1z"/></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l6 3-6 3z" fill="#1a1a1a" stroke="none"/></svg>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6"><path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3z"/><path d="M8.5 8.8c.3-.7.6-.7.9-.7h.6c.2 0 .4 0 .6.5.2.5.7 1.6.7 1.7.1.1.1.3 0 .5-.1.2-.2.3-.3.4l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.1.5.1.7-.1l.6-.7c.2-.3.4-.2.7-.1l1.6.8c.2.1.4.2.5.3.1.2.1.9-.2 1.4-.3.5-1.5 1.2-2 1.2-.6 0-1.6-.1-3.5-1.1-2.5-1.3-4.1-3.9-4.2-4.1-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.8-2z" fill="#1a1a1a" stroke="none"/></svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
  );
}

export default Login;