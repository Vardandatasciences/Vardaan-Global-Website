import React from 'react';
import './Home.css';
import backgroundImage from '../assets/images/homebg1.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <p className="home-text">
            Vardaan, a dynamic and rapidly emerging force in the world of technology,
            is headquartered in Dubai, UAE, with a global presence in strategic locations
            across the globe. Since our inception in 2018 as a specialized Cyber Security
            company under the banner of Prometis Cyber Security, we have swiftly evolved
            into a multifaceted organization offering a comprehensive suite of services
            that encompass Cyber Security, Analytics, and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home; 