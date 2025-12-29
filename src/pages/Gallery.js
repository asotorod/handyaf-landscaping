import React from 'react';
import PageHeader from '../components/PageHeader';
import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-page">
      <PageHeader 
        title="Our Work"
        subtitle="Browse our portfolio of completed projects"
      />

      <section className="section gallery-content">
        <div className="container">
          <div className="gallery-intro">
            <h2>Project Gallery</h2>
            <p>
              Take a look at some of our recent landscaping projects. From stunning 
              landscape designs to meticulous lawn care, our work speaks for itself. 
              Follow us on Instagram for more updates and behind-the-scenes content.
            </p>
          </div>

          {/* LightWidget Instagram Feed */}
          <div className="instagram-feed">
            {/* 
              INSTRUCTIONS FOR LIGHTWIDGET SETUP:
              1. Go to https://lightwidget.com/
              2. Connect the @imhandyaf Instagram account
              3. Customize the widget appearance (grid layout recommended)
              4. Copy the embed code and replace the placeholder below
              5. The widget will automatically pull latest Instagram posts
            */}
            
            {/* Replace this placeholder with actual LightWidget embed code */}
            <div className="lightwidget-placeholder">
              <div className="placeholder-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <h3>Instagram Feed</h3>
                <p>LightWidget will display our latest Instagram posts here.</p>
                <a 
                  href="https://www.instagram.com/imhandyaf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Follow @imhandyaf
                </a>
              </div>
            </div>

            {/* 
              When you have the LightWidget code, it will look something like this:
              <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
              <iframe 
                src="//lightwidget.com/widgets/YOUR_WIDGET_ID.html" 
                scrolling="no" 
                allowtransparency="true" 
                className="lightwidget-widget" 
                style={{width: '100%', border: 0, overflow: 'hidden'}}
              ></iframe>
            */}
          </div>

          <div className="gallery-cta">
            <h3>Like What You See?</h3>
            <p>Let's create something beautiful for your property.</p>
            <a href="/contact" className="btn btn-primary">Get A Free Quote</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
