import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    challenge: '',
    timeline: '',
    size: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send to your backend
    // For now, we'll just log it and show a success message
    console.log('Form submission:', formData);
    
    // Show success message
    alert("Thank you for your interest! We'll be in touch within 24 hours to schedule your assessment.");
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      challenge: '',
      timeline: '',
      size: ''
    });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Start Your Transformation</h2>
            <p className="section-subtitle">Let's discuss how we can deliver measurable value for your organization</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="challenge">What's your biggest operational challenge right now? *</label>
              <textarea
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeline">When do you need this solved by? *</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                required
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediately (This quarter)</option>
                <option value="q2">Q2 2025</option>
                <option value="q3">Q3 2025</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="size">Annual Revenue</label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
              >
                <option value="">Select range</option>
                <option value="10-50m">$10M - $50M</option>
                <option value="50-100m">$50M - $100M</option>
                <option value="100-500m">$100M - $500M</option>
                <option value="500m+">$500M+</option>
              </select>
            </div>
            <button type="submit" className="form-submit">Request Your Assessment</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Tufte Decision Sciences</h3>
              <p>Transforming mid-market operations with Fortune 500 expertise.</p>
              <div className="contact-info">
                <p>📧 hello@tufteds.com</p>
                <p>📞 Schedule a call</p>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#methodology">Our Methodology</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#case-study">Case Studies</a></li>
                <li><a href="#team">Team</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Tufte Decision Sciences LLC. All rights reserved.</p>
            <p style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 0.8 }}>
              Turning data into decisions that drive growth.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;