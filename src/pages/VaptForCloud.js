import React from 'react';
import { Link } from 'react-router-dom';
import './VaptForCloud.css';
import cloudVideo from '../assets/videos/8_VAPT_for_Cloud_Part 2_Bhaskar_20240808.mp4';

const VaptForCloud = () => {
  return (
    <>
      <Link to="/blog" className="back-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </Link>
      <div className="vapt-cloud-container">
        <h1>VAPT for Cloud – Part 2</h1>
        <div className="video-wrapper">
          <video controls width="100%">
            <source src={cloudVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default VaptForCloud; 