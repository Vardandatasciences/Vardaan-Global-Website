import React, { useState, useEffect } from 'react';
import './GetInTouch.css';
// Import flag images directly from assets
import IndiaFlag from '../../assets/Flags/India.png';
import MalaysiaFlag from '../../assets/Flags/Malaysia.png';
import UAEFlag from '../../assets/Flags/UAE.png';
import UKFlag from '../../assets/Flags/UK.png';
import USAFlag from '../../assets/Flags/USA.png';

// Country data
const countryData = {
  india: {
    name: 'India',
    flag: IndiaFlag,
    address: [
      'Aurum, 1st Floor, Plot No 57,',
      'Jayabheri Enclave, Gachibowli',
      'Hyderabad-500032 INDIA'
    ],
    company: 'Vardaan Data Sciences Pvt. Ltd.',
    phone: ['+91 40-35171118', '+91 40-35171119'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7612.511961535537!2d78.361089!3d17.447458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9377a883a6b3%3A0xc9b124e41328f9e9!2sVardaan%20CyberSecurity%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1702278038269!5m2!1sen!2sin'
  },
  malaysia: {
    name: 'Malaysia',
    flag: MalaysiaFlag,
    address: [
      'Lot G07, Level 3, Platinum Sentral,',
      'Jalan Stesen Sentral 2, 50470,',
      'Kuala Lumpur, MALAYSIA'
    ],
    company: 'Vardaan Resources Pvt. Ltd.',
    phone: ['+60327224705', '+601136740107'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7967.690359288608!2d101.68639800000001!3d3.135571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c13d2bd457%3A0xb43f87e8ce95d824!2sSpaces%20-%20Kuala%20Lumpur%2C%20Spaces%20Platinum%20Sentral!5e0!3m2!1sen!2sin!4v1702278406164!5m2!1sen!2sin'
  },
  uae: {
    name: 'UAE',
    flag: UAEFlag,
    address: [
      'Info Drive Risk Management Services LLC,',
      'Floor 10, Concord Tower',
      'Dubai Media City Dubai, UAE'
    ],
    company: 'Vardaan Resources Pvt. Ltd.',
    phone: ['+971 4 450 2 450'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7226.239109919306!2d55.156195!3d25.097814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4164e9f477%3A0x873c65b1c9eb0f7e!2sConcord%20Tower%20-%20Al%20Sufouh%20-%20Al%20Sufouh%202%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1702278584876!5m2!1sen!2sin'
  },
  uk: {
    name: 'UK',
    flag: UKFlag,
    address: [
      'The Old Courthouse Hughenden Road, High Wycombe,',
      'Buckinghamshire HP13 5DT, UK',
      ''
    ],
    company: 'Vardaan Data Sciences Pvt. Ltd.',
    phone: ['+44 2071934588', '+44 7404398837'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.3833622351713!2d-0.7561062061606544!3d51.6345039992407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487661d3cc21ae57%3A0x9d8bad2c2975223e!2sThe%20Old%20Courthouse%2C%20Hughenden%20Rd%2C%20High%20Wycombe%20HP13%205DT%2C%20UK!5e0!3m2!1sen!2sin!4v1702278540613!5m2!1sen!2sin'
  },
  usa: {
    name: 'USA',
    flag: USAFlag,
    address: [
      'Risk Analytics and Solutions LLC.',
      '70 Bluebird Ln Ste G, Plainview,',
      'NY, 11803, USA'
    ],
    company: 'Vardaan Resources Pvt. Ltd.',
    phone: ['+1 (516) 543-4022'],
    email: 'info@vardaanglobal.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6043.108202091877!2d-73.461944!3d40.771831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82a76f743aba1%3A0x2db9df49cfab7646!2s70%20Bluebird%20Ln%20g%2C%20Plainview%2C%20NY%2011803%2C%20USA!5e0!3m2!1sen!2sin!4v1702278621774!5m2!1sen!2sin'
  }
};

// SVG Icons
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const AddressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

function GetInTouch() {
  const [selectedCountry, setSelectedCountry] = useState('india');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    additionalSubject: '',
    phoneNumber: '',
    phone: '',
    message: ''
  });
  const [showDialog, setShowDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Check if there's a stored country in localStorage
    const storedCountry = localStorage.getItem('selectedFlag');
    if (storedCountry) {
      setSelectedCountry(storedCountry.toLowerCase());
    }

    // Add window resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    localStorage.setItem('selectedFlag', country);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitting(false);
      setShowDialog(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        additionalSubject: '',
        phoneNumber: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  // Current country data
  const currentCountry = countryData[selectedCountry];
  
  // Mobile view check
  const isMobile = windowWidth <= 768;

  return (
    <div className="get-in-touch-container">
      <h1 className="page-title">Get In Touch</h1>
      
      {!isMobile ? (
        <div className="contactpage-container">
          {/* Location Cards with integrated maps */}
          <div className="location-cards">
            {Object.keys(countryData).map(countryKey => (
              <div 
                key={countryKey}
                className="office-card"
                onClick={() => handleCountryChange(countryKey)}
              >
                {/* Flag image at the top left */}
                <img 
                  src={countryData[countryKey].flag} 
                  alt={`${countryData[countryKey].name} Flag`} 
                  className="card-flag"
                />
                
                {/* Office Details (shown by default) */}
                <div className="office-details">
                  <div className="office-title">
                    {countryData[countryKey].name}
                  </div>
                  
                  <div className="company-name">
                    <h3>{countryData[countryKey].company}</h3>
                  </div>
                  
                  <div className="address-info">
                    {countryData[countryKey].address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  
                  <div className="contact-info">
                    <div className="contact-item">
                      <EmailIcon />
                      <p>{countryData[countryKey].email}</p>
                    </div>
                    
                    {countryData[countryKey].phone.map((number, index) => (
                      <div key={index} className="contact-item">
                        <PhoneIcon />
                        <p>{number}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Map Container (shows on hover) */}
                <div className="card-map-container">
                  <div className="card-map-header">
                    <img 
                      src={countryData[countryKey].flag} 
                      alt={`${countryData[countryKey].name} Flag`} 
                      className="card-flag"
                    />
                    <h3 className="card-map-title">{countryData[countryKey].name} </h3>
                  </div>
                  <div className="card-map-frame">
                    <iframe 
                      src={countryData[countryKey].mapSrc}
                      allowFullScreen="" 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${countryData[countryKey].name} Office Location`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="contact-title">Contact Us</h2>
            
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <input 
                      type="text" 
                      name="additionalSubject" 
                      placeholder="Subject" 
                      value={formData.additionalSubject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input 
                      type="tel" 
                      name="phoneNumber" 
                      placeholder="Phone number (optional)" 
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-row full-width">
                  <div className="form-field">
                    <textarea 
                      name="subject" 
                      placeholder="Your Preferred time to contact and any specific inputs to clarify"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>

            <div className="response-message">
              <p>We will respond back to you within 2 business days. Alternatively, you may reach out on the above contact numbers.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-container">
          {/* Mobile Implementation */}
          {/* This will be preserved without significant changes */}
          <div className="mobile-country-selector">
            {Object.keys(countryData).map(countryKey => (
              <div 
                key={countryKey} 
                className={`mobile-country-option ${selectedCountry === countryKey ? 'active' : ''}`}
                onClick={() => handleCountryChange(countryKey)}
              >
                <img src={countryData[countryKey].flag} alt={`${countryData[countryKey].name} Flag`} />
                <span>{countryData[countryKey].name}</span>
              </div>
            ))}
          </div>
          
          <div className="mobile-company-name">
            <h3>{currentCountry.company}</h3>
          </div>
          
          <div className="mobile-contact-section">
            <h2>Contact Information</h2>
            <div className="mobile-contact-info">
              <div className="mobile-info-group">
                <h3><EmailIcon /> Email Address</h3>
                <p>{currentCountry.email}</p>
              </div>
              
              <div className="mobile-info-group">
                <h3><PhoneIcon /> Phone Numbers</h3>
                {currentCountry.phone.map((number, index) => (
                  <p key={index}>{number}</p>
                ))}
              </div>
              
              <div className="mobile-info-group">
                <h3><AddressIcon /> Address</h3>
                {currentCountry.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mobile-map">
            <iframe 
              src={currentCountry.mapSrc}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${currentCountry.name} Office Location`}
            />
          </div>
          
          <div className="mobile-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mobile-form-field">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="mobile-form-field">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="mobile-form-field">
                <input 
                  type="text" 
                  name="additionalSubject" 
                  placeholder="Subject" 
                  value={formData.additionalSubject} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="mobile-form-field">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number (optional)" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="mobile-form-field">
                <textarea 
                  name="message" 
                  placeholder="Your Preferred time to contact and any specific inputs to clarify" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="mobile-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
            
            <div className="mobile-response-message">
              <p>We will respond back to you within 2 business days.</p>
            </div>
          </div>
        </div>
      )}

      {/* Dialogs */}
      {showDialog && (
        <div className="dialog-overlay" onClick={() => setShowDialog(false)}>
          <div className="dialog" onClick={e => e.stopPropagation()}>
            <p>Thank you, your response has been recorded!</p>
            <button onClick={() => setShowDialog(false)} aria-label="close" className="close-button">✕</button>
          </div>
        </div>
      )}
      
      {showErrorDialog && (
        <div className="dialog-overlay" onClick={() => setShowErrorDialog(false)}>
          <div className="dialog" onClick={e => e.stopPropagation()}>
            <p>Sorry, there was an error processing your request. Please try again later.</p>
            <button onClick={() => setShowErrorDialog(false)} aria-label="close" className="close-button">✕</button>
          </div>
        </div>
      )}
      
      {isLoading && (
        <div className="loader-wrapper">
          <div className="blobs">
            <div className="blob-center"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetInTouch; 