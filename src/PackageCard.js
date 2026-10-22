import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatINR } from './Data';

export default function PackageCard({ pkg }) {
  const navigate = useNavigate();
  const detail = `/package/${pkg.id}`;

  return (
    <article className="pk-card">
      <Link to={detail} className="pk-card-imglink" aria-label={`View ${pkg.title}`}>
        <img className="pk-card-img" src={pkg.image} alt={pkg.title} loading="lazy" />
      </Link>
      <div className="pk-card-body">
        <h3 className="pk-card-title">
          <Link to={detail}>{pkg.title}</Link>
        </h3>
        <p className="pk-card-dest">{pkg.destinations.join(', ')}</p>
        <p className="pk-card-meta">{pkg.days} days · {pkg.days - 1} nights</p>
        <div className="pk-card-foot">
          <div className="pk-card-price">
            <span>From</span>
            <strong>{formatINR(pkg.price)}</strong>
            <span>per person</span>
          </div>
          <div className="pk-card-actions">
            <Link to={detail} className="pk-btn pk-btn-ghost pk-btn-sm">View details</Link>
            <button
              type="button"
              className="pk-btn pk-btn-primary pk-btn-sm"
              onClick={() => navigate(`/book/${pkg.id}`)}
            >
              Select &amp; Book
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
