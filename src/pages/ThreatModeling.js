import React from 'react';
import { Link } from 'react-router-dom';
import './ThreatModeling.css';
import threatModelVideo from '../assets/videos/6_Threat_Model_Video_Suresh_V7_20240726.mp4';

const ThreatModeling = () => {
  return (
    <>
      <Link to="/blog" className="back-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </Link>
      <div className="threat-modeling-container">
        <h1>Threat Modeling</h1>
        <div className="video-wrapper">
          <video controls width="100%">
            <source src={threatModelVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default ThreatModeling; 