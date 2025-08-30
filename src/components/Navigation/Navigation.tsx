import React from 'react';
import { useScrollDetection, useTheme } from '../../hooks';
import ThemeToggle from '../ThemeToggle';
import './Navigation.css';

const Navigation: React.FC = () => {
  const { isScrolled } = useScrollDetection();
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg';
  
  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <img src={logoSrc} alt="Tufte Decision Sciences" className="logo-img" />
            <span className="company-name">Tufte Decision Sciences</span>
          </div>
          <ul className="nav-links">
            <li><a href="#methodology">Our Method</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#case-study">Results</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
          <div className="nav-actions">
            <ThemeToggle />
            <a href="#contact" className="nav-cta">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;