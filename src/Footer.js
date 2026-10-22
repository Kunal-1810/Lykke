import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from './images/logo1.svg';

const QUICK_LINKS = [
  ['Home', '/'],
  ['Packages', '/packages'],
  ['About Us', '/about'],
  ['Contact Us', '/info/contact'],
  ['Reviews', '/info/reviews'],
  ['Privacy Policy', '/info/privacy'],
  ['Terms & Conditions', '/info/terms'],
  ['FAQs', '/info/faqs'],
];
const MUST_VISIT = ['Egypt', 'Georgia', 'Kenya', 'Turkey', 'Azerbaijan', 'Philippines', 'Kazakhstan', 'Tanzania'];
const POPULAR = ['Thailand', 'Singapore', 'Malaysia', 'Maldives', 'Mauritius', 'Vietnam', 'Bhutan', 'Jordan', 'Sri Lanka', 'Greece'];

const countryLink = (c) => `/packages?country=${encodeURIComponent(c)}`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-text">
              <img className="Logo" src={logo1} alt="Travel Lykke" />
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
              {QUICK_LINKS.map(([label, to]) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Must Visit</h4>
            <ul>
              {MUST_VISIT.map((c) => (
                <li key={c}><Link to={countryLink(c)}>{c}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Popular</h4>
            <ul>
              {POPULAR.map((c) => (
                <li key={c}><Link to={countryLink(c)}>{c}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 TRAVEL LYKKE PRIVATE LIMITED. All Rights Reserved</p>
        <div className="footer-socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h3l1-4h-4v-2a1 1 0 0 1 1-1z"/></svg>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l6 3-6 3z" fill="#1a1a1a" stroke="none"/></svg>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6"><path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3z"/><path d="M8.5 8.8c.3-.7.6-.7.9-.7h.6c.2 0 .4 0 .6.5.2.5.7 1.6.7 1.7.1.1.1.3 0 .5-.1.2-.2.3-.3.4l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.1.5.1.7-.1l.6-.7c.2-.3.4-.2.7-.1l1.6.8c.2.1.4.2.5.3.1.2.1.9-.2 1.4-.3.5-1.5 1.2-2 1.2-.6 0-1.6-.1-3.5-1.1-2.5-1.3-4.1-3.9-4.2-4.1-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.8-2z" fill="#1a1a1a" stroke="none"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
