import React from 'react';
import './CaseStudies.css';

const CaseStudies: React.FC = () => {
  return (
    <>
      {/* Case Study Section */}
      <section className="case-study" id="case-study">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">From One Warehouse to Your Entire Network</h2>
            <p className="section-subtitle">Real results from our Variation Reduction methodology</p>
          </div>
          <div className="case-highlight">
            <h3>Walmart Distribution Center #6074</h3>
            <p>The Challenge: 40% throughput variation between day and night shifts was crushing profitability.</p>
            <div className="case-metrics">
              <div className="case-metric">
                <div className="metric-value">8 Weeks</div>
                <div className="metric-label">Project Duration</div>
              </div>
              <div className="case-metric">
                <div className="metric-value">$6.2MM</div>
                <div className="metric-label">Annualized Savings</div>
              </div>
              <div className="case-metric">
                <div className="metric-value">40% → 5%</div>
                <div className="metric-label">Variation Reduction</div>
              </div>
              <div className="case-metric">
                <div className="metric-value">187 Sites</div>
                <div className="metric-label">Rollout Potential</div>
              </div>
            </div>
            <p style={{ marginTop: '30px', fontStyle: 'italic' }}>
              "We left $1.2B on the table by not scaling nationwide. Don't make the same mistake."
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" id="team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership</h2>
            <p className="section-subtitle">Deep bench of Fortune 500 practitioners</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <h3 className="member-name">Eric Tufte</h3>
              <p className="member-role">Managing Principal</p>
              <p className="member-bio">
                Former Data Scientist at Walmart and Amazon. Led the variation reduction initiative 
                that saved $6.2MM at a single distribution center. 7+ years optimizing operations 
                at Fortune 500 scale.
              </p>
            </div>
          </div>
          <div className="team-network">
            <h3>Our Collective Expertise</h3>
            <p style={{ marginTop: '20px' }}>
              Tufte Decision Sciences practitioners bring 50+ combined years from Amazon Web Services, 
              Walmart Supply Chain, Fortune 500 Finance, and Enterprise Data Engineering.
            </p>
            <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
              We assemble the right team for each engagement from our network of senior practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>We Take Three Clients Per Quarter</h2>
          <p>Deep engagement with select companies ready to transform.</p>
          <p style={{ fontSize: '1rem', opacity: 0.9 }}>Q1 2025: 2 spots remaining | Q2 2025: Now accepting applications</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn-white">Claim Your Q1 Spot</a>
            <a href="#contact" className="btn-white">Schedule Executive Briefing</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;