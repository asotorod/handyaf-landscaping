import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { services } from '../data/services';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Hero 
        title="Transform Your Outdoor Space"
        subtitle="Professional landscaping services to bring your vision to life. From design to maintenance, we're your complete outdoor solution."
      />

      {/* About Section */}
      <section className="section home-about">
        <div className="container">
          <div className="home-about-grid">
            <div className="home-about-content">
              <h2>Welcome to HandyAF Landscaping</h2>
              <p>
                We believe that landscaping is more than just cutting grass and trimming trees. 
                It's about creating beautiful and functional outdoor spaces that enhance your 
                quality of life. That's why we work closely with our clients to understand 
                their needs and vision, and then bring it to life through expert craftsmanship.
              </p>
              <p>
                Our team has the knowledge and expertise to handle any project. From design 
                to installation to maintenance, we've got you covered. We pride ourselves on 
                delivering exceptional results that exceed expectations.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="home-about-image">
              <img src="/images/about-preview.jpg" alt="HandyAF Landscaping at work" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section home-video">
        <div className="container">
          <h2 className="section-title">See Our Work In Action</h2>
          <p className="section-subtitle">
            Watch how we transform outdoor spaces into stunning landscapes
          </p>
          <div className="video-wrapper">
            {/* Replace VIDEO_ID with actual YouTube/Vimeo video ID */}
            <div className="video-placeholder">
              <div className="video-placeholder-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p>Promo Video Coming Soon</p>
              </div>
            </div>
            {/* Uncomment and add your video embed when ready:
            <iframe 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="HandyAF Landscaping Promo"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section home-services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive landscaping solutions tailored to your needs
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <Link to={`/services/${service.key}`} key={service.key} className="service-card">
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-overlay">
                    <span>Learn More</span>
                  </div>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section home-why-us">
        <div className="container">
          <h2 className="section-title">Why Choose HandyAF?</h2>
          <p className="section-subtitle">
            We're committed to excellence in every project we undertake
          </p>
          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="why-us-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3>Licensed & Insured</h3>
              <p>Fully licensed and insured for your peace of mind and protection.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Reliable Service</h3>
              <p>We show up on time and deliver consistent, dependable service.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Expert Team</h3>
              <p>Skilled professionals dedicated to transforming your outdoor spaces.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Quality Results</h3>
              <p>We don't cut corners. Every project gets our full attention and expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <h2>Ready to Transform Your Landscape?</h2>
          <p>Get a free estimate for your project today!</p>
          <Link to="/contact" className="btn btn-secondary">Request A Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
