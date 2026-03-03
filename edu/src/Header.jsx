import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <span className="calendar-icon">📅</span>
          </div>
          <span className="logo-text">Attendly</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>

        {/* Action Buttons */}
        <div className="actions">
          <a href="#login" className="login-btn">Log In</a>
          <button className="demo-btn">Get Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;