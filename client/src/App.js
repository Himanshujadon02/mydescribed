import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
 
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
 
function AnimatedPage({ children }) {
  const ref = React.useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
      }, 50);
    }
  }, []);
  return <div ref={ref}>{children}</div>;
}
 
function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
        <Route path="/team" element={<AnimatedPage><Team /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
      </Routes>
      <Footer />
    </>
  );
}
 
export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}