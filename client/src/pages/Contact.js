import React, { useState } from 'react';
import './Contact.css';
 
const services = ['Web Development','Cloud Solutions','AI & Machine Learning','Cybersecurity','Product Design','Mobile Development','Other'];
const initialForm = { name:'', email:'', subject:'', service:'', message:'' };
 
function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Name is required.';
  if (!f.email.trim()) e.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email.';
  if (!f.subject.trim()) e.subject = 'Subject is required.';
  if (!f.message.trim()) e.message = 'Message is required.';
  else if (f.message.trim().length < 20) e.message = 'Message must be at least 20 characters.';
  return e;
}
 
export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [serverMsg, setServerMsg] = useState('');
 
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };
 
  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setStatus('success'); setServerMsg(data.message); setForm(initialForm); }
      else { setStatus('error'); setServerMsg(data.message || 'Something went wrong.'); }
    } catch { setStatus('error'); setServerMsg('Could not reach the server. Please try again.'); }
  };
 
  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-title" style={{fontSize:'clamp(2.5rem,5vw,4rem)'}}>Let's start a<br/><span className="gradient-text">conversation</span></h1>
          <p className="section-subtitle" style={{maxWidth:480}}>Have a project in mind? Ready to scale? We'd love to hear from you.</p>
        </div>
      </section>
 
      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">
            <aside className="contact-info">
              {[
                { icon:'📍', label:'Office', value:'42 Innovation Drive\nSan Francisco, CA 94105' },
                { icon:'✉️', label:'Email', value:'hello@MyDescribed.io', href:'mailto:hello@MyDescribed.io' },
                { icon:'📞', label:'Phone', value:'+1 (555) 123-4567', href:'tel:+15551234567' },
                { icon:'🕐', label:'Hours', value:'Mon–Fri: 9am–6pm PST' },
              ].map((item,i) => (
                <div key={i} className="info-card card">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    {item.href
                      ? <a href={item.href} className="info-value info-value--link">{item.value}</a>
                      : <span className="info-value" style={{whiteSpace:'pre-line'}}>{item.value}</span>
                    }
                  </div>
                </div>
              ))}
              <div className="response-time card">
                <div className="rt-dot" />
                <div><strong>Average response time</strong><span>We reply within 2 business hours</span></div>
              </div>
            </aside>
 
            <div className="contact-form-wrap">
              {status === 'success' ? (
                <div className="form-success card">
                  <div className="success-icon">✓</div>
                  <h3>Message received!</h3>
                  <p>{serverMsg}</p>
                  <button className="btn-outline" onClick={() => setStatus(null)} style={{marginTop:'1.5rem'}}>Send another message</button>
                </div>
              ) : (
                <form className="contact-form card" onSubmit={handleSubmit} noValidate>
                  <h2>Send us a message</h2>
                  <p className="form-subtitle">Fill out the form and we'll get back to you shortly.</p>
                  <div className="form-row">
                    <div className={`form-group ${errors.name?'has-error':''}`}>
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" placeholder="Jane Doe" value={form.name} onChange={handleChange} />
                      {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>
                    <div className={`form-group ${errors.email?'has-error':''}`}>
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} />
                      {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className={`form-group ${errors.subject?'has-error':''}`}>
                      <label htmlFor="subject">Subject *</label>
                      <input id="subject" name="subject" type="text" placeholder="Project inquiry" value={form.subject} onChange={handleChange} />
                      {errors.subject && <span className="error-msg">{errors.subject}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interest</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service…</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className={`form-group ${errors.message?'has-error':''}`}>
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={6} placeholder="Tell us about your project…" value={form.message} onChange={handleChange} />
                    {errors.message && <span className="error-msg">{errors.message}</span>}
                  </div>
                  {status === 'error' && <div className="form-error-banner">⚠ {serverMsg}</div>}
                  <button type="submit" className="btn-primary submit-btn" disabled={status==='loading'}>
                    {status==='loading' ? <><span className="spinner" /> Sending…</> : <>Send Message →</>}
                  </button>
                  <p className="form-note">We never share your data. Privacy guaranteed.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
 
      <section className="faq-section">
        <div className="container">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Common questions</h2>
          <div className="faq-grid">
            {[
              {q:'How long does a typical project take?', a:"Project timelines vary from 2 weeks for a landing site to 6+ months for complex platforms. We'll give you a clear estimate during discovery."},
              {q:'Do you work with startups?', a:'Absolutely. We work with everyone from pre-seed startups to Fortune 500 companies with flexible engagement models.'},
              {q:"What's your development methodology?", a:'We use Agile/Scrum with 2-week sprints, weekly demos, and daily async updates so you are never in the dark.'},
              {q:'Do you offer ongoing support?', a:'Yes — all projects include a 90-day post-launch support window, with optional retainer plans for ongoing maintenance.'},
            ].map((f,i) => (
              <div key={i} className="faq-item card">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}