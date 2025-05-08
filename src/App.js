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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
