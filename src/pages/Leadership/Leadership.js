import './Leadership.css';
import vivek from '../../assets/images/vivek.png';
import srini from '../../assets/images/srini.png';
import ramana from '../../assets/images/ramana.png';
import prem from '../../assets/images/prem.png';
// import gandhi from '../../assets/videos/gandhi.png';
// import susheel from '../../assets/videos/susheel.png';
import gopakumar from '../../assets/images/Gopa Sir.JPG';
import leadershipBanner from '../../assets/images/Leadership.png';
import React, { useEffect } from 'react';
// import Footer from './../../components/Footer/Footer';

const leadershipData = [
  {
    title: 'Vivek Challapally',
    subtitle: "Board - Director - Vardaan Group of Companies",
    description: "Vivek Challapally is a senior professional with a remarkable journey that spans over four decades. Armed with a postgraduate engineering degree from the prestigious IIT Kharagpur, Vivek Challapally's expertise encompasses a wide array of domains, making him an invaluable asset to various industries. Vivek Challapally's journey started as an entrepreneur and design engineer, where he laid the foundation for a career that would take him to the highest echelons of the corporate world. He has expertise in the construction industry and was actively involved in thermal plants, nuclear plants, steel plants, etc. His role as Chief Operating Officer (COO) for a corporate conglomerate speaks volumes about his leadership acumen and business prowess. Throughout his illustrious career, Vivek Challapally has lent his expertise to large multinational corporations, aiding them in asset capitalization and valuations across sectors as diverse as oil refineries, steel plants, power plants, and nuclear facilities. His keen insights and strategic guidance have propelled these organizations toward greater success and sustainable growth. A true visionary, Vivek Challapally now spearheads our analytics organization, leading the charge in exploring new horizons and diversifying our business portfolio. His innate ability to grasp complex business dynamics and navigate uncharted territories is a testament to his exceptional leadership. Beyond the boardroom, Vivek Challapally is an ardent sports fan. With a deep-rooted passion for tennis and badminton, he finds inspiration and relaxation on the court and field. This passion reflects his drive to excel both personally and professionally.",
    imageSrc: vivek,
  },
  {
    title: 'Srinivasu V',
    subtitle: "Board - Director at Vardaan Data Sciences and Vardaan Resources",
    description: "Srinivasu V, known as Srini, is a seasoned professional with over 28 years of diverse experience in various domains. Hailing from Bangalore, India, Srini is a management accountant with a Master's in Commerce, combining financial expertise with a deep understanding of technology. Srini holds a post-graduation in Commerce from Andhra University along with a professional qualification from the Institute of Cost and Management Accountants – India. Throughout his extensive career, Srini has made significant contributions across industries including manufacturing, hospitality, IT, sourcing, and even within the dynamic landscape of Unicorns. His areas of proficiency span logistics, accounting, reporting, outsourcing, advisory, and transformation. Srini's unique blend of financial acumen and technical prowess positions him as a valuable techno-functional resource. His insights have been instrumental in driving efficiency and growth in the organizations he's been a part of. With an innate ability to bridge the gap between financial strategies and technological implementations, Srini has consistently delivered solutions that optimize processes and enhance overall business performance. In the world of ever-evolving industries, Srini remains at the forefront of innovation and adaptation. His wealth of experience, combined with his continuous pursuit of excellence, makes him an asset to any team or organization aiming to thrive in today's competitive landscape.",
    imageSrc: srini,
  },
  {
    title: 'Ramana Murthy Venkata Saripalli',
    subtitle: "Board - Director - Vardaan Data Sciences",
    description: "Affectionately known as Ramana, he is a seasoned professional with a remarkable journey in the field of technology and IT landscape transformation. He laid the foundation of his expertise by graduating in engineering from Jawaharlal Nehru Technological University (JNTU), a pivotal step that fueled his passion for technology and innovation. Furthering his educational prowess, Ramana pursued his post-graduation from the prestigious Indian Institute of Technology (IIT) in Mumbai, enhancing his knowledge and skills to excel in the dynamic world of IT. Ramana's career trajectory saw him working for corporate giants across different continents, where he made significant contributions by advising and assisting customers in navigating their IT landscape and strategically driving technology agendas.",
    imageSrc: ramana,
  },
  {
    title: 'Gopakumar',
    subtitle: "Chief Executive Officer - Vardaan Data Science",
    description: "Gopakumar is the Chief Executive Officer of Vardaan Data Science, overseeing governance, customer acquisition, product and service modeling, and operations. Appointed in March 2025, he brings extensive leadership experience spanning applications engineering, product development, sales, and operations. With over 27 years in the IT industry, Gopakumar excels at aligning key organizational functions—including Sales, Delivery, Practice, Marketing, and Human Resources—to foster a culture of excellence and drive business growth. Before joining Vardaan Data Science, he led strategic business units at companies such as Mascon, Quadrant 4, and Saksoft, delivering complex and innovative solutions across diverse industries.",
    imageSrc: gopakumar,
  },
  {
    title: 'Prem Pillai',
    subtitle: "Director & Country Head, Vardaan, Malaysia",
    description: "Director & Country Head, Vardaan, Malaysia Boasting an illustrious and multifaceted spanning over 8 years, Prem Subramanian Pillai (fondly called Prem) brings a wealth of expertise in the fields of audit, accounting, finance, and taxation. His vocational odyssey and professional journey, which have taken him to prominent business hubs in the UAE and India, have culminated in his current role as the Director and Country Head of Vardaan in Malaysia. In his current capacity, Prem serves as the driving force behind the operations and business development initiatives of the Vardaan team in Malaysia. His superlative leadership is not confined to the precincts of Vardaan alone; it transcends national borders, as he concurrently offers consultancy services to advisory firms domiciled in both the UAE and Singapore, thereby emblemizing his unparalleled and cosmopolitan operational perspicacity. Prior to his stewardship at Vardaan, Prem made a significant impact on the audit sector in Dubai. He distinguished himself as a senior advisor and played an integral role in the management team of a renowned Dubai-based audit firm. Paramount among Prem's discernible attributes is his unwavering and ceaseless dedication to the pursuit of erudition. He holds a master's degree in commerce from Mumbai University and is a qualified chartered accountant from India. His intellectual voracity remains unquenched, as he presently finds himself immersed in the inexorable quest to attain his CPA certification on Malaysian soil. Beyond his professional achievements, Prem is deeply passionate about fostering meaningful connections and collaborations. His expertise extends beyond guiding existing firms; he possesses a unique talent for establishing new businesses on foreign soil, starting from the ground up. His meticulous attention to detail, as well as his exceptional skills in people and network management, have set a remarkable benchmark in his endeavors in offshore company arrangements. Prem's dedication to continuous learning and mentorship is a testament to his commitment to personal and professional growth. He perpetually assumes the mantle of an ever-present fount of sagacious counsel and inspiration to neophyte staff members, embodying the quintessence of a lifelong erudite and mentor par excellence.",
    imageSrc: prem,
  },
//   {
//     title: 'Gandhi Bhamidipati',
//     subtitle: "Vice President - Vardaan Data Sciences",
//     description: "B.S. Gandhi, Vice President at Vardaan Data Sciences, Hyderabad, is a seasoned IT professional with over 40 years of experience spanning software development, project management, quality assurance, and industry certifications. His career journey includes leadership roles at ECIL, CMC Limited, Duncan Infotech, TCS, and Magnaquest Technologies.",
//     imageSrc: gandhi,
//   },
//   {
//     title: 'Susheel Ramadoss',
//     subtitle: "Vice President - Vardaan Group of Companies",
//     description: "Susheel Ramadoss is a distinguished professional with expertise in research, technology, and innovation. He has contributed significantly to AI, data science, and automation through high-impact research, publications, and industry collaborations. His achievements include leading innovative projects, securing awards, and advancing data-driven solutions.",
//     imageSrc: susheel,
//   },
];

const Leadership = () => {
  useEffect(() => {
    const profileElements = document.querySelectorAll('.leadership-profile');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    profileElements.forEach(profile => {
      profile.style.opacity = 0;
      profile.style.transform = 'translateY(30px)';
      profile.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(profile);
    });
    
    return () => {
      profileElements.forEach(profile => observer.unobserve(profile));
    };
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      document.querySelectorAll('.leadership-profile').forEach(profile => {
        profile.style.display = 'none';
        setTimeout(() => {
          profile.style.display = '';
        }, 0);
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="leadership-page">
      <div className="leadership-hero-banner">
        <img src={leadershipBanner} alt="Leadership" className="leadership-banner-image" />
        <div className="leadership-header-content">
          <h1 className="leadership-main-title"><span style={{color: '#ffffff'}}>Our</span> <span>Leadership</span> <span style={{color: '#ffffff'}}>Team</span></h1>
          <p className="leadership-intro" style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>Meet the talented individuals who drive our company's vision and success.</p>
        </div>
      </div>
      
      <div className="leadership-profiles-container">
        {leadershipData.map((profile, index) => (
          <div className="leadership-profile" key={index}>
            <div className="leadership-image">
              <img src={profile.imageSrc} alt={profile.title} />
            </div>
            <div className="leadership-info">
              <h2 className="leadership-name">{profile.title}</h2>
              <h3 className="leadership-position">{profile.subtitle}</h3>
              <p className="leadership-bio">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Leadership; 