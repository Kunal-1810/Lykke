import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Error = () => {
  return (
    <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ fontSize: '72px', color: '#cc0066', margin: 0 }}>404</h1>
        <h2 style={{ fontSize: '24px', margin: '12px 0' }}>Oops! Destination Not Found</h2>
        <p style={{ color: '#64748b', marginBottom: '24px' }}>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" style={{ padding: '12px 28px', background: '#cc0066', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 700 }}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;