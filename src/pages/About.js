import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <PageHeader 
        title="About Us"
        subtitle="Learn more about HandyAF Landscaping"
      />

      <section className="section about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-content">
              <h2>Your Trusted Landscaping Partner</h2>
              <p>
                At HandyAF Landscaping, we believe that landscaping is more than just 
                cutting grass and trimming trees. It's about creating beautiful and 
                functional outdoor spaces that enhance your quality of life.
              </p>
              <p>
                That's why we work closely with our clients to understand their needs 
                and vision, and then bring it to life through our expert craftsmanship. 
                Our team has the knowledge and expertise to handle any project, from 
                design to installation to maintenance.
              </p>
              <p>
                We take pride in delivering exceptional results that exceed expectations. 
                Whether you need a complete landscape transformation or regular maintenance, 
                we've got you covered.
              </p>
            </div>
            <div className="about-intro-image">
              <img src="/images/about-team.jpg" alt="HandyAF Landscaping Team" />
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We never compromise on quality. Every project receives our full attention and expertise to deliver exceptional results.</p>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We work closely with you to understand and exceed your expectations.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Reliability</h3>
              <p>We show up on time and deliver consistent results. You can count on us for dependable service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your landscaping project today.</p>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default About;
