import React from 'react';
import './PageHeader.css';

function PageHeader({ title, subtitle, backgroundImage }) {
  return (
    <section 
      className="page-header" 
      style={{ backgroundImage: `url(${backgroundImage || '/images/page-header-bg.jpg'})` }}
    >
      <div className="page-header-overlay"></div>
      <div className="page-header-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
