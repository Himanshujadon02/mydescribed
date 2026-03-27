import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
 
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L26 8.5V19.5L14 26L2 19.5V8.5L14 2Z" stroke="url(#flg)" strokeWidth="1.5" fill="rgba(108,99,255,0.1)"/>
                <path d="M14 8L20 11.5V18.5L14 22L8 18.5V11.5L14 8Z" fill="url(#flg2)"/>
                <defs>
                  <linearGradient id="flg" x1="2" y1="2" x2="26" y2="26"><stop stopColor="#6c63ff"/><stop offset="1" stopColor="#00d4ff"/></linearGradient>
                  <linearGradient id="flg2" x1="8" y1="8" x2="20" y2="22"><stop stopColor="#6c63ff"/><stop offset="1" stopColor="#00d4ff"/></linearGradient>
                </defs>
              </svg>
              <span>My<strong>Described</strong></span>
            </Link>
            <p>Engineering the future, one pixel and packet at a time.</p>
          </div>
          <div className="footer__nav">
            <div className="footer__col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Cloud Solutions</a></li>
                <li><a href="#">AI &amp; ML</a></li>
                <li><a href="#">Cybersecurity</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:hello@MyDescribed.io">hello@MyDescribed.io</a></li>
                <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
                <li><span>42 Innovation Drive, SF</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {year} MyDescribed Technologies. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}