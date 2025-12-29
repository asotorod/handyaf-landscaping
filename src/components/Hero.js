import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero({ title, subtitle, showButtons = true, backgroundImage, overlay = true }) {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${backgroundImage || '/images/hero-bg.jpg'})` }}
    >
      {overlay && <div className="hero-overlay"></div>}
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {showButtons && (
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Get A Quote</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
