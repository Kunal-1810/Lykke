import React from 'react';
import logo from './images/logo.svg';
import './Menu.css';

const Menu = ({ onOpenBookings, onOpenLogin, isScrolled, searchQuery, setSearchQuery }) => {
  return (
    <header className={`lykke-header ${isScrolled ? 'scrolled-header' : 'hero-header'}`}>
      <div className="header-inner">
        {/* LOGO */}
        <div className="header-logo">
          <img src={logo} alt="travel LYKKE" className="lykke-logo-img" />
        </div>

        {/* CENTER SECTION: Search bar when scrolled OR Experience/AI buttons on Hero */}
        {isScrolled ? (
          <div className="header-search-bar">
            <input
              type="text"
              placeholder="Search for Destinations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header-search-input"
            />
            <button className="header-search-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        ) : (
          <div className="header-center-actions">
            <button className="exp-pill-btn">
              <span className="exp-icon">🎈</span>
              <span className="exp-text">Experiences</span>
              <span className="new-badge">NEW</span>
            </button>

            <button className="ai-plan-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              <span>Plan with AI</span>
            </button>
          </div>
        )}

        {/* RIGHT ACTION BUTTONS */}
        <div className="header-right-actions">
          <button className="my-bookings-btn" onClick={onOpenBookings}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span>My bookings</span>
          </button>

          <button className="profile-circle-btn" onClick={onOpenLogin} aria-label="Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <button className="menu-circle-btn" aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Menu;