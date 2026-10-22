import React from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";
import bg from './images/bg.image.jpg';
import Features from './Features';
import Footer from './Footer';


function About() {
  const navigate = useNavigate();

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

        <div className="pagename">
        <h2> HOLIDAYS FOR GLOBAL INDIANS </h2>
      </div>
      </div>
<div>
  <div className="about-section">
  <div className="about-intro">
    <span className="about-tag">About Us</span>
    <p className="about-lead">
      Travel Lykke is a travel company built around one idea: a holiday should
      feel easy from the first search to the flight back home. We plan trips for
      Indian travellers who want well-organised journeys, honest prices and
      someone to call when they need help.
    </p>
  </div>

  <div className="about-stats">
    <div className="about-stat">
      <strong>4.6/5</strong>
      <span>Customer rating</span>
    </div>
    <div className="about-stat">
      <strong>24/7</strong>
      <span>On-trip support</span>
    </div>
    <div className="about-stat">
      <strong>20+</strong>
      <span>Destinations</span>
    </div>
  </div>

  <div className="about-two-col">
    <div className="about-block">
      <h3>Our story</h3>
      <h7>
        Planning an international trip can mean juggling visas, hotels, flights
        and sightseeing across a dozen tabs. We started Travel Lykke to bring all
        of that into one place, with itineraries designed by people who have
        actually travelled these routes.
      </h7>
      <h7>
        From Bhutan's quiet valleys to the beaches of Thailand and the history of
        Turkey, every package is built to be simple to book and memorable to live.
      </h7>
    </div>

    <div className="about-block about-mission">
      <h3>Our mission</h3>
      <h8>
        To make world travel stress-free for every Indian traveller, whether
        it's a first trip abroad, a family holiday or a honeymoon, by combining
        expert planning, fair pricing and real human support.
      </h8>
    </div>
  </div>

  <h3 className="about-subheading">What we stand for</h3>
  <div className="about-values">
    <div className="about-value">
      <h4>Seamless visa help</h4>
      <p>Quick, hassle-free visa assistance so your trip starts smoothly.</p>
    </div>
    <div className="about-value">
      <h4>Curated by experts</h4>
      <p>Itineraries designed to give you unique, memorable experiences.</p>
    </div>
    <div className="about-value">
      <h4>Support on the trip</h4>
      <p>Round-the-clock assistance, wherever you are in the world.</p>
    </div>
    <div className="about-value">
      <h4>Exclusive deals</h4>
      <p>Seasonal offers and loyalty rewards that make every trip worth more.</p>
    </div>
    <div className="about-value">
      <h4>Sustainable travel</h4>
      <p>Experiences created in collaboration with local communities.</p>
    </div>
    <div className="about-value">
      <h4>Loved by travellers</h4>
      <p>Rave reviews from happy customers on online platforms.</p>
    </div>
  </div>

  <div className="about-cta">
    <h3>Ready for your next holiday?</h3>
    <p>Explore our handpicked packages and let us plan the rest.</p>
    <button className="about-cta-btn" onClick={() => navigate("/packages")}>
      Explore Packages
    </button>
  </div>
</div>
</div>


        <Features />
          <br />
          <br />

          <Footer />
        </div>
  );
}

export default About;