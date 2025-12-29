import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="HandyAF Landscaping" />
        </Link>
        
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li className="has-dropdown">
            <Link to="/services" className={location.pathname.includes('/services') ? 'active' : ''}>Services</Link>
            <ul className="dropdown">
              <li><Link to="/services/landscape-design">Landscape Design</Link></li>
              <li><Link to="/services/landscape-planting">Landscape Planting</Link></li>
              <li><Link to="/services/landscape-lighting">Landscape Lighting</Link></li>
              <li><Link to="/services/enhancement-lawn-care">Enhancement & Lawn Care</Link></li>
              <li><Link to="/services/commercial-snow-removal">Commercial Snow Removal</Link></li>
            </ul>
          </li>
          <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
        </ul>

        <Link to="/contact" className="navbar-cta btn btn-primary">Get A Quote</Link>
      </div>
    </nav>
  );
}

export default Navbar;
