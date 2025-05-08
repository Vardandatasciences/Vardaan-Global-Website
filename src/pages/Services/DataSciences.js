import React, { useState, useEffect } from 'react';
import './DataSciences.css';
// Import the MP4 files directly
import Datascience1 from "../../assets/Videos/Datascience1.mp4";
import Datascience2 from "../../assets/Videos/Datascience2.mp4";
import Datascience3 from "../../assets/Videos/Datascience3.mp4";

function DataSciences() {
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

  const dataServices = [
    {
      title: "Projects",
      content: "Vardaan Data Sciences Service excels in transformative projects, automating operations, creating efficient dashboards, and implementing user-friendly chatbots. Our focus on data-to-knowledge transformation ensures organizations harness the full potential of their data for strategic decision-making.",
      icon: "📊"
    },
    {
      title: "Products",
      content: "Our Data Sciences products include predictors, classifiers, cluster analyzers, and innovative offerings for Legal, HR, Pharma, Health Diagnostics, and Manufacturing. Vardaan commitment to innovation shines through in the development of AI chatbots and interactive dashboards.",
      icon: "🛠️"
    },
    {
      title: "Training",
      content: "Vardaan empowers individuals and organizations with hands-on training tailored for CXOs, professionals, and students. From 2-day CXO Workshops to 8-week Job Ready Courses, our programs enhance proficiency in leveraging data sciences for real-world applications.",
      icon: "👨‍🏫"
    },
    {
      title: "Consultancy",
      content: "Unlock the true potential of your data with Vardaan Data Sciences Consultancy. We bridge the gap between your business and the real world through trends analysis, dashboards, and advanced techniques, empowering you to make informed decisions that drive your business forward.",
      icon: "💼"
    }
  ];

  return (
    <div className="data-sciences-container">
      {/* Hero Section */}
      <section className="hero-banner animate-section" id="hero">
        <div className="hero-overlay"></div>
        <div className={`hero-content ${isVisible.hero ? 'fade-in' : ''}`}>
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              <span className="highlight">Data</span> Sciences
            </h1>
            <div className="hero-subtitle">
              <div className="line"></div>
              <p>Transforming Data into Insights</p>
            </div>
            <p className="hero-text">
              Embark on a transformative data journey with Vardaan Data Sciences Service—where innovation turns data 
              into a catalyst for business success in the digital era.
            </p>
            <button className="cta-button glass-effect" onClick={() => window.open("https://vardaands.com/", "_blank")}>
              Visit Our Website
              <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-container">
            <div className="data-animation">
              <div className="data-particle p1"></div>
              <div className="data-particle p2"></div>
              <div className="data-particle p3"></div>
              <div className="data-particle p4"></div>
              <div className="data-node"></div>
            </div>
            <video 
              className="hero-video" 
              autoPlay 
              loop 
              muted 
              playsInline
              src={Datascience1}
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section animate-section" id="intro">
        <div className="container">
          <div className={`section-content ${isVisible.intro ? 'slide-in-left' : ''}`}>
            <h2 className="section-title">Transformative Journey with Vardaan</h2>
            <p className="section-text">
              Embark on a transformative data journey with Vardaan Pioneering Data Sciences—where innovation
              maximizes data potential, optimizing operations and streamlining processes for data-driven
              decision-making.
            </p>
            <p className="section-text">
              Dedicated to knowledge-sharing, our training programs provide practical skills in the ever-changing
              world of data sciences. As a consultancy, we bridge the gap between raw data and actionable
              insights, delivering trends analysis and dashboards using advanced analytics, machine learning, and
              AI. Welcome to a future where Vardaan Data Sciences Service shapes a transformative path for
              organizations in the digital age.
            </p>
          </div>
          <div className={`section-visual ${isVisible.intro ? 'slide-in-right' : ''}`}>
            <div className="visual-card">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                src={Datascience2}
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
                src={Datascience3}
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
            <h2 className="section-title">Transformative Solutions for a Digital Future</h2>
            <p className="section-text">
              Unlock the power of data with our comprehensive data science services. From tailored projects that
              drive impactful outcomes to advanced products shaping the future of data-driven decisions, we offer
              training programs designed for diverse backgrounds and consultancy services transforming raw data
              into actionable insights. Experience a transformative journey where data becomes a strategic asset,
              guiding organizations through the complexities of the digital age.
            </p>
            <div className="services-highlights">
              <div className="service-badge">
                <div className="badge-icon">📊</div>
                <span>Analytics</span>
              </div>
              <div className="service-badge">
                <div className="badge-icon">🧠</div>
                <span>Machine Learning</span>
              </div>
              <div className="service-badge">
                <div className="badge-icon">🔍</div>
                <span>Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section animate-section" id="offerings">
        <div className="container full-width">
          <div className={`section-header main-header ${isVisible.offerings ? 'fade-in' : ''}`}>
            <h2 className="section-title">Our Services in Data Sciences</h2>
            <div className="section-divider centered">
              <span></span>
            </div>
          </div>
          <div className={`data-services-cards-grid ${isVisible.offerings ? 'slide-up' : ''}`}>
            {dataServices.map((service, index) => (
              <div key={index} className="data-service-card">
                <div className="data-service-card-icon">
                  <span>{service.icon}</span>
                </div>
                <h3 className="data-service-card-title">{service.title}</h3>
                <p className="data-service-card-content">{service.content}</p>
                <div className="data-service-card-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Your Data Journey Today</h2>
            <p>Take the first step toward comprehensive data-driven decision making.</p>
            <button className="cta-button">Contact Our Experts</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataSciences; 