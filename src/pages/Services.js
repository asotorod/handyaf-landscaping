import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { services } from '../data/services';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive landscaping solutions for your property"
      />

      <section className="section services-list">
        <div className="container">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p>
              HandyAF Landscaping provides a full range of professional landscaping services 
              to meet all your outdoor needs. From creative design to meticulous maintenance, 
              we deliver results that exceed expectations.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.key} className="service-item">
                <div className="service-item-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-item-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <p className="service-description">{service.description}</p>
                  <Link to={`/services/${service.key}`} className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Need a Custom Solution?</h2>
          <p>Contact us to discuss your specific landscaping needs.</p>
          <Link to="/contact" className="btn btn-secondary">Get A Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
