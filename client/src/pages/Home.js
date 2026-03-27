import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
 
function useIntersect() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
 
const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Years Experience' },
  { value: '40+', label: 'Team Members' },
];
 
const features = [
  { icon: '⬡', title: 'Scalable Architecture', desc: 'We design systems that grow with your business — microservices, cloud-native, and always resilient.' },
  { icon: '◈', title: 'AI-Powered Solutions', desc: 'Integrate machine learning and intelligent automation to stay ahead of the competition.' },
  { icon: '◇', title: 'End-to-End Security', desc: 'From code to cloud, we bake security into every layer of your technology stack.' },
  { icon: '⬨', title: 'Agile Delivery', desc: 'Iterative sprints, transparent progress, and on-time launches — every single time.' },
  { icon: '◉', title: 'Product Design', desc: 'Interfaces that users love: research-backed UX, pixel-perfect UI, and accessibility by default.' },
  { icon: '⬙', title: '24/7 Support', desc: 'Our dedicated support team monitors your systems around the clock so you never miss a beat.' },
];
 
export default function Home() {
  const statsRef = useIntersect();
  const featRef = useIntersect();
  const ctaRef = useIntersect();
 
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__grid" />
        </div>
        <div className="container hero__content">
          <div className="hero__badge"><span className="badge-dot" />Now hiring — Join our engineering team</div>
          <h1 className="hero__title">We build tech that<br/><span className="gradient-text">shapes tomorrow</span></h1>
          <p className="hero__subtitle">MyDescribed delivers enterprise-grade software, cloud architecture, and AI solutions that help ambitious companies scale without limits.</p>
          <div className="hero__actions">
            <Link to="/services" className="btn-primary">Explore Services</Link>
            <Link to="/about" className="btn-outline">Our Story</Link>
          </div>
          <div className="hero__clients">
            <span>Trusted by teams at</span>
            {['Stripe','Vercel','Linear','Notion','Figma'].map(c => <span key={c} className="client-name">{c}</span>)}
          </div>
        </div>
        <div className="hero__scroll"><div className="scroll-indicator" /></div>
      </section>
 
      <section className="stats reveal" ref={statsRef}>
        <div className="container">
          <div className="stats__grid">
            {stats.map((s,i) => (
              <div key={i} className="stat-card">
                <span className="stat-value gradient-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="features reveal" ref={featRef}>
        <div className="container">
          <div className="features__header">
            <span className="section-tag">Why MyDescribed</span>
            <h2 className="section-title">Everything you need to<br/>build with confidence</h2>
            <p className="section-subtitle">From concept to production, we cover every stage of the software lifecycle.</p>
          </div>
          <div className="features__grid">
            {features.map((f,i) => (
              <div key={i} className="card feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="cta-section reveal" ref={ctaRef}>
        <div className="container">
          <div className="cta-card card">
            <div className="cta-glow" />
            <span className="section-tag">Ready to start?</span>
            <h2 className="section-title">Let's build something<br/><span className="gradient-text">extraordinary</span></h2>
            <p className="section-subtitle">Schedule a free 30-minute discovery call and see how MyDescribed can accelerate your vision.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Start a Project</Link>
              <Link to="/team" className="btn-outline">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}