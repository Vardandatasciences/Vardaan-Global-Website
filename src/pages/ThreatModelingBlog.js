import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ThreatModelingBlog.css';
import threatModelingImg from '../assets/images/Threatmodeling.png';

const ThreatModelingBlog = () => {
  useEffect(() => {
    // Get all STRIDE items and details
    const strideItems = document.querySelectorAll('.stride-item');
    const strideDetails = document.querySelectorAll('.stride-detail');

    // Function to show STRIDE detail
    const showStrideDetail = (category) => {
      // Hide all details first
      strideDetails.forEach(detail => {
        detail.classList.remove('active');
      });

      // Show the selected detail
      const selectedDetail = document.getElementById(category);
      if (selectedDetail) {
        selectedDetail.classList.add('active');
      }

      // Update active state of items
      strideItems.forEach(item => {
        if (item.dataset.category === category) {
          item.style.backgroundColor = 'var(--primary-color)';
        } else {
          item.style.backgroundColor = 'var(--secondary-color)';
        }
      });
    };

    // Add click event listeners to STRIDE items
    strideItems.forEach(item => {
      item.addEventListener('click', () => {
        const category = item.dataset.category;
        showStrideDetail(category);
      });
    });

    // Show the first STRIDE detail by default
    if (strideItems.length > 0) {
      const firstCategory = strideItems[0].dataset.category;
      showStrideDetail(firstCategory);
    }

    // Cleanup function
    return () => {
      strideItems.forEach(item => {
        item.removeEventListener('click', () => {
          const category = item.dataset.category;
          showStrideDetail(category);
        });
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="threat-modeling-blog">
      <div className="header-with-button">
        <Link to="/blog" className="back-to-blogs-btn">
          Back to Blogs
        </Link>
      </div>
      
      <main className="container">
        <article className="blog-post">
          <h1>Threat Modeling</h1>
          <div className="article-meta">
            <span className="author">By Suresh Potharaboina</span>
            <span className="date">July 9, 2024</span>
          </div>

          <section className="intro">
            <h2>What is Threat Modeling</h2>
            <p>Having recently attended a NULL security event on threat modeling, I have gained fresh insights and perspectives. Threat modeling is a rigorous approach that requires collaboration from various stakeholders, including security experts, business owners, developers, and analysts. To identify potential risks, the method involves discussing the product's position and then identifying necessary actions to prevent or mitigate these threats.</p>
          </section>

          <img src={threatModelingImg} alt="Threat Modeling Diagram" className="article-image" />

          <section>
            <h2>Why Use a Threat Model?</h2>
            <p>Threat modeling is a proactive cybersecurity strategy that allows teams to detect early in the development process potential vulnerabilities and threats in software or systems. Organizations can foresee and reduce risks by thoroughly assessing the system from the standpoint of an attacker. This strategy improves security and lowers the cost and work involved with post-development vulnerability fixes.</p>
          </section>

          <section>
            <h2>When Should Threat Modeling Be Done and How?</h2>
            <p>Threat modeling should be introduced into the Software Development Life Cycle (SDLC) as early as possible, preferably during the planning and design stages. This guarantees that security considerations are built into the system architecture from the start, rather than being added as an afterthought.</p>
          </section>

          <section>
            <h2>How is the Process of Threat Modeling Executed?</h2>
            <p>Threat modeling can be done using a variety of methodologies and frameworks, including STRIDE, PASTA, and DREAD, among others. In this blog post, information on STRIDE Threat Model is shared.</p>
          </section>

          <section className="stride-section">
            <h2>Recognizing the Threat Model for STRIDE</h2>
            <p>In the subject of cybersecurity, the STRIDE threat model serves as a key framework for assessing potential threats to computer networks and systems. This Microsoft-developed approach categorizes threats into six basic categories, each representing a particular type of security issue.</p>
            
            <div className="stride-diagram">
              <div className="stride-circle">
                <div className="stride-item" data-category="spoofing">Spoofing</div>
                <div className="stride-item" data-category="tampering">Tampering</div>
                <div className="stride-item" data-category="repudiation">Repudiation</div>
                <div className="stride-item" data-category="information">Information Disclosure</div>
                <div className="stride-item" data-category="dos">Denial of Service</div>
                <div className="stride-item" data-category="elevation">Elevation of Privilege</div>
              </div>
            </div>

            <div className="stride-details">
              <div className="stride-detail" id="tampering">
                <h3>Tampering</h3>
                <p>Tampering is the term for making illegal changes to systems or data. Attackers may modify data to sabotage processes, tamper with transactions, or jeopardize data integrity. To mitigate this threat, it is essential to implement measures like data encryption, digital signatures, and integrity checks to ensure that any unauthorized changes can be detected and prevented.</p>
              </div>

              <div className="stride-detail" id="repudiation">
                <h3>Repudiation</h3>
                <p>When someone disputes carrying out a specific action, it is referred to as repudiation in the context of security. By putting in place safeguards like digital signatures and audit trails to ensure accountability for actions made within a system, this hazard can be lessened. Proper logging and monitoring of all user activities are crucial for addressing repudiation threats.</p>
              </div>

              <div className="stride-detail" id="information">
                <h3>Information Disclosure</h3>
                <p>Also referred to as exposure, this vulnerability is the exposure or unapproved access to private data. Vulnerabilities could be used by attackers to gain private information, including personal data, intellectual property, or confidential business information. To protect against information disclosure, organizations should implement robust access controls, data encryption, and regular security assessments to identify and fix potential vulnerabilities.</p>
              </div>

              <div className="stride-detail" id="dos">
                <h3>Denial of Service (DoS)</h3>
                <p>Attacks known as denial of service (DoS) are designed to interfere with or disable a system's functionality, rendering it unavailable to authorized users. This can be accomplished by flooding the system with traffic or by taking advantage of architectural flaws in the system. Implementing network defenses such as firewalls, intrusion detection/prevention systems, and rate limiting can help mitigate DoS threats.</p>
              </div>

              <div className="stride-detail" id="elevation">
                <h3>Elevation of Privilege</h3>
                <p>This attack vector entails an attacker obtaining access to resources or capabilities that are not intended for them. Through the exploitation of software bugs or holes in authentication systems, attackers can elevate their privileges and take over systems or data. Regularly updating and patching software, along with implementing the principle of least privilege (ensuring users have only the access necessary for their roles), can help prevent elevation of privilege attacks.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Using STRIDE</h2>
            <p>When developing software or developing systems, organizations use the STRIDE model to identify possible threats during the design and implementation phases. Security experts can successfully reduce risks by prioritizing threats and putting in place the necessary countermeasures by methodically examining each category.</p>
          </section>

          <section className="conclusion">
            <h2>Conclusion</h2>
            <p>Threat modeling is a structured process involving stakeholders to identify and mitigate potential security threats early in the development lifecycle. It enhances security by analyzing systems from an attacker's perspective, preventing vulnerabilities before they are exploited. Integrating threat modeling into the SDLC, especially during planning and design, ensures robust security measures from the start. Frameworks like STRIDE categorize risks into six areas: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege. Each category helps systematically identify and address specific security issues, improving overall security posture.</p>
          </section>
        </article>
      </main>

     
    </div>
  );
};

export default ThreatModelingBlog; 