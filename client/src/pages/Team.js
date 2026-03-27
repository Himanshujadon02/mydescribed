import React, { useState } from 'react';
import './Team.css';
 
const leadership = [
  { name:'Aria Chen', role:'CEO & Co-Founder', bio:'Former Google engineering lead with 15+ years building scalable systems. Passionate about creating technology that matters.', skills:['Strategy','Cloud Architecture','Team Building'], initials:'AC', color:'#6c63ff' },
  { name:'Marcus Webb', role:'CTO & Co-Founder', bio:'Ex-Meta infrastructure engineer. Obsessed with distributed systems, performance, and elegant code. Writes Rust on weekends.', skills:['Distributed Systems','Rust','DevOps'], initials:'MW', color:'#00d4ff' },
  { name:'Sofia Reyes', role:'CPO – Product', bio:'Design-minded product leader who bridges user needs and technical reality. Previously at Airbnb and Figma.', skills:['Product Strategy','UX Research','Design Systems'], initials:'SR', color:'#a855f7' },
];
 
const team = [
  { name:'James Okafor', role:'Lead Backend Engineer', initials:'JO', color:'#f43f5e', dept:'Engineering' },
  { name:'Priya Nair', role:'Senior Frontend Engineer', initials:'PN', color:'#f97316', dept:'Engineering' },
  { name:'Lena Hoffmann', role:'Cloud Architect', initials:'LH', color:'#22c55e', dept:'Infrastructure' },
  { name:'David Kim', role:'ML Engineer', initials:'DK', color:'#6c63ff', dept:'AI' },
  { name:'Chloe Martin', role:'UX Designer', initials:'CM', color:'#00d4ff', dept:'Design' },
  { name:'Raj Patel', role:'Security Engineer', initials:'RP', color:'#a855f7', dept:'Security' },
  { name:'Yuki Tanaka', role:'Mobile Developer', initials:'YT', color:'#f43f5e', dept:'Engineering' },
  { name:'Ana Torres', role:'DevOps Engineer', initials:'AT', color:'#f97316', dept:'Infrastructure' },
];
 
const depts = ['All','Engineering','Infrastructure','AI','Design','Security'];
 
export default function Team() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? team : team.filter(m => m.dept === filter);
 
  return (
    <main className="team-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="section-tag">The People</span>
          <h1 className="section-title" style={{fontSize:'clamp(2.5rem,5vw,4rem)'}}>Exceptional humans<br/><span className="gradient-text">doing exceptional work</span></h1>
          <p className="section-subtitle" style={{maxWidth:520}}>Our team of 40+ engineers, designers, and strategists — united by a passion for craft.</p>
        </div>
      </section>
 
      <section className="leadership">
        <div className="container">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">The founding team</h2>
          <div className="leadership-grid">
            {leadership.map((m,i) => (
              <div key={i} className="leader-card card" style={{'--member-color':m.color}}>
                <div className="leader-avatar" style={{background:`linear-gradient(135deg,${m.color}22,${m.color}44)`,border:`1px solid ${m.color}44`}}>
                  <span style={{color:m.color}}>{m.initials}</span>
                  <div className="avatar-ring" style={{borderColor:m.color}} />
                </div>
                <div className="leader-info">
                  <h3>{m.name}</h3>
                  <span className="leader-role" style={{color:m.color}}>{m.role}</span>
                  <p>{m.bio}</p>
                  <div className="leader-skills">
                    {m.skills.map(s => <span key={s} className="skill-tag" style={{borderColor:`${m.color}44`,color:m.color,background:`${m.color}11`}}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="full-team">
        <div className="container">
          <span className="section-tag">Team Members</span>
          <h2 className="section-title">Meet everyone</h2>
          <div className="dept-filters">
            {depts.map(d => <button key={d} className={`dept-btn ${filter===d?'active':''}`} onClick={() => setFilter(d)}>{d}</button>)}
          </div>
          <div className="team-grid">
            {filtered.map((m,i) => (
              <div key={i} className="member-card card" style={{'--member-color':m.color}}>
                <div className="member-avatar" style={{background:`linear-gradient(135deg,${m.color}22,${m.color}44)`,border:`1px solid ${m.color}33`}}>
                  <span style={{color:m.color}}>{m.initials}</span>
                </div>
                <h4>{m.name}</h4>
                <span className="member-role">{m.role}</span>
                <span className="member-dept" style={{color:m.color,background:`${m.color}11`,borderColor:`${m.color}33`}}>{m.dept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="join-us">
        <div className="container">
          <div className="join-card card">
            <div className="join-icon">🚀</div>
            <h2 className="section-title">Want to join<br/><span className="gradient-text">the team?</span></h2>
            <p className="section-subtitle">We're always looking for talented, curious people who want to build things that matter.</p>
            <a href="#" className="btn-primary" style={{marginTop:'1.5rem'}}>View Open Positions</a>
          </div>
        </div>
      </section>
    </main>
  );
}