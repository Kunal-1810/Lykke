import React, { useState, useRef } from 'react';
import './Home.css';
import bg from './images/bg.image.jpg';
import india from './images/in.svg';
import japan from './images/jp.svg';
import egypt from './images/eg.svg';
import georgia from './images/ge.svg';
import kenya from './images/ke.svg';

import shri from './images/shri.webp';
import singa from './images/singa.webp';
import thai from './images/thai.webp';
import bhutan from './images/bhutan.webp';
import kazakistan from './images/kaza.webp';
import balicard from './images/balicard.webp';
import grcard from './images/grcard.webp';

import japanbig from './images/japanbig.webp';
import thaibig from './images/thaibig.webp';
import singabig from './images/singabig.webp';

const HANDPICKED = [
  {
    id: 'bali',
    title: 'Mystic Bali Trails',
    location: 'Kuta',
    price: '₹49,599',
    days: '5 Days',
    image: balicard,
  },
  {
    id: 'singapore-malaysia',
    title: 'Singapore Malaysia Panorama',
    location: 'Kuala Lumpur, Singapore, Langkawi, Kedah',
    price: '₹123,199',
    days: '10 Days',
    image: singa,
  },
  {
    id: 'mauritius',
    title: 'Mauritius Emerald Escape',
    location: 'Port Louis',
    price: '₹259,999',
    days: '6 Days',
    image: bhutan,
  },
  {
    id: 'greece',
    title: 'Legacy of the Greece',
    location: 'Athens, Santorini',
    price: '₹65,299',
    days: '5 Days',
    image: grcard,
  },
  {
    id: 'thailand',
    title: 'Journey through Thailand',
    location: 'Phuket, Krabi, Bangkok',
    price: '₹93,999',
    days: '9 Days',
    image: thai,
  },
  {
    id: 'srilanka',
    title: 'Wonders of Sri Lanka',
    location: 'Kandy, Nuwara Eliya, Colombo',
    price: '₹39,999',
    days: '6 Days',
    image: shri,
  },
];

const INDIA_EXPERIENCES = [
  {
    id: 'kashmir',
    title: 'Paradise Valley Kashmir Tour',
    location: 'Srinagar, Gulmarg, Pahalgam',
    price: '₹24,999',
    days: '6 Days',
    image: shri,
  },
  {
    id: 'kerela',
    title: 'Kerala Backwaters & Hills',
    location: 'Munnar, Alleppey, Kochi',
    price: '₹18,500',
    days: '5 Days',
    image: balicard,
  },
  {
    id: 'rajasthan',
    title: 'Royal Rajasthan Heritage',
    location: 'Jaipur, Udaipur, Jaisalmer',
    price: '₹29,999',
    days: '7 Days',
    image: kazakistan,
  },
];

const BANNERS = [
  {
    id: 1,
    image: japanbig,
  },
  {
    id: 2,
    image: thaibig,
  },
  {
    id: 3,
    image: singabig,
  },
];

const VISA_FREE = [
  { id: 'maldives', title: 'Maldives Paradise Resort', location: 'Male Atoll', price: '₹75,000', days: '4 Days', image: balicard },
  { id: 'thailand-vf', title: 'Phuket & Krabi Beach Tour', location: 'Phuket', price: '₹42,000', days: '5 Days', image: thai },
  { id: 'mauritius-vf', title: 'Mauritius Island Bliss', location: 'Port Louis', price: '₹1,15,000', days: '6 Days', image: grcard },
  { id: 'kazakhstan-vf', title: 'Almaty Mountain Retreat', location: 'Almaty', price: '₹48,000', days: '5 Days', image: kazakistan },
];

