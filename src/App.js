import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/blog';
import XSS from './pages/XSS';
import Rootkit from './pages/Rootkit';
import VaptForCloud from './pages/VaptForCloud';
import VaptForCloudPart1 from './pages/VaptForCloudPart1';
import ThreatModeling from './pages/ThreatModeling';
import VaptCloudArticle from './pages/VaptCloudArticle';
import VaptCloudPart1Article from './pages/VaptCloudPart1Article';
import ThreatModelingBlog from './pages/ThreatModelingBlog';
import CyberInsuranceBlog from './pages/CyberInsuranceBlog';
import VaptEvolutionBlog from './pages/VaptEvolutionBlog';
// import CloudServices from './pages/Services/CloudServices';
import CyberSecurity from './pages/Services/CyberSecurity';
import DataSciences from './pages/Services/DataSciences';
import Resources from './pages/Services/Resources';
// import Services from './pages/Services/Services';
import GetInTouch from './pages/GetInTouch/GetInTouch';
import Leadership from './pages/Leadership/Leadership';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/xss" element={<XSS />} />
          <Route path="/rootkit" element={<Rootkit />} />
          <Route path="/vapt-cloud" element={<VaptForCloud />} />
          <Route path="/vapt-cloud-part1" element={<VaptForCloudPart1 />} />
          <Route path="/threat-modeling" element={<ThreatModeling />} />
          <Route path="/vapt-cloud-article" element={<VaptCloudArticle />} />
          <Route path="/vapt-cloud-part1-article" element={<VaptCloudPart1Article />} />
          <Route path="/threat-modeling-blog" element={<ThreatModelingBlog />} />
          <Route path="/cyber-insurance-blog" element={<CyberInsuranceBlog />} />
          <Route path="/vapt-evolution-blog" element={<VaptEvolutionBlog />} />
          <Route path="*" element={<Home />} />
          <Route path="/" element={
            <div className="content">
              <h1>Welcome to Our Website</h1>
              <p>This is a sample content area to demonstrate the navbar.</p>
            </div>
          } />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/services/cloud-services" element={<CloudServices />} /> */}
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
          <Route path="/services/data-sciences" element={<DataSciences />} />
          <Route path="/services/resources" element={<Resources />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/Leadership" element={<Leadership />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
