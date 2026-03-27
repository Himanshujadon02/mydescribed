import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
 
const values = [
  { icon: '◈', title: 'Innovation First', desc: 'We never stop questioning the status quo. Every project is a chance to build something better.' },
  { icon: '⬡', title: 'Radical Transparency', desc: 'We communicate openly with clients and each other — no surprises, no black boxes.' },
  { icon: '◉', title: 'Deep Ownership', desc: 'Every team member takes full ownership of their work, from first line of code to production.' },
  { icon: '◇', title: 'Human-Centered', desc: 'Technology exists to serve people. We design with empathy and build for real humans.' },
];
 
const milestones = [
  { year: '2012', event: 'Founded in San Francisco by a team of ex-Google engineers.' },
  { year: '2015', event: 'Launched our first enterprise SaaS product, reaching 10,000 users.' },
  { year: '2018', event: 'Expanded to London and Singapore. Reached 50 employees.' },
  { year: '2020', event: 'Pivoted to a full-service technology consultancy model.' },
  { year: '2022', event: 'Launched our AI practice. Closed Series B funding round.' },
  { year: '2024', event: '200+ projects delivered. Recognized as a Top Tech Employer.' },
];
 
export default function About() {
  return (
    <main className="about">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="section-tag">Our Story</span>
          <h1 className="section-title" style={{fontSize:'clamp(2.5rem,5vw,4rem)'}}>Built by builders,<br/><span className="gradient-text">for builders</span></h1>
          <p className="section-subtitle" style={{maxWidth:600}}>MyDescribed was born from a simple frustration: most technology agencies overpromise and underdeliver. We set out to change that.</p>
        </div>
      </section>
 
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To empower organizations with technology that is elegant, resilient, and built to last.' },
              { icon: '🔭', title: 'Our Vision', desc: 'A world where every great idea has access to world-class engineering.' },
              { icon: '💡', title: 'Our Approach', desc: 'We embed ourselves in your team, move fast, and ship quality code — as a true partner.' },
            ].map((m,i) => (
              <div key={i} className="mission-card card">
                <div className="mission-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="about-values">
        <div className="container about-values__inner">
          <div>
            <span className="section-tag">What we stand for</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v,i) => (
              <div key={i} className="value-item">
                <span className="value-icon">{v.icon}</span>
                <div><h4>{v.title}</h4><p>{v.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="about-timeline">
        <div className="container">
          <span className="section-tag">Our Journey</span>
          <h2 className="section-title">Milestones that define us</h2>
          <div className="timeline">
            <div className="timeline__line" />
            {milestones.map((m,i) => (
              <div key={i} className={`timeline__item ${i%2===0?'left':'right'}`}>
                <div className="timeline__dot" />
                <div className="timeline__content card">
                  <span className="timeline__year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="about-cta">
        <div className="container">
          <div className="cta-inline card">
            <div>
              <h2 className="section-title">Want to work<br/><span className="gradient-text">with us?</span></h2>
            </div>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <Link to="/team" className="btn-primary">Meet the Team</Link>
              <Link to="/contact" className="btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}