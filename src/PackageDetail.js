import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import PackageCard from './PackageCard';
import { useAuth } from './AuthContext';
import { EXCLUSIONS, INCLUSIONS, PACKAGES, formatINR, getPackageById } from './Data';
import './Packages.css';

export default function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [openDay, setOpenDay] = useState(0);
  const pkg = getPackageById(id);

  if (!pkg) {
    return (
      <div>
        <Banner title="Package not found" subtitle="This package may have been removed or the link is incorrect." />
        <div className="pk-page pk-center">
          <Link to="/packages" className="pk-btn pk-btn-primary">Browse all packages</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = PACKAGES.filter((p) => p.id !== pkg.id)
    .sort((a, b) => {
      const shared = (p) => p.countries.filter((c) => pkg.countries.includes(c)).length;
      return shared(b) - shared(a);
    })
    .slice(0, 3);

  return (
    <div>
      <Banner title={pkg.title} subtitle={pkg.tagline} image={pkg.banner || pkg.image}>
        <div className="pk-banner-chips">
          <span>{pkg.days} days / {pkg.days - 1} nights</span>
          <span>{pkg.destinations.length} destinations</span>
          <span>From {formatINR(pkg.price)} per person</span>
        </div>
      </Banner>

      <div className="pk-page">
        <div className="pk-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/packages">Packages</Link> / <span>{pkg.title}</span>
        </div>

        <div className="pk-detail">
          <div className="pk-main">
            <section className="pk-section">
              <h2>Overview</h2>
              <p>{pkg.overview}</p>
              <p><strong>Destinations:</strong> {pkg.destinations.join(' · ')}</p>
            </section>

            <section className="pk-section">
              <h2>Highlights</h2>
              <ul className="pk-list pk-list-check">
                {pkg.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </section>

            <section className="pk-section">
              <h2>Itinerary</h2>
              <div className="pk-acc">
                {pkg.itinerary.map((item, i) => {
                  const open = openDay === i;
                  return (
                    <div key={item.when} className={`pk-acc-item ${open ? 'pk-acc-open' : ''}`}>
                      <button
                        type="button"
                        className="pk-acc-head"
                        aria-expanded={open}
                        onClick={() => setOpenDay(open ? -1 : i)}
                      >
                        <span className="pk-acc-when">{item.when}</span>
                        <span className="pk-acc-title">{item.title}</span>
                        <span className="pk-acc-icon" aria-hidden="true">{open ? '−' : '+'}</span>
                      </button>
                      {open && <div className="pk-acc-body"><p>{item.text}</p></div>}
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="pk-section pk-two">
              <div>
                <h2>Inclusions</h2>
                <ul className="pk-list pk-list-check">
                  {INCLUSIONS.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
              <div>
                <h2>Exclusions</h2>
                <ul className="pk-list pk-list-cross">
                  {EXCLUSIONS.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </section>
          </div>

          <aside className="pk-aside">
            <div className="pk-book-card">
              <div className="pk-book-price">
                <span>Starting from</span>
                <strong>{formatINR(pkg.price)}</strong>
                <span>per person</span>
              </div>
              <ul className="pk-facts">
                <li><b>Duration</b><span>{pkg.days} days / {pkg.days - 1} nights</span></li>
                <li><b>Stops</b><span>{pkg.destinations.join(', ')}</span></li>
              </ul>
              <button
                type="button"
                className="pk-btn pk-btn-primary pk-btn-block"
                onClick={() => navigate(`/book/${pkg.id}`)}
              >
                Select &amp; Book
              </button>
              <Link
                to={`/info/contact?package=${pkg.id}`}
                className="pk-btn pk-btn-ghost pk-btn-block"
              >
                Enquire about this trip
              </Link>
              {!user && (
                <p className="pk-note">You'll be asked to log in to complete your booking.</p>
              )}
              <Link to="/packages" className="pk-back">← Back to all packages</Link>
            </div>
          </aside>
        </div>

        <section className="pk-section pk-related">
          <h2>You may also like</h2>
          <div className="pk-grid">
            {related.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
