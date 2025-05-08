import React from 'react';
import './About.css';
import AboutBg from '../assets/images/About.jpg';
import Footer from '../components/Footer';
import GrowthImg from '../assets/images/Growth.jpg';
import InnovationImg from '../assets/images/Innovation.jpg';
import LeadershipImg from '../assets/images/Leadership.jpg';
import ExcellenceImg from '../assets/images/Excellence.jpg';
import SecurityImg from '../assets/images/Security.jpg';
import PartnershipImg from '../assets/images/Partnership.webp';
import VisionMissionBg from '../assets/images/Vision&Mission.jpg';
import StrategyBg from '../assets/images/Strategy.jpg';
import AnalyticsBg from '../assets/images/Analytics.jpg';
import CSBg from '../assets/images/CS.jpg';
import DSBg from '../assets/images/DS.jpg';
import ResourcesBg from '../assets/images/Resources-SP.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section" style={{ backgroundImage: `url(${AboutBg})` }}>
        <div className="overlay">
          <div className="hero-content">
            <h1>About Us</h1>
            <div className="header-underline"></div>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="vision-mission-bg" style={{ backgroundImage: `url(${VisionMissionBg})` }}>
        <div className="cards-container">
          <div className="vision-section" data-aos="fade-right">
            <div className="section-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>
                </svg>
              </div>
              <h2>Vision</h2>
              <div className="card-underline"></div>
              <p>
                To be a pioneering leader in the field of Fixed Asset Capitalization, 
                Information Technology, specializing in Cyber Security, Data Sciences, 
                and comprehensive IT services, leveraging cutting-edge technologies.
              </p>
              <div className="card-features">
                <div className="feature">
                  <img src={InnovationImg} alt="Innovation" className="feature-image" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem'}} />
                  <span>Innovation</span>
                </div>
                <div className="feature">
                  <img src={LeadershipImg} alt="Leadership" className="feature-image" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem'}} />
                  <span>Leadership</span>
                </div>
                <div className="feature">
                  <img src={GrowthImg} alt="Growth" className="feature-image" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem'}} />
                  <span>Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-section" data-aos="fade-left">
            <div className="section-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                </svg>
              </div>
              <h2>Mission</h2>
              <div className="card-underline"></div>
              <p>
                To deliver customer-centric IT solutions by bringing the benefits of 
                the latest technologies and aligning our expertise with the core 
                objectives of our clients. Aim to foster long-term partnerships based 
                on trust, innovation and a commitment to excellence in the digital 
                world focusing on Fixed Asset Capitalization, Cyber Security, Data 
                Sciences and a broad range of IT services.
              </p>
              <div className="card-features">
                <div className="feature">
                    <img src={PartnershipImg} alt="Partnership" className="feature-image" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem'}} />
                  <span>Partnership</span>
                </div>
                <div className="feature">
                    <img src={ExcellenceImg} alt="Excellence" className="feature-image" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem'}} />
                  <span>Excellence</span>
                </div>
                <div className="feature">
                    <img src={SecurityImg} alt="Security" className="feature-image" style={{width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem'}} />
                  <span>Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="service-category strategy-section" style={{ position: 'relative', background: 'none' }}>
            <div className="strategy-bg" style={{ backgroundImage: `url(${StrategyBg})` }}>
            <h2 className="category-title">Strategy</h2>
            <div className="services-grid">
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"/>
                  </svg>
                </div>
                <h3>Robotic Automation</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
                  </svg>
                </div>
                <h3>Digital Strategy Assessment</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6z"/>
                  </svg>
                </div>
                <h3>Data Strategy</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3>Digital Operations Strategy</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3z"/>
                  </svg>
                </div>
                <h3>Customer Engagement Assessment</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3>Marketing Platform Strategy</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                </div>
                <h3>Cloud Migration</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3>Optimization Security Assessment</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="service-category analytics-section" style={{ position: 'relative', background: 'none' }}>
            <div className="analytics-bg" style={{ backgroundImage: `url(${AnalyticsBg})` }}>
            <h2 className="category-title">Analytics</h2>
            <div className="services-grid">
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3>Data Analytics</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3z"/>
                  </svg>
                </div>
                <h3>Customer Intelligence Marketing</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3>Automation</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <h3>Regulatory Strategy</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </div>
                <h3>Finance</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3>Security Data</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3>Performance Management</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="service-category cyber-section" style={{ position: 'relative', background: 'none' }}>
            <div className="cyber-bg" style={{ backgroundImage: `url(${CSBg})` }}>
            <h2 className="category-title">Cyber Security</h2>
            <div className="services-grid">
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <h3>Risk Management</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3>Security and Vulnerability Management</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3>Managed Security Services</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3>Data Protection</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"/>
                  </svg>
                </div>
                <h3>Threat Intelligence Services</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <h3>Identity and Data</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3>Application Performance Management and Observability</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="service-category data-science-section" style={{ position: 'relative', background: 'none' }}>
            <div className="datascience-bg" style={{ backgroundImage: `url(${DSBg})` }}>
            <h2 className="category-title">Data Sciences</h2>
            <div className="services-grid">
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                </div>
                <h3>Deep Learning</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"/>
                  </svg>
                </div>
                <h3>Machine Learning</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z"/>
                  </svg>
                </div>
                <h3>Generative AI</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="service-category resources-section" style={{ position: 'relative', background: 'none' }}>
            <div className="resources-bg" style={{ backgroundImage: `url(${ResourcesBg})` }}>
            <h2 className="category-title">Resources</h2>
            <div className="services-grid">
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>
                  </svg>
                </div>
                <h3>Capitalization of Property, Plant and Equipment</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </div>
                <h3>Valuation of Fixed Assets</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3>Physical Verification of Fixed Assets & Inventory</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                  </svg>
                </div>
                <h3>Technical Assessment of Balance Useful Life</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
                <h3>Business and Plant Valuations</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                </div>
                <h3>Asset Impairment Studies</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                </div>
                <h3>Technical and Financial Consultancy</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                  </svg>
                </div>
                <h3>Technical and Financial Feasibility Studies</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.11.89 2 1.99 2H18c1.1 0 2-.89 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                </div>
                <h3>Project Monitoring</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3>Lenders/Owner's Engineers</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                </div>
                <h3>Management Services</h3>
              </div>
              <div className="service-item" data-aos="zoom-in">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3>Site Visits and Inspection Services</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 