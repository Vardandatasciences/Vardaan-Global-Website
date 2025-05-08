import React, { useState, useEffect } from 'react';
import './CyberSecurity.css';
// Import the MP4 files directly
import Cybersecurity1 from "../../assets/videos/Cybersecurity1.mp4";
import Cybersecurity2 from "../../assets/videos/Cybersecurity2.mp4";
import Cybersecurity3 from "../../assets/videos/Cybersecurity3.mp4";

function CyberSecurity() {
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

  // Function to handle Visit Website button click
  const handleVisitWebsite = () => {
    window.open('https://vardaan-cyber.com/', '_blank');
  };

  const securityServices = [
    {
      title: "Cloud Security",
      content: "In an era dominated by cloud computing, Vardaan ensures your digital assets remain secure in the cloud. Our Cloud Security services offer robust protection, employing advanced encryption, access controls, and continuous monitoring. We seamlessly integrate security measures into your cloud infrastructure, providing a shield against evolving cyber threats.",
      icon: "🌥️"
    },
    {
      title: "Resilience & Recovery",
      content: "Vardaan understands the importance of resilience in the face of cyber incidents. Our Resilience & Recovery services go beyond mere prevention, focusing on swift response and effective recovery. We develop comprehensive strategies to minimize downtime, ensuring your business remains operational even in the aftermath of a cyber attack.",
      icon: "🔄"
    },
    {
      title: "Smarter Security",
      content: "Embrace a proactive approach to cybersecurity with Vardaan Smarter Security solutions. Leveraging artificial intelligence and machine learning, we create intelligent systems that learn, adapt, and anticipate threats. Stay ahead of cyber adversaries by deploying cutting-edge technologies that make your security posture not just robust but also smarter.",
      icon: "🧠"
    },
    {
      title: "Security of Things",
      content: "The proliferation of IoT devices demands a specialized approach to security. Vardaan secures the interconnected web of devices with our Security of Things services. We implement end-to-end protection, safeguarding your IoT ecosystem against potential vulnerabilities and ensuring that innovation in connectivity doesn't compromise security.",
      icon: "📱"
    },
    {
      title: "Perimeterless World",
      content: "In a boundary-less digital landscape, Vardaan pioneers security in a Perimeterless World. Our approach transcends traditional boundaries, focusing on identity-centric security and continuous monitoring. We redefine the perimeter, ensuring that security travels with your data and users, irrespective of their location or device.",
      icon: "🌐"
    },
    {
      title: "Data Security",
      content: "Your data is your most valuable asset. Vardaan Data Security services provide comprehensive solutions to protect your sensitive information. Through encryption, access controls, and advanced monitoring, we safeguard your data across its entire lifecycle, from creation to storage and transmission.",
      icon: "🔒"
    },
    {
      title: "Shift - Left",
      content: "Vardaan advocates a proactive stance with our Shift - Left approach to cybersecurity. By integrating security measures early in the development lifecycle, we prevent vulnerabilities from creeping into your systems. This proactive strategy ensures that security is not an afterthought but an integral part of your entire IT process.",
      icon: "⬅️"
    },
    {
      title: "Layer 8 – The Human Factor",
      content: "Acknowledging the critical role humans play in cybersecurity, Vardaan addresses the Layer 8 – The Human Factor. Our comprehensive programs include employee training, awareness campaigns, and behavior analysis. By empowering your personnel, we create a human firewall, enhancing the overall resilience of your organization against cyber threats.",
      icon: "👥"
    },
    {
      title: "VCISO",
      content: "In the ever-evolving landscape of cybersecurity, Vardaan introduces VCISO (Virtual Chief Information Security Officer) services — a strategic approach to fortifying your digital defenses with expert guidance and proactive security measures.",
      icon: "👨‍💼"
    }
  ];

  return (
    <div className="cyber-security-container">
      {/* Hero Section */}
      <section className="hero-banner animate-section" id="hero">
        <div className="hero-overlay"></div>
        <div className={`hero-content ${isVisible.hero ? 'fade-in' : ''}`}>
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              <span className="highlight">Cyber</span> Security
            </h1>
            <div className="hero-subtitle">
              <div className="line"></div>
              <p>Securing Your Digital Future</p>
            </div>
            <p className="hero-text">
              Empower your digital journey with Vardaan Cybersecurity Solutions—where innovation meets protection,
              ensuring your business thrives in the ever-evolving digital landscape.
            </p>
            <button className="cta-button glass-effect" onClick={handleVisitWebsite}>
              Visit Our Website
              <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-container">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
            <video 
              className="hero-video" 
              autoPlay 
              loop 
              muted 
              playsInline
              src={Cybersecurity1}
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section animate-section" id="intro">
        <div className="container">
          <div className={`section-content ${isVisible.intro ? 'slide-in-left' : ''}`}>
            <h2 className="section-title">Innovative Cyber Security Solutions for Resilience and Transformation</h2>
            <p className="section-text">
              In today's digital landscape, Vardaan leads in innovation, offering comprehensive cyber security
              solutions that include threat detection, prevention, and response. We specialize in proactive
              measures such as vulnerability assessments, providing actionable insights to enhance security
              postures.
            </p>
            <p className="section-text">
              Committed to cyber security, Vardaan's strategic partnerships with industry giants like SAP and
              Oracle enable the delivery of world-class solutions. Whether securing digital assets, leveraging
              data, or optimizing IT infrastructure, we are a reliable partner dedicated to empowering businesses
              through innovation.
            </p>
          </div>
          <div className={`section-visual ${isVisible.intro ? 'slide-in-right' : ''}`}>
            <div className="visual-container">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                src={Cybersecurity2}
                className="section-video"
              />
              <div className="card-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview animate-section" id="services">
        <div className="bg-pattern"></div>
        <div className="container">
          <div className={`section-visual ${isVisible.services ? 'slide-in-left' : ''}`}>
            <div className="visual-container">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                src={Cybersecurity3}
                className="section-video"
              />
              <div className="card-overlay"></div>
            </div>
          </div>
          <div className={`section-content ${isVisible.services ? 'slide-in-right' : ''}`}>
            <h2 className="section-title">Navigating the Future of Digital Resilience</h2>
            <p className="section-text">
              Explore Vardaan's comprehensive suite of security services, ranging from Cloud Security and
              Resilience & Recovery to innovative solutions like Smarter Security, Security of Things, and
              Perimeterless World. Our offerings also include specialized services such as Data Security,
              Shift-Left strategies, and Layer 8 insights addressing the Human Factor.
            </p>
            <div className="services-highlights">
              <div className="service-badge">
                <div className="badge-icon">🔒</div>
                <span>Proactive</span>
              </div>
              <div className="service-badge">
                <div className="badge-icon">🛡️</div>
                <span>Resilient</span>
              </div>
              <div className="service-badge">
                <div className="badge-icon">🔍</div>
                <span>Intelligent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section animate-section" id="offerings">
        <div className="container full-width">
          <div className={`section-header main-header ${isVisible.offerings ? 'fade-in' : ''}`}>
            <h2 className="section-title">Our Services in Cyber Security</h2>
            <div className="section-divider centered">
              <span></span>
            </div>
          </div>
          <div className={`services-cards-grid ${isVisible.offerings ? 'slide-up' : ''}`}>
            {securityServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">
                  <span>{service.icon}</span>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-content">{service.content}</p>
                <div className="service-card-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-bg-pattern"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Protect Your Digital Assets Today</h2>
            <p>Take the first step toward comprehensive cyber security.</p>
            <button className="cta-button glass-effect" onClick={handleVisitWebsite}>Contact Our Experts</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CyberSecurity; 