import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { getServiceByKey, services } from '../data/services';
import './ServiceDetail.css';

function ServiceDetail() {
  const { serviceKey } = useParams();
  const service = getServiceByKey(serviceKey);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = services.filter(s => s.key !== serviceKey).slice(0, 3);

  return (
    <div className="service-detail-page">
      <PageHeader 
        title={service.title}
        subtitle="Professional landscaping services"
        backgroundImage={service.image}
      />

      <section className="section service-detail-content">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-main">
              <div className="service-detail-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-detail-text">
                <h2>About This Service</h2>
                <p>{service.description}</p>
              </div>
              <div className="service-features">
                <h3>What's Included</h3>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="service-detail-sidebar">
              <div className="sidebar-cta">
                <h3>Ready to Get Started?</h3>
                <p>Contact us for a free estimate on your {service.title.toLowerCase()} project.</p>
                <Link to="/contact" className="btn btn-primary">Get A Quote</Link>
              </div>

              <div className="sidebar-services">
                <h3>Other Services</h3>
                <ul>
                  {otherServices.map((s) => (
                    <li key={s.key}>
                      <Link to={`/services/${s.key}`}>{s.title}</Link>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="view-all">View All Services →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