function Home({ onSelectPackage, searchQuery, setSearchQuery }) {
  const [activeBanner, setActiveBanner] = useState(0);
  const handpickedRef = useRef(null);
  const indiaRef = useRef(null);
  const visaFreeRef = useRef(null);

  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToContent = () => {
    const el = document.getElementById('main-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-banner" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-overlay"></div>

        <div className="hero-center-box">
          {/* SEARCH INPUT */}
          <div className="hero-search-bar">
            <input
              type="text"
              placeholder="Search for Destinations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="hero-search-input"
            />
            <button className="hero-search-circle-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {/* SUBTITLE */}
          <p className="popular-dest-heading">Most Popular Destinations</p>

          {/* DESTINATION PILLS */}
          <div className="hero-pills-row">
            <button className="dest-pill pill-india">
              <span className="pill-balloon">🎈</span>
              <img src={india} alt="India" className="pill-flag" />
              <span>Explore India</span>
            </button>

            <button className="dest-pill">
              <img src={japan} alt="Japan" className="pill-flag" />
              <span>Japan</span>
            </button>

            <button className="dest-pill">
              <img src={egypt} alt="Egypt" className="pill-flag" />
              <span>Egypt</span>
            </button>

            <button className="dest-pill">
              <span className="pill-flag">🇰🇿</span>
              <span>Kazakhstan</span>
            </button>

            <button className="dest-pill">
              <span className="pill-flag">🇮🇩</span>
              <span>Bali - Indonesia</span>
            </button>

            <button className="dest-pill">
              <img src={kenya} alt="Kenya" className="pill-flag" />
              <span>Kenya</span>
            </button>

            <button className="dest-pill">
              <img src={georgia} alt="Georgia" className="pill-flag" />
              <span>Georgia</span>
            </button>
          </div>

          {/* HERO TITLE */}
          <h1 className="hero-main-title">HOLIDAYS FOR GLOBAL INDIANS</h1>

          {/* DOWN ARROW BUTTON */}
          <button className="hero-down-arrow-btn" onClick={scrollToContent} aria-label="Scroll Down">
            ↓
          </button>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div id="main-content" className="main-sections-wrapper">
        {/* SECTION 1: POPULAR HANDPICKED PACKAGES */}
        <section className="carousel-section">
          <div className="section-title-row">
            <h2 className="section-heading">popular handpicked packages </h2>
            <div className="carousel-controls">
              <button className="carousel-arrow" onClick={() => scrollCarousel(handpickedRef, 'left')}>‹</button>
              <button className="carousel-arrow" onClick={() => scrollCarousel(handpickedRef, 'right')}>›</button>
            </div>
          </div>

          <div className="horizontal-scroll-container" ref={handpickedRef}>
            {HANDPICKED.map((item) => (
              <div key={item.id} className="package-card-item" onClick={() => onSelectPackage(item)}>
                <div className="card-img-wrapper">
                  <img src={item.image} alt={item.title} className="card-img" />
                </div>
                <h3 className="card-item-title">{item.title}</h3>
                <p className="card-item-location">{item.location}</p>
                <p className="card-item-price">
                  <strong>{item.price}</strong> for {item.days}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: EXPERIENCES IN INDIA */}
        <section className="carousel-section">
          <div className="section-title-row">
            <h2 className="section-heading">experiences in India </h2>
            <div className="carousel-controls">
              <button className="carousel-arrow" onClick={() => scrollCarousel(indiaRef, 'left')}>‹</button>
              <button className="carousel-arrow" onClick={() => scrollCarousel(indiaRef, 'right')}>›</button>
            </div>
          </div>

          <div className="horizontal-scroll-container" ref={indiaRef}>
            {INDIA_EXPERIENCES.map((item) => (
              <div key={item.id} className="package-card-item" onClick={() => onSelectPackage(item)}>
                <div className="card-img-wrapper">
                  <img src={item.image} alt={item.title} className="card-img" />
                </div>
                <h3 className="card-item-title">{item.title}</h3>
                <p className="card-item-location">{item.location}</p>
                <p className="card-item-price">
                  <strong>{item.price}</strong> for {item.days}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: BANNER CAROUSEL */}
        <section className="banner-slider-section">
          <div 
            className="banner-card-box clickable-banner" 
            onClick={() => {
              const bannerPackages = [
                { title: 'Japan Holiday Package', location: 'Tokyo • Kyoto • Mt. Fuji • Bullet Train', price: '₹1,80,000', days: '7 Days', image: BANNERS[0].image },
                { title: 'Thailand Luxury Escape', location: 'Phuket • Krabi • Bangkok', price: '₹93,999', days: '6 Days', image: BANNERS[1].image },
                { title: 'Singapore City Panorama', location: 'Marina Bay • Sentosa', price: '₹1,28,000', days: '5 Days', image: BANNERS[2].image }
              ];
              onSelectPackage(bannerPackages[activeBanner]);
            }}
          >
            <img src={BANNERS[activeBanner].image} alt="Holiday Banner" className="banner-bg-img" />

            {/* Slider controls */}
            <button 
              className="banner-nav-btn banner-prev" 
              onClick={(e) => { e.stopPropagation(); setActiveBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length); }}
              aria-label="Previous Banner"
            >
              ‹
            </button>
            <button 
              className="banner-nav-btn banner-next" 
              onClick={(e) => { e.stopPropagation(); setActiveBanner((prev) => (prev + 1) % BANNERS.length); }}
              aria-label="Next Banner"
            >
              ›
            </button>

            {/* Dots */}
            <div className="banner-dots" onClick={(e) => e.stopPropagation()}>
              {BANNERS.map((_, idx) => (
                <span
                  key={idx}
                  className={`b-dot ${idx === activeBanner ? 'active' : ''}`}
                  onClick={() => setActiveBanner(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: VISA FREE DESTINATIONS */}
        <section className="carousel-section">
          <div className="section-title-row">
            <h2 className="section-heading">Visa free destinations </h2>
            <div className="carousel-controls">
              <button className="carousel-arrow" onClick={() => scrollCarousel(visaFreeRef, 'left')}>‹</button>
              <button className="carousel-arrow" onClick={() => scrollCarousel(visaFreeRef, 'right')}>›</button>
            </div>
          </div>

          <div className="horizontal-scroll-container" ref={visaFreeRef}>
            {VISA_FREE.map((item) => (
              <div key={item.id} className="package-card-item" onClick={() => onSelectPackage(item)}>
                <div className="card-img-wrapper">
                  <img src={item.image} alt={item.title} className="card-img" />
                </div>
                <h3 className="card-item-title">{item.title}</h3>
                <p className="card-item-location">{item.location}</p>
                <p className="card-item-price">
                  <strong>{item.price}</strong> for {item.days}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;