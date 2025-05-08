import React, { useEffect } from 'react';
import './Home.css';
import backgroundImage from '../assets/images/homebg1.jpg';
import whyVardaanImage from '../assets/images/Why.jpg';
import Footer from '../components/Footer';
// Import customer logos
import ushaMartin from '../assets/logos/Usha Martin.png';
import vedanta from '../assets/logos/Vedanta.jpg';
import talwandiSabo from '../assets/logos/Talwandi Sabo.jpg';
import sterlite from '../assets/logos/Sterlite.png';
import mittal from '../assets/logos/Mittal.jpg';
import kalyani from '../assets/logos/Kalyani.webp';
import jsw from '../assets/logos/JSW.png';
import gerdau from '../assets/logos/Gerdau.jpeg';
import essar from '../assets/logos/Essar.jpeg';
import amw from '../assets/logos/AMW.jpg';
import dbPower from '../assets/logos/DB Power.jpeg';
import nayara from '../assets/logos/Nayara.png';
import newIndiaBank from '../assets/logos/newindiabank2.png';
import opal from '../assets/logos/Opal.png';
import rfcl from '../assets/logos/RFCL.png';
import dcw from '../assets/logos/DCW.png';
import arcelormittal from '../assets/logos/Arcelormittal.png';
import tafe from '../assets/logos/tafe.png';
import incture from '../assets/logos/incture.jpeg';
import MetrochemImg from '../assets/images/Metrochem.PNG';
import NewIndiaImg from '../assets/images/New_India.PNG';
import TechnoIdentityImg from '../assets/images/Techno_Identiy.PNG';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-show');
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '-50px' // Trigger slightly before the element comes into view
      }
    );

    // Select all sections and cards to observe
    const allSections = document.querySelectorAll(
      '.expertise-section, .why-vardaan-section, .features-section, .customers-section, .expertise-card, .feature-card'
    );

    allSections.forEach((section) => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    // Cleanup
    return () => {
      allSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Testimonials carousel state
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const testimonialImages = [
    { src: MetrochemImg, alt: 'Metrochem' },
    { src: NewIndiaImg, alt: 'New India' },
    { src: TechnoIdentityImg, alt: 'Techno Identity' },
  ];

  const handlePrev = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonialImages.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setTestimonialIndex((prev) => (prev === testimonialImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay">
            <div className="content">
              <ul className="home-text">
                <li>Vardaan is a dynamic and rapidly emerging force in the world of technology.</li>
                <li>Headquartered in Dubai, UAE, with a global presence in strategic locations across the globe.</li>
                <li>Since our inception in 2018 as a specialized Cyber Security company under the banner of Prometis Cyber Security.</li>
                <li>We have swiftly evolved into a multifaceted organization offering a comprehensive suite of services.</li>
                <li>Our services encompass Cyber Security, Analytics, and IT solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="section-container">
          <h2 className="expertise-title">Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-card-header">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22c-1 0-8-4-8-4V6l8 4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 6v12s-7 4-8 4" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="expertise-title">Cyber Security</h3>
              </div>
              <div className="expertise-content">
                <p className="expertise-description">Elevate your business security with our comprehensive cybersecurity services. At Vardaan, we deploy cutting-edge technologies for advanced threat detection, implement robust data encryption, and conduct thorough vulnerability assessments.</p>
              </div>
            </div>

            <div className="expertise-card">
              <div className="expertise-card-header">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8v8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 8h10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 16h10" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8" cy="10" r="1"/>
                    <circle cx="16" cy="14" r="1"/>
                  </svg>
                </div>
                <h3 className="expertise-title">Data Sciences</h3>
              </div>
              <div className="expertise-content">
                <p className="expertise-description">Discover a revolution in Data Analytics with Vardaan Data Sciences Pvt Ltd, a dynamic organization founded by seasoned professionals. We specialize in delivering innovative solutions through comprehensive offerings using latest technologies ML, DI, GenAI etc.</p>
              </div>
            </div>

            <div className="expertise-card">
              <div className="expertise-card-header">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.3 7l8.7 5 8.7-5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                </div>
                <h3 className="expertise-title">Resources</h3>
              </div>
              <div className="expertise-content">
                <p className="expertise-description">Vardaan Resources Private Limited (VRPL) is a value-based engineering and financial services company which offers services related to Fixed Assets for a broad spectrum of industries covering Steel, Oil, Energy, Power, Fertilizer, Automobile and General Engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-vardaan-section">
        <div className="why-vardaan-container" style={{ backgroundImage: `url(${whyVardaanImage})` }}>
          <div className="why-vardaan-overlay">
            <div className="why-vardaan-content">
              <h2 className="why-vardaan-heading">Why Vardaan?</h2>
              <p className="why-vardaan-text">
                We understand the dynamic and ever-evolving landscape of technology, data, and engineering. In a world where information is the new currency and innovation is the driving force, we stand as your reliable companion, offering a comprehensive suite of services tailored to meet your cybersecurity, data sciences, and engineering valuation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Global Presence</h3>
            </div>
            <div className="feature-content">
              <p className="feature-description">
                With a presence in multiple countries, we are a truly global company. Our worldwide network of experts enables us to serve your needs, no matter where you are located.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="feature-title">Experience & Expertise</h3>
            </div>
            <div className="feature-content">
              <p className="feature-description">
                Our team comprises seasoned professionals who are leaders in their respective fields. We have a track record of successfully serving clients across various industries.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <path d="M18 20V10M12 20V4M6 20v-6"></path>
                  <path d="M12 4L8 8h8l-4-4z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Cutting-Edge Technology</h3>
            </div>
            <div className="feature-content">
              <p className="feature-description">
                We stay at the forefront of technological advancements to provide you with the best solutions. Our commitment to innovation ensures that you are always one step ahead.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <path d="M12 22v-8"></path>
                  <path d="M12 14l-8-4.5"></path>
                  <path d="M20 9.5L12 14"></path>
                </svg>
              </div>
              <h3 className="feature-title">Tailored Solutions</h3>
            </div>
            <div className="feature-content">
              <p className="feature-description">
                We recognize that every organization is unique. Our services are customized to your specific needs, ensuring that you receive solutions that fit like a glove.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="feature-title">Confidentiality & Security</h3>
            </div>
            <div className="feature-content">
              <p className="feature-description">
                Your data and business information are treated with the utmost care and security. We are dedicated to maintaining the confidentiality and integrity of your assets.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="feature-title">Client-Centric Approach</h3>
            </div>
            <div className="feature-content">
              <p className="feature-description">
                We place our clients at the center of everything we do. Your success is our success, and we work diligently to exceed your expectations.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
                </svg>
              </div>
              <h3 className="feature-title">Always up-to-date</h3>
            </div>
            <div className="feature-content">
              <p className="feature-description">
                Our templates are always updated, so you can enjoy the latest Webflow features available, no matter when the template was released.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Exceptional support</h3>
            </div>
            <div className="feature-content">
              <p className="feature-description">
                If you have any questions, or hit a roadblock and need a hand, we are always just one email away to help you out!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="customers-section">
        <h2 className="customers-title">Our Customers</h2>
        <div className="logo-carousel">
          <div className="logo-slide">
            {/* First set of logos */}
            <img src={mittal} alt="Mittal" className="customer-logo" />
            <img src={vedanta} alt="Vedanta" className="customer-logo" />
            <img src={ushaMartin} alt="Usha Martin" className="customer-logo" />
            <img src={sterlite} alt="Sterlite" className="customer-logo" />
            <img src={talwandiSabo} alt="Talwandi Sabo" className="customer-logo" />
            <img src={jsw} alt="JSW" className="customer-logo" />
            <img src={gerdau} alt="Gerdau" className="customer-logo" />
            <img src={essar} alt="Essar" className="customer-logo" />
            <img src={kalyani} alt="Kalyani" className="customer-logo" />
            <img src={amw} alt="AMW" className="customer-logo" />
            <img src={dbPower} alt="DB Power" className="customer-logo" />
            <img src={nayara} alt="Nayara" className="customer-logo" />
            <img src={newIndiaBank} alt="New India Bank" className="customer-logo" />
            <img src={opal} alt="Opal" className="customer-logo" />
            <img src={rfcl} alt="RFCL" className="customer-logo" />
            <img src={dcw} alt="DCW" className="customer-logo" />
            <img src={arcelormittal} alt="Arcelormittal" className="customer-logo" />
            <img src={tafe} alt="TAFE" className="customer-logo" />
            <img src={incture} alt="Incture" className="customer-logo" />

            {/* Duplicate set for seamless loop */}
            <img src={mittal} alt="Mittal" className="customer-logo" />
            <img src={vedanta} alt="Vedanta" className="customer-logo" />
            <img src={ushaMartin} alt="Usha Martin" className="customer-logo" />
            <img src={sterlite} alt="Sterlite" className="customer-logo" />
            <img src={talwandiSabo} alt="Talwandi Sabo" className="customer-logo" />
            <img src={jsw} alt="JSW" className="customer-logo" />
            <img src={gerdau} alt="Gerdau" className="customer-logo" />
            <img src={essar} alt="Essar" className="customer-logo" />
            <img src={kalyani} alt="Kalyani" className="customer-logo" />
            <img src={amw} alt="AMW" className="customer-logo" />
            <img src={dbPower} alt="DB Power" className="customer-logo" />
            <img src={nayara} alt="Nayara" className="customer-logo" />
            <img src={newIndiaBank} alt="New India Bank" className="customer-logo" />
            <img src={opal} alt="Opal" className="customer-logo" />
            <img src={rfcl} alt="RFCL" className="customer-logo" />
            <img src={dcw} alt="DCW" className="customer-logo" />
            <img src={arcelormittal} alt="Arcelormittal" className="customer-logo" />
            <img src={tafe} alt="TAFE" className="customer-logo" />
            <img src={incture} alt="Incture" className="customer-logo" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-carousel">
          <button className="testimonial-arrow left" onClick={handlePrev} aria-label="Previous testimonial">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b0bec5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <img
            src={testimonialImages[testimonialIndex].src}
            alt={testimonialImages[testimonialIndex].alt}
            className="testimonial-image"
          />
          <button className="testimonial-arrow right" onClick={handleNext} aria-label="Next testimonial">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b0bec5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
          </button>
        </div>
        <div className="testimonial-pagination">
          {testimonialImages.map((_, idx) => (
            <span
              key={idx}
              className={`testimonial-dot${testimonialIndex === idx ? ' active' : ''}`}
              onClick={() => setTestimonialIndex(idx)}
            ></span>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home; 