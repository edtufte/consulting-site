import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>We Bring Fortune 5 Companies' Operations <br />Playbook to Mid-Market Companies</h1>
            <p className="hero-subtitle">$6.2MM saved at one Walmart facility using variation reduction.</p>
            <p className="hero-description">
              Tufte Decision Sciences: Former Amazon and Walmart leaders solving supply chain complexity 
              with proven methodologies that deliver 10-15x ROI.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Get Your Free Assessment</a>
              <a href="#case-study" className="btn-secondary">See Our $6.2MM Case Study</a>
            </div>
          </div>
        </div>
      </section>

      <section className="credibility">
        <div className="container">
          <div className="credibility-grid">
            <div className="cred-item">
              <div className="cred-number">$6.2MM</div>
              <div className="cred-label">Single Site Savings</div>
            </div>
            <div className="cred-item">
              <div className="cred-number">50+</div>
              <div className="cred-label">Years Combined Experience</div>
            </div>
            <div className="cred-item">
              <div className="cred-number">500M+</div>
              <div className="cred-label">Daily Records Processed</div>
            </div>
            <div className="cred-item">
              <div className="cred-number">10-15x</div>
              <div className="cred-label">Average Client ROI</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;