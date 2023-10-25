// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/choose">Why Choose Us</Link>
        </li>
        <li>
          <Link to="/GetStarted">Get Started</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
