import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyCTA from './components/MobileStickyCTA';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [targetSection, setTargetSection] = useState(null);

  const navigateToSection = (page, sectionId = null) => {
    setTargetSection(sectionId);
    setCurrentPage(page);
  };

  // Lightweight scroll animation — replaces AOS entirely
  useEffect(() => {
    // On mobile, skip animations — make everything visible immediately
    const isMobile = window.innerWidth < 768;
    const elements = document.querySelectorAll('[data-aos]');

    if (isMobile) {
      // Just remove data-aos so nothing stays hidden
      elements.forEach(el => {
        el.removeAttribute('data-aos');
        el.removeAttribute('data-aos-delay');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
      });
      return;
    }

    // Desktop: fade-in with IntersectionObserver
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      const delay = el.getAttribute('data-aos-delay') || 0;
      el.style.transitionDelay = `${delay}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} navigateToSection={navigateToSection} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services targetSection={targetSection} setTargetSection={setTargetSection} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} navigateToSection={navigateToSection} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} navigateToSection={navigateToSection} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} navigateToSection={navigateToSection} />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </>
  );
}
