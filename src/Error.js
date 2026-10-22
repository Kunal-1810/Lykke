import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Error = () => {
  return (
    <div>
      <Banner title="Page not found" subtitle="The page you are looking for does not exist or has moved." />
      <div className="pk-page pk-center">
        <Link to="/" className="pk-btn pk-btn-primary">Back to home</Link>{' '}
        <Link to="/packages" className="pk-btn pk-btn-ghost">Browse packages</Link>
      </div>
    </div>
  );
};

export default Error;
