import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages//Home';
import Properties from './pages//Properties';
import PropertyDetails from './pages/catalog/PropertyDetails';
import Contact from './pages//Contact';
import './App.css';

function App() {
  const url = "https://trinoxabrasives.com/api";
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home url={url}/>} />
          <Route path="/properties" element={<Properties url={url}/>} />
          <Route path="/property-details" element={<PropertyDetails url={url}/>} />
          <Route path="/contact" element={<Contact url={url}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;