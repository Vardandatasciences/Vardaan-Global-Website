import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const location = useLocation();
  const [servicesHovered, setServicesHovered] = useState(false);

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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0066cc" />
                  <stop offset="100%" stopColor="#3399ff" />
                </linearGradient>
              </defs>
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="url(#logoGradient)"/>
            </svg>
            <span className="logo-text">VardaanGlobal</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li className={activeItem === 'about' ? 'active' : ''}>
            <Link to="/about" onClick={() => setActiveItem('about')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              About
            </Link>
          </li>
          <li 
            className={`dropdown-li ${activeItem === 'services' ? 'active' : ''} ${servicesHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setServicesHovered(true)}
            onMouseLeave={() => setServicesHovered(false)}
          >
            <div className="services-dropdown-trigger">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zm0 4h4v6h-4zm-6-3h5v2H6z"/>
              </svg>
              Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="dropdown-arrow">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/cyber-security" onClick={() => setActiveItem('services')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="dropdown-icon">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link to="/services/data-sciences" onClick={() => setActiveItem('services')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="dropdown-icon">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-7h2v7zm4 0h-2V7h2v10z"/>
                  </svg>
                  Data Sciences
                </Link>
              </li>
              <li>
                <Link to="/services/resources" onClick={() => setActiveItem('services')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="dropdown-icon">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0-3h8v2h-8zm0 6h4v2h-4z"/>
                  </svg>
                  Resources
                </Link>
              </li>
            </ul>
          </li>
          <li className={activeItem === 'leadership' ? 'active' : ''}>
            <Link to="/leadership" onClick={() => setActiveItem('leadership')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              Leadership
            </Link>
          </li>
          <li className={activeItem === 'blog' ? 'active' : ''}>
            <Link to="/blog" onClick={() => setActiveItem('blog')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>
              </svg>
              Blog
            </Link>
          </li>
          <li className="contact-li">
            <Link to="/get-in-touch" className="contact-btn" onClick={() => setActiveItem('contact')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="nav-icon contact-icon">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Get in touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 