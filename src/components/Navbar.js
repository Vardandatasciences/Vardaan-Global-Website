import React, { useState, useEffect } from 'react';
import * as ReactRouter from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const location = ReactRouter.useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set active item based on current path
    if (location.pathname === '/') setActiveItem('home');
    else if (location.pathname.startsWith('/about')) setActiveItem('about');
    else if (location.pathname.startsWith('/services')) setActiveItem('services');
    else if (location.pathname.startsWith('/training')) setActiveItem('training');
    else if (location.pathname.startsWith('/leadership')) setActiveItem('leadership');
    else if (location.pathname.startsWith('/blog')) setActiveItem('blog');
    else if (location.pathname.startsWith('/contact')) setActiveItem('contact');
    else setActiveItem('');
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <ReactRouter.Link to="/">
            <img src={require('../assets/images/Logo.jpg')} alt="Vardaan Global Logo" className="logo-img" />
          </ReactRouter.Link>
        </div>
        <ul className="nav-links">
          <li className={activeItem === 'about' ? 'active' : ''}>
            <ReactRouter.Link to="/about" onClick={() => setActiveItem('about')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              About
            </ReactRouter.Link>
          </li>
          <li className={activeItem === 'services' ? 'active' : ''}>
            <ReactRouter.Link to="/services" onClick={() => setActiveItem('services')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zm0 4h4v6h-4zm-6-3h5v2H6z"/>
              </svg>
              Services
            </ReactRouter.Link>
          </li>
          <li className={activeItem === 'training' ? 'active' : ''}>
            <ReactRouter.Link to="/training" onClick={() => setActiveItem('training')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
              Training
            </ReactRouter.Link>
          </li>
          <li className={activeItem === 'leadership' ? 'active' : ''}>
            <ReactRouter.Link to="/leadership" onClick={() => setActiveItem('leadership')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              Leadership
            </ReactRouter.Link>
          </li>
          <li className={activeItem === 'blog' ? 'active' : ''}>
            <ReactRouter.Link to="/blog" onClick={() => setActiveItem('blog')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
              </svg>
              Blog
            </ReactRouter.Link>
          </li>
          <li className="contact-li">
            <ReactRouter.Link to="/contact" className="contact-btn" onClick={() => setActiveItem('contact')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon contact-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Get in touch
            </ReactRouter.Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 