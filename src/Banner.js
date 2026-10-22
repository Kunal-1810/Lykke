import React from 'react';
import bg from './images/bg.image.jpg';
import './Packages.css';

// Hero strip used at the top of inner pages (sits under the navbar).
export default function Banner({ title, subtitle, image, children }) {
  return (
    <section
      className="pk-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.6)), url(${image || bg})`,
      }}
    >
      <div className="pk-banner-inner">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
