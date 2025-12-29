import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <PageHeader 
        title="About Us"
        subtitle="Learn more about Handy AF Home Services"
        backgroundImage="https://images.unsplash.com/photo-1532009877282-3340270e0529?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="section about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-content">
              <h2>Our Story</h2>
              <p>
                Bringing your vision of a perfect landscape, ornamental and edible garden 
                to life with precision and care that adjusts with the changing seasons. 
                We strive to care for every property as if it is our own and treat every 
                client like family.
              </p>
              <p>
                At Handy AF Home Services, we believe that landscaping is more than just 
                cutting grass and trimming trees. It's about creating beautiful and 
                functional outdoor spaces that enhance your quality of life and reflect 
                your personal style.
              </p>
              <p>
                Based in Blooming Grove, NY, we proudly serve Orange County and the 
                surrounding areas including Cornwall, Campbell Hall, and beyond. Our team 
                has the knowledge and expertise to handle any project, from design to 
                installation to maintenance.
              </p>
              <div className="about-badge">
                <span className="badge-stars">★★★★★</span>
                <span className="badge-text">100% Recommended · 13 Reviews</span>
              </div>
            </div>
            <div className="about-intro-image">
              <img src="/images/about-team.jpg" alt="Handy AF Home Services" />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Family Values</h3>
              <p>We treat every client like family and care for every property as if it were our own.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We never compromise on quality. Every project receives our full attention and expertise.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>We conduct our business with honesty and transparency. You can trust us to deliver on our promises.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Always Available</h3>
              <p>We're always open — call or text anytime for reliable, responsive service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-service-area">
        <div className="container">
          <h2 className="section-title">Service Area</h2>
          <p className="section-subtitle">
            Proudly serving Orange County, NY and surrounding areas
          </p>
          <div className="service-areas">
            <span>Blooming Grove</span>
            <span>Cornwall</span>
            <span>Campbell Hall</span>
            <span>Orange County</span>
            <span>& Surrounding Areas</span>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your landscaping project today — call or text anytime!</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-secondary">Request A Quote</Link>
            <a href="tel:+18454941727" className="btn btn-outline">Call (845) 494-1727</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
