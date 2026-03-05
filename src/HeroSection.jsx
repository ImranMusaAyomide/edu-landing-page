import React from 'react';
import './HeroSection.css';
import HeroSectionImage from './assets/hero-section-image.png';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content-wrapper">
        
        {/* Left Column: Text & CTA */}
        <div className="hero-left">
          <div className="version-badge">
            New: AI-Driven Workflow Optimization v2.0
          </div>
          
          <h1 className="hero-title">
            Bridge the Gap <br />
            Between <br />
            <span className="highlight-blue">Strategy</span> and <br />
            Execution
          </h1>
          
          <p className="hero-description">
            NexusFlow orchestrates your most complex projects with AI automation, 
            giving your team the clarity to build what matters most.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Watch Product Tour</button>
          </div>
          
          <div className="hero-social-proof">
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/100?u=1" alt="User" />
              <img src="https://i.pravatar.cc/100?u=2" alt="User" />
              <img src="https://i.pravatar.cc/100?u=3" alt="User" />
              <img src="https://i.pravatar.cc/100?u=4" alt="User" />
            </div>
            <p className="social-text">
              <strong>10k+</strong> teams already orchestrating faster
            </p>
          </div>
        </div>

        {/* Right Column: Dashboard Image */}
        <div className="hero-right">
          <div className="image-bg-glow"></div>
          <div className="dashboard-card">
            <div className="card-inner">
              <img 
                src={HeroSectionImage} 
                alt="NexusFlow Dashboard" 
                className="dashboard-img" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;