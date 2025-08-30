import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <>
      {/* Methodology Section */}
      <section className="methodology" id="methodology">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Same Framework That Transformed Walmart</h2>
            <p className="section-subtitle">Our Variation Reduction methodology isn't theory - we've deployed it successfully.</p>
          </div>
          <div className="method-showcase">
            <h3>The Variation Reduction Framework</h3>
            <p>One Walmart warehouse. Eight weeks. $6.2MM in annualized savings.</p>
            <div className="method-steps">
              <div className="method-step">
                <div className="step-number">1</div>
                <div className="step-title">Identify</div>
                <div className="step-description">Map variation patterns across shifts and processes</div>
              </div>
              <div className="method-step">
                <div className="step-number">2</div>
                <div className="step-title">Analyze</div>
                <div className="step-description">Isolate root causes using advanced analytics</div>
              </div>
              <div className="method-step">
                <div className="step-number">3</div>
                <div className="step-title">Optimize</div>
                <div className="step-description">Implement targeted improvements</div>
              </div>
              <div className="method-step">
                <div className="step-number">4</div>
                <div className="step-title">Scale</div>
                <div className="step-description">Roll out across entire operation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Engage</h2>
            <p className="section-subtitle">Three ways to access Fortune 500 expertise</p>
          </div>
          <div className="service-cards">
            <div className="service-card">
              <div className="service-header">
                <h3 className="service-title">Strategic Assessment</h3>
                <div className="service-price">From $25K</div>
              </div>
              <div className="service-body">
                <ul className="service-features">
                  <li>2-week comprehensive analysis</li>
                  <li>Operations efficiency audit</li>
                  <li>Variation score calculation</li>
                  <li>ROI opportunity mapping</li>
                  <li>Implementation roadmap</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{width: '100%', textAlign: 'center'}}>Start Assessment</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-header">
                <h3 className="service-title">Transformation Sprint</h3>
                <div className="service-price">From $100K</div>
              </div>
              <div className="service-body">
                <ul className="service-features">
                  <li>8-12 week intensive engagement</li>
                  <li>Dedicated team deployment</li>
                  <li>Variation reduction implementation</li>
                  <li>Real-time dashboard creation</li>
                  <li>Knowledge transfer to your team</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{width: '100%', textAlign: 'center'}}>Discuss Sprint</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-header">
                <h3 className="service-title">Strategic Partnership</h3>
                <div className="service-price">Custom Pricing</div>
              </div>
              <div className="service-body">
                <ul className="service-features">
                  <li>Ongoing optimization support</li>
                  <li>Quarterly business reviews</li>
                  <li>Priority access to specialists</li>
                  <li>Multi-site implementation</li>
                  <li>Executive advisory services</li>
                </ul>
                <a href="#contact" className="btn-primary" style={{width: '100%', textAlign: 'center'}}>Explore Partnership</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;