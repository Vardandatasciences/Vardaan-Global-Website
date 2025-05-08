import React from 'react';
import './Footer.css';
import * as ReactRouter from 'react-router-dom';
import logo from '../assets/images/logo.png';
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Vardaan is dedicated to carving a niche as a dependable partner for organizations across the globe. With a foundation built on trust, innovation, and expertise, we stand poised to drive transformation and redefine possibilities in the realms of Cyber Security, Analytics, and IT services.</p>
          <div className="footer-logo">
            <img src={logo} alt="Vardaan Resources Logo" />
          </div>
        </div>
       
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><ReactRouter.Link to="/">About</ReactRouter.Link></li>
            <li><ReactRouter.Link to="/services">Services</ReactRouter.Link></li>
            <li><ReactRouter.Link to="/training">Training</ReactRouter.Link></li>
            <li><ReactRouter.Link to="/leadership">Leadership</ReactRouter.Link></li>
            <li><ReactRouter.Link to="/blog">Blogs</ReactRouter.Link></li>
            <li><ReactRouter.Link to="/contact">Get in Touch</ReactRouter.Link></li>
          </ul>
        </div>
       
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><ReactRouter.Link to="/services#VCS">Vardaan Cyber Security</ReactRouter.Link></li>
            <li><ReactRouter.Link to="/services#VDS">Vardaan Data Sciences</ReactRouter.Link></li>
            <li><ReactRouter.Link to="/services#VR">Vardaan Resources</ReactRouter.Link></li>
            
          </ul>
        </div>
       
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="location-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="location-text">
                <p className="company-name">Vardaan Global Pvt. Ltd.</p>
                <p>Aurum, 1st Floor, Plot no 57,</p>
                <p>Jayabheri Enclave, Phase 2,</p>
                <p>Gachibowli, Hyderabad - 500 032</p>
                <p>INDIA.</p>
              </div>
            </div>
            <p><i className="fas fa-phone"></i><span>+91 99662 22370</span></p>
            <p><i className="fas fa-envelope"></i><span>info@vardaanglobal.com</span></p>
          </div>
        </div>
      </div>
     
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vardaan Global Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
 
export default Footer;
 