import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer'; 
import Services from './pages/Services';
import Choose from './pages/Choose';
import GetStarted from './pages/GetStarted';

import './App.css';

function App() {
    return (
        <Router> {/* Wrap your entire application with Router */}
          <div className="App">
            <Header />
            <Navbar />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/services" element={<Services />} />
              <Route path="/choose" element={<Choose />} />
              <Route path="/GetStarted" element={<GetStarted />} />
            </Routes>
            <Footer />
          </div>
        </Router>
    );
}

export default App;
