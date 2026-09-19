import React, { useState } from 'react';
import './Pages.css';
import { HANDPICKED_PACKAGES } from './Data';

const Info = ({ onSelectPackage }) => {
  const [filterRegion, setFilterRegion] = useState('ALL');

  const filtered = HANDPICKED_PACKAGES.filter((pkg) => {
    if (filterRegion === 'ALL') return true;
    return pkg.country.toLowerCase() === filterRegion.toLowerCase();
  });

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <h1>All Holiday Packages</h1>
        <p>Explore all handcrafted international itineraries with complete details & pricing</p>
      </div>

      <div className="page-container">
        <div className="filter-bar">
          <button className={`filter-tab ${filterRegion === 'ALL' ? 'active' : ''}`} onClick={() => setFilterRegion('ALL')}>
            All Packages ({HANDPICKED_PACKAGES.length})
          </button>
          <button className={`filter-tab ${filterRegion === 'Singapore' ? 'active' : ''}`} onClick={() => setFilterRegion('Singapore')}>
            Singapore
          </button>
          <button className={`filter-tab ${filterRegion === 'Thailand' ? 'active' : ''}`} onClick={() => setFilterRegion('Thailand')}>
            Thailand
          </button>
          <button className={`filter-tab ${filterRegion === 'Turkey' ? 'active' : ''}`} onClick={() => setFilterRegion('Turkey')}>
            Turkey
          </button>
          <button className={`filter-tab ${filterRegion === 'Sri Lanka' ? 'active' : ''}`} onClick={() => setFilterRegion('Sri Lanka')}>
            Sri Lanka
          </button>
        </div>

        <div className="packages-grid">
          {filtered.map((pkg) => (
            <div key={pkg.id} className="pkg-card" onClick={() => onSelectPackage(pkg)}>
              <div className="pkg-card-img-container">
                <img src={pkg.image} alt={pkg.title} className="pkg-card-img" />
                <span className="pkg-days-badge">{pkg.days}</span>
              </div>
              <div className="pkg-card-content">
                <div className="pkg-card-header">
                  <span className="pkg-country">{pkg.country}</span>
                  <span className="pkg-rating">★ {pkg.rating}</span>
                </div>
                <h3 className="pkg-card-title">{pkg.title}</h3>
                <p className="pkg-card-location">📍 {pkg.location}</p>
                <div className="pkg-card-footer">
                  <div className="pkg-price-box">
                    <span className="price-from">Starts from</span>
                    <span className="price-amount">{pkg.price}</span>
                  </div>
                  <button className="pkg-view-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;