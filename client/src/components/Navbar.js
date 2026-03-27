import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  useEffect(() => { setMenuOpen(false); }, [location]);
 
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ];
 
  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2L26 8.5V19.5L14 26L2 19.5V8.5L14 2Z" stroke="url(#lg)" strokeWidth="1.5" fill="rgba(108,99,255,0.1)"/>
            <path d="M14 8L20 11.5V18.5L14 22L8 18.5V11.5L14 8Z" fill="url(#lg2)"/>
            <defs>
              <linearGradient id="lg" x1="2" y1="2" x2="26" y2="26"><stop stopColor="#6c63ff"/><stop offset="1" stopColor="#00d4ff"/></linearGradient>
              <linearGradient id="lg2" x1="8" y1="8" x2="20" y2="22"><stop stopColor="#6c63ff"/><stop offset="1" stopColor="#00d4ff"/></linearGradient>
            </defs>
          </svg>
          <span className="logo-text">My<strong>Described</strong></span>
        </Link>
 
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="navbar__cta-mobile"><Link to="/contact" className="btn-primary">Get Started</Link></li>
        </ul>
 
        <Link to="/contact" className="btn-primary navbar__cta-desktop">Get Started</Link>
        <button className={`navbar__burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
}