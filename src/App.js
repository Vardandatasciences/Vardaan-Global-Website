import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>This is a sample content area to demonstrate the navbar.</p>
      </div>
    </div>
  );
}

export default App;
