import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
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
