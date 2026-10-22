import React, { useState } from 'react';
import './Home.css';
import './Packages.css';
import { useNavigate } from 'react-router-dom';
import bg from './images/bg.image.jpg';
import india from './images/in.svg';
import japan from './images/jp.svg';
import egypt from './images/eg.svg';
import greece from './images/gr.svg';
import georgia from './images/ge.svg';
import kenya from './images/ke.svg';
import philippines from './images/ph.svg';
import japanbig from './images/japanbig.webp';
import thaibig from './images/thaibig.webp';
import singabig from './images/singabig.webp';
import singacitybig from './images/singacitybig.webp';
import Features from './Features';
import Footer from './Footer';
import { DESTINATIONS, PACKAGES, formatINR, startingPrice } from './Data';

const HERO_DESTINATIONS = [
  { label: 'Explore_India', flag: india, alt: 'india', country: 'India' },
  { label: 'Japan', flag: japan, alt: 'japan', country: 'Japan' },
  { label: 'Egypt', flag: egypt, alt: 'egypt', country: 'Egypt' },
  { label: 'Greece', flag: greece, alt: 'greece', country: 'Greece' },
  { label: 'Georgia', flag: georgia, alt: 'georgia', country: 'Georgia' },
  { label: 'Kenya', flag: kenya, alt: 'kenya', country: 'Kenya' },
  { label: 'Philippines', flag: philippines, alt: 'philippines', country: 'Philippines' },
];

function Home() {
  const sliderImages = [
    { src: japanbig, alt: 'japan' },
    { src: thaibig, alt: 'thaibig' },
    { src: singabig, alt: 'singabig' },
    { src: singacitybig, alt: 'singacity' },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const moveImageSlide = (direction) => {
    setCurrentImage((prev) => (prev + direction + sliderImages.length) % sliderImages.length);
  };

  const openPackage = (packageId) => navigate(`/package/${packageId}`);
  const openCountry = (country) => navigate(`/packages?country=${encodeURIComponent(country)}`);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/packages?q=${encodeURIComponent(q)}` : '/packages');
  };

  const featured = PACKAGES.filter((p) => p.featured);

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
        <form className="search-box" onSubmit={handleSearch} role="search">
          <input
            type="text"
            placeholder="Search for Destinations"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search for destinations"
          />
          <button type="submit" className="search-button" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
        <div>
          <h5> Most Popular Destinations</h5>
          <br />
          <div className="destinations">
            {HERO_DESTINATIONS.map((d) => (
              <button
                key={d.label}
                type="button"
                className="des-button"
                onClick={() => openCountry(d.country)}
              >
                <img className="countrylogo" src={d.flag} alt={d.alt} />
                <span>{d.label}</span>
              </button>
            ))}
          </div>
        </div>
        <h2> HOLIDAYS FOR GLOBAL INDIANS </h2>
      </div>

      <div>
        <h3> Popular handpicked packages </h3>
        <div>
          <div className="cards-container">
            {featured.map((p) => (
              <div
                key={p.id}
                className="card"
                role="button"
                tabIndex={0}
                onClick={() => openPackage(p.id)}
                onKeyDown={(e) => e.key === 'Enter' && openPackage(p.id)}
              >
                <img className="card-img" src={p.image} alt={p.title} />
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">
                  {p.destinations.join(', ')}<br />
                  <strong>{formatINR(p.price)}</strong> for {p.days} days
                </p>
              </div>
            ))}
          </div>
          <div className="pk-center">
            <button type="button" className="pk-btn pk-btn-primary" onClick={() => navigate('/packages')}>
              View all packages
            </button>
          </div>
        </div>

        <h3>most popular destinations</h3>
        <div>
          <div className="cards-container">
            {DESTINATIONS.map((d) => (
              <div
                key={d.name}
                className="card2"
                role="button"
                tabIndex={0}
                onClick={() => openCountry(d.country)}
                onKeyDown={(e) => e.key === 'Enter' && openCountry(d.country)}
                style={{
                  backgroundImage: `url(${d.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '40vh',
                  position: 'relative',
                }}
              >
                <h3 className="card-title1">{d.name}</h3>
                <p2 className="card-desc1">
                  Packages starting from <br />
                  <strong>{formatINR(startingPrice(d.country))}*</strong>
                </p2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="image-slider">
            <div className="slider-images">
              {sliderImages.map((img, index) => (
                <img
                  key={index}
                  className={`bigcard ${index === currentImage ? 'active' : ''}`}
                  src={img.src}
                  alt={img.alt}
                />
              ))}
            </div>

            <button type="button" className="slider-arrow arrow-left" aria-label="Previous image" onClick={() => moveImageSlide(-1)}>
              ‹
            </button>
            <button type="button" className="slider-arrow arrow-right" aria-label="Next image" onClick={() => moveImageSlide(1)}>
              ›
            </button>
          </div>
        </div>

        <Features />
        <br />
        <br />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
