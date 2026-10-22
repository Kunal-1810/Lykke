import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import PackageCard from './PackageCard';
import { COUNTRIES, PACKAGES, filterPackages } from './Data';
import './Packages.css';

const SORTERS = {
  recommended: () => 0,
  'price-low': (a, b) => a.price - b.price,
  'price-high': (a, b) => b.price - a.price,
  duration: (a, b) => a.days - b.days,
};

export default function Packages() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const country = params.get('country') || '';
  const [text, setText] = useState(q);
  const [sort, setSort] = useState('recommended');

  useEffect(() => {
    setText(q);
  }, [q]);

  const results = useMemo(
    () => filterPackages({ q, country }).sort(SORTERS[sort]),
    [q, country, sort]
  );

  const update = (next) => {
    const out = {};
    if (next.q) out.q = next.q;
    if (next.country) out.country = next.country;
    setParams(out);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    update({ q: text.trim(), country });
  };

  const clearAll = () => {
    setText('');
    setParams({});
  };

  const isActive = (c) => country.toLowerCase() === c.toLowerCase();
  const knownCountry = COUNTRIES.some(isActive);
  const topic = [country, q].filter(Boolean).join(' ');

  return (
    <div>
      <Banner
        title="Holiday packages"
        subtitle="Handpicked trips for global Indians. Pick one and book in minutes."
      />

      <div className="pk-page">
        <form className="pk-filterbar" onSubmit={handleSearch} role="search">
          <input
            type="text"
            className="pk-input"
            placeholder="Search destinations, e.g. Thailand or Bali"
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="Search packages"
          />
          <button type="submit" className="pk-btn pk-btn-primary">Search</button>
          <select
            className="pk-input pk-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort packages"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="duration">Shortest trip first</option>
          </select>
        </form>

        <div className="pk-chips" aria-label="Filter by country">
          <button
            type="button"
            className={`pk-chip ${!country ? 'pk-chip-active' : ''}`}
            onClick={() => update({ q, country: '' })}
          >
            All
          </button>
          {COUNTRIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`pk-chip ${isActive(c) ? 'pk-chip-active' : ''}`}
              onClick={() => update({ q, country: c })}
            >
              {c}
            </button>
          ))}
          {country && !knownCountry && (
            <button type="button" className="pk-chip pk-chip-active" onClick={() => update({ q, country: '' })}>
              {country} ✕
            </button>
          )}
        </div>

        <p className="pk-count">
          {results.length} of {PACKAGES.length} packages
          {topic ? ` for “${topic}”` : ''}
          {(q || country) && (
            <button type="button" className="pk-linkbtn" onClick={clearAll}>Clear filters</button>
          )}
        </p>

        {results.length > 0 ? (
          <div className="pk-grid">
            {results.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        ) : (
          <div className="pk-empty">
            <h2>No packages found{topic ? ` for “${topic}”` : ''}</h2>
            <p>We don't have a ready-made package for this yet, but we can plan one for you.</p>
            <div className="pk-actions-row">
              <button type="button" className="pk-btn pk-btn-primary" onClick={clearAll}>
                View all packages
              </button>
              <Link
                to={`/info/contact?topic=${encodeURIComponent(topic)}`}
                className="pk-btn pk-btn-ghost"
              >
                Ask us for a custom trip
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
