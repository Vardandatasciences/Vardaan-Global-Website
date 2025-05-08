import React, { useState, useEffect } from 'react';
import './Resources.css';
// Import the MP4 files directly
import Resources1 from "../../assets/Videos/Resources1.mp4";
import Resources2 from "../../assets/Videos/Resources2.mp4";
import Resources3 from "../../assets/Videos/Resources3.mp4";

function Resources() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    intro: false,
    services: false,
    offerings: false
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Function to scroll to a specific vertical position
    window.scrollToVHPosition = (vh) => {
      const height = window.innerHeight;
      const position = (vh / 100) * height;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    };

    // Animate sections as they become visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const resourceServices = [
    {
      title: "Capitalization of Property, Plant and Equipment",
      content: "Vardaan expertise in the capitalization of Property, Plant, and Equipment ensures that tangible assets with long life contribute to economic benefits over extended periods. By allocating costs over expected periods of benefit, we uphold financial transparency and align with reporting entity expectations, helping organizations make informed decisions.",
      icon: "🏢"
    },
    {
      title: "Valuation of Fixed Assets",
      content: "Our meticulous approach to valuing fixed assets involves site visits, appropriate valuation approaches, and considerations for factors like obsolescence. By obtaining replacement cost and commissioning dates, Vardaan provides a comprehensive valuation that aids in strategic decision-making for businesses.",
      icon: "💰"
    },
    {
      title: "Physical Verification of Fixed Assets & Inventory",
      content: "Conducting site visits for physical observation, Vardaan ensures the accurate classification and reconciliation of assets. By providing metallic or paper tags based on customer requirements, our physical verification process guarantees the reliability of fixed asset records.",
      icon: "🔍"
    },
    {
      title: "Technical Assessment of Balance Useful Life",
      content: "Through physical inspections and adherence to industry standards, Vardaan technical assessment evaluates the balance useful life of assets. We study maintenance philosophies, production records, and product quality, ensuring accurate depreciation accounting and adherence to relevant norms.",
      icon: "⚙️"
    },
    {
      title: "Business and Plant Valuations",
      content: "Vardaan recognizes the inherent value in every asset, offering comprehensive business and plant valuations. With industry experts specializing in diverse sectors, we conduct independent studies, providing insights crucial for strategic decision-making in industries like Steel, Power, Construction, and more.",
      icon: "🏭"
    },
    {
      title: "Asset Impairment Studies",
      content: "Vardaan excels in asset impairment studies, adhering to rigorous international standards. We evaluate goodwill and intangible assets annually, ensuring compliance with accounting norms. Our expertise extends to various industries, including Steel, Power, Construction, Shipbuilding, Paper, and Automobile components.",
      icon: "📊"
    },
    {
      title: "Technical and Financial Consultancy",
      content: "Vardaan consultancy services cover project reports, financial structuring, and performance improvement. With support in turn-around management, restructuring, and relocation operations, we assist in navigating complexities and enhancing overall business capabilities.",
      icon: "📝"
    },
    {
      title: "Technical and Financial Feasibility Studies",
      content: "Vardaan undertakes technical feasibility studies, offering insights to potential investors and stakeholders. Our comprehensive analysis ensures that only commercially viable business ideas proceed, reducing wastage of resources and laying a strong foundation for future business plans.",
      icon: "📈"
    },
    {
      title: "Project Monitoring",
      content: "Vardaan project monitoring services encompass project brief preparation, time management, quality control, and reporting. We ensure seamless project execution, from vendor selection to commissioning and close-out, guaranteeing successful project outcomes.",
      icon: "📋"
    },
    {
      title: "Lenders/Owner's Engineers",
      content: "Vardaan provides professional engineering consultancy services for various project works. From tender document preparation to project closure, our services cover bid evaluation, review engineering, inspection, and project management, ensuring a smooth project setup.",
      icon: "👷"
    },
    {
      title: "Management Services",
      content: "Our management services assist companies in risk evaluation, quality management, regulatory compliance, and technical and financial due diligence. Vardaan expertise spans asset evaluation, performance improvement, and international quality certification.",
      icon: "🔄"
    },
    {
      title: "Site Visits and Inspection Services",
      content: "Vardaan conducts site visits for specific client requirements, including physical audits and business assessments. Our services assist in understanding manufacturing capabilities, assessing strategic strengths, and provide crucial insights for informed decision-making in brown-field expansion scenarios.",
      icon: "🏗️"
    }
  ];

  return (
    <div className="resources-container">
      {/* Hero Section */}
      <section className="hero-banner animate-section" id="hero">
        <div className="hero-overlay"></div>
        <div className={`hero-content ${isVisible.hero ? 'fade-in' : ''}`}>
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              <span className="highlight">Resources</span>
            </h1>
            <div className="hero-subtitle">
              <div className="line"></div>
              <p>Strategic Excellence & Financial Guidance</p>
            </div>
            <p className="hero-text">
              Empowering Success, Unleashing Potential – Vardaan Resources, Your Partner in Strategic Excellence
            </p>
            <button className="cta-button glass-effect" onClick={() => window.open("https://vardaanresources.com/", "_blank")}>
              Visit Our Website
              <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-container">
            <video 
              className="hero-video" 
              autoPlay 
              loop 
              muted 
              playsInline
              src={Resources1}
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section animate-section" id="intro">
        <div className="container">
          <div className={`section-content ${isVisible.intro ? 'slide-in-left' : ''}`}>
            <h2 className="section-title">Vardaan Resources for Strategic Financial Excellence</h2>
            <p className="section-text">
              Vardaan Resources empower organizations with essential tools and expertise for success, ensuring
              accurate financial reporting through meticulous capitalization and precise valuation of fixed
              assets. Physical verification of assets promotes transparency and adherence to records.
            </p>
            <p className="section-text">
              Vardaan Resources secure financial stability through asset studies and advanced consultancy. We
              optimize resource use, ensuring efficiency and growth, staying at the forefront of industry trends.
              Our commitment shapes a future where Vardaan Resources drive organizational success, each asset
              contributing strategically.
            </p>
          </div>
          <div className={`section-visual ${isVisible.intro ? 'slide-in-right' : ''}`}>
            <div className="visual-card">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                src={Resources2}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview animate-section" id="services">
        <div className="container">
          <div className={`section-visual ${isVisible.services ? 'slide-in-left' : ''}`}>
            <div className="visual-card alt">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                src={Resources3}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </div>
          </div>
          <div className={`section-content ${isVisible.services ? 'slide-in-right' : ''}`}>
            <h2 className="section-title">Unlocking Success for Your Business</h2>
            <p className="section-text">
              Unlock success with Vardaan streamlined financial services, including capitalization, asset
              valuation, physical verification, technical assessments, and business valuations. We specialize in
              asset impairment studies, consultancy, feasibility analysis, project monitoring, lender support,
              management services, and on-site inspections, ensuring your financial strategy is in expert hands.
            </p>
            <div className="services-highlights">
              <div className="service-badge">
                <div className="badge-icon">💼</div>
                <span>Financial</span>
              </div>
              <div className="service-badge">
                <div className="badge-icon">📊</div>
                <span>Strategic</span>
              </div>
              <div className="service-badge">
                <div className="badge-icon">🔧</div>
                <span>Technical</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section animate-section" id="offerings">
        <div className="container full-width">
          <div className={`section-header main-header ${isVisible.offerings ? 'fade-in' : ''}`}>
            <h2 className="section-title">Explore Our Various Resources</h2>
            <div className="section-divider centered">
              <span></span>
            </div>
          </div>
          <div className={`resource-services-cards-grid ${isVisible.offerings ? 'slide-up' : ''}`}>
            {resourceServices.map((service, index) => (
              <div key={index} className="resource-service-card">
                <div className="resource-service-card-icon">
                  <span>{service.icon}</span>
                </div>
                <h3 className="resource-service-card-title">{service.title}</h3>
                <p className="resource-service-card-content">{service.content}</p>
                <div className="resource-service-card-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Optimize Your Financial Strategy Today</h2>
            <p>Take the first step toward comprehensive financial excellence.</p>
            <button className="cta-button">Contact Our Experts</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources; 