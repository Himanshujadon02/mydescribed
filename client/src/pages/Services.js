import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
 
const services = [
  { id:'web', icon:'◈', title:'Web Development', tagline:'Performant, scalable web applications', desc:'From marketing sites to complex SaaS platforms, we build web experiences that are fast, accessible, and built to grow.', features:['React / Next.js / Vue','Node.js & REST APIs','TypeScript','Performance Optimization','SEO & Accessibility'], color:'#6c63ff' },
  { id:'cloud', icon:'⬡', title:'Cloud Solutions', tagline:'Scalable infrastructure for modern teams', desc:'We architect, migrate, and optimize cloud environments on AWS, GCP, and Azure — with security and cost-efficiency built in.', features:['AWS / GCP / Azure','Kubernetes & Docker','CI/CD Pipelines','Infrastructure as Code','Cost Optimization'], color:'#00d4ff' },
  { id:'ai', icon:'◉', title:'AI & Machine Learning', tagline:'Intelligent products that learn and adapt', desc:'We build LLM-powered applications, predictive models, and intelligent automation tools that give your business a serious edge.', features:['LLM Integration','Custom ML Models','NLP & Computer Vision','MLOps Pipelines','Data Engineering'], color:'#a855f7' },
  { id:'security', icon:'◇', title:'Cybersecurity', tagline:'Protect what matters most', desc:'From penetration testing to zero-trust architecture, we embed security at every layer.', features:['Penetration Testing','Zero Trust Architecture','SAST/DAST Scanning','SOC 2 Compliance','Incident Response'], color:'#f43f5e' },
  { id:'design', icon:'⬨', title:'Product Design', tagline:'Beautiful, usable interfaces', desc:'We turn complex requirements into intuitive, delightful user experiences grounded in research.', features:['UX Research','UI Design Systems','Figma Prototyping','Usability Testing','Brand Identity'], color:'#f97316' },
  { id:'mobile', icon:'⬙', title:'Mobile Development', tagline:'Native and cross-platform apps', desc:'We build polished iOS and Android apps with React Native and Flutter — shipping fast without sacrificing quality.', features:['React Native','Flutter','iOS (Swift)','Android (Kotlin)','App Store Optimization'], color:'#22c55e' },
];
 
export default function Services() {
  const [active, setActive] = useState(null);
  return (
    <main className="services">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="section-tag">What We Do</span>
          <h1 className="section-title" style={{fontSize:'clamp(2.5rem,5vw,4rem)'}}>Full-spectrum<br/><span className="gradient-text">technology services</span></h1>
          <p className="section-subtitle" style={{maxWidth:520}}>Whether you need a single service or an end-to-end technology partner, MyDescribed has the expertise to deliver.</p>
        </div>
      </section>
 
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map(s => (
              <div key={s.id} className={`service-card card ${active===s.id?'service-card--active':''}`} onClick={() => setActive(active===s.id?null:s.id)} style={{'--service-color':s.color}}>
                <div className="service-card__header">
                  <span className="service-icon" style={{color:s.color}}>{s.icon}</span>
                  <div><h3>{s.title}</h3><span className="service-tagline">{s.tagline}</span></div>
                  <span className="service-toggle">{active===s.id?'−':'+'}</span>
                </div>
                <p className="service-desc">{s.desc}</p>
                <div className={`service-features ${active===s.id?'service-features--open':''}`}>
                  <ul>{s.features.map(f => <li key={f}><span className="check" style={{color:s.color}}>✓</span>{f}</li>)}</ul>
                  <Link to="/contact" className="btn-primary" style={{marginTop:'1.5rem',background:s.color}}>Inquire About This Service</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="process">
        <div className="container">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">Our proven delivery process</h2>
          <div className="process-steps">
            {[
              {num:'01',title:'Discovery',desc:'We listen, learn, and define clear goals for your project.'},
              {num:'02',title:'Strategy',desc:'We map out the architecture, milestones, and success metrics.'},
              {num:'03',title:'Build',desc:'Agile sprints, daily standups, and continuous delivery.'},
              {num:'04',title:'Launch',desc:'Thorough QA, staged rollouts, and post-launch monitoring.'},
            ].map((s,i) => (
              <div key={i} className="process-step">
                <span className="step-num gradient-text">{s.num}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}