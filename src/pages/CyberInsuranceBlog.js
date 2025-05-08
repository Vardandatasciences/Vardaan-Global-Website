import React from 'react';
import { Link } from 'react-router-dom';
import './CyberInsuranceBlog.css';
import insuranceImg from '../assets/images/insurance.jpg';
import barGraphImg from '../assets/images/bargraph.png';

const CyberInsuranceBlog = () => {
  return (
    <div className="cyber-insurance-blog">
      <div className="header-with-button">
        <Link to="/blog" className="back-to-blogs-btn">
          Back to Blogs
        </Link>
      </div>
      
      <main className="container">
        <article className="blog-post">
          <h1>Impact of cyber insurance coverage on ransomware outcomes</h1>
          <div className="article-meta">
            <span className="author">By Sridhar Khambhampati</span>
            <span className="date">July 4, 2024</span>
          </div>

          <img src={insuranceImg} alt="Cyber Insurance Coverage" className="article-image" />

          <section className="intro">
            <p>The goal of insurance is to reduce the impact of perils on an organization. With this in mind, the findings from the Sophos State of Ransomware 2024 study were analyzed to identify whether there is any correlation between insurance position and outcomes, focusing on five core milestones of the victim journey:</p>
            
            <ul className="milestone-list">
              <li>Propensity to be hit by ransomware</li>
              <li>Propensity to have data encrypted</li>
              <li>Ransom payment amount</li>
              <li>Propensity to pay the ransom to recover encrypted data</li>
              <li>Overall recovery costs (excluding the ransom payment)</li>
            </ul>
          </section>

          <section className="caveat">
            <p>One important caveat to preface this analysis is that we do not know whether the victim's current insurance policy was purchased before or after their ransomware attack, i.e. if the purchase decision was influenced by their prior ransomware experience or whether it was already in place. However, with cyber insurance adoption by State of Ransomware participants remaining stable over the last two years (90% in the 2024 study, 91% in the 2023 study) the analysis provides a reasonable indicative starting point to facilitate further research in this area.</p>
          </section>

          <img src={barGraphImg} alt="Ransomware Statistics Bar Graph" className="article-image" />

          <section className="findings">
            <h2>Propensity to be hit by ransomware</h2>
            <p>The data shows very little difference in the ransomware attack rate based on cyber insurance adoption, with all three groups reporting very similar propensity to have been hit in the last year:</p>
            
            <ul className="stats-list">
              <li>62% with a standalone policy were hit by ransomware in the last year (n=2,523)</li>
              <li>57% with cyber as part of a wider policy were hit by ransomware in the last year (n=1,975)</li>
              <li>58% without a cyber policy were hit by ransomware in the last year (n=489)</li>
            </ul>
          </section>

          <section className="findings">
            <h2>Ransom payment amount</h2>
            <p>Organizations with cyber policies report lower average ransom payment amounts than those without coverage. The median payment by those without cyber coverage came in at $3.41 million, considerably above the $2 million for those with a standalone policy and $1.53 million for those with cyber as part of a wider business policy.</p>
          </section>
        </article>
      </main>

      
    </div>
  );
};

export default CyberInsuranceBlog; 