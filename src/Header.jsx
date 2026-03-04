import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <img 
            src="https://path-to-your-logo.png" 
            alt="NexusFlow Logo" 
            className="logo-icon" 
          />
          <span className="logo-text">NexusFlow</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          <button className="login-btn">Log In</button>
          <button className="demo-btn">Book a Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;