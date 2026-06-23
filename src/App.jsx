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
    let observer;

    const setupAnimations = () => {
      const isMobile = window.innerWidth < 768;
      const elements = document.querySelectorAll('[data-aos]');

      if (isMobile) {
        elements.forEach(el => {
          el.removeAttribute('data-aos');
          el.removeAttribute('data-aos-delay');
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.transition = 'none';
        });
        return;
      }

      elements.forEach(el => {
        // Skip if already initialized
        if (el.getAttribute('data-aos-initialized') === 'true') return;

        const aosType = el.getAttribute('data-aos') || 'fade-up';
        let initialTransform = 'translateY(15px)';
        
        if (aosType === 'fade-left') {
          initialTransform = 'translateX(15px)';
        } else if (aosType === 'fade-right') {
          initialTransform = 'translateX(-15px)';
        } else if (aosType === 'fade-down') {
          initialTransform = 'translateY(-15px)';
        } else if (aosType === 'zoom-in') {
          initialTransform = 'scale(0.97)';
        } else if (aosType === 'zoom-out') {
          initialTransform = 'scale(1.03)';
        } else if (aosType === 'fade') {
          initialTransform = 'none';
        }

        el.style.opacity = '0';
        el.style.transform = initialTransform;
        el.style.transition = 'opacity 1.8s cubic-bezier(0.25, 1, 0.5, 1), transform 1.8s cubic-bezier(0.25, 1, 0.5, 1)';
        const delay = el.getAttribute('data-aos-delay') || 0;
        el.style.transitionDelay = `${delay}ms`;
        el.setAttribute('data-aos-initialized', 'true');
      });

      // Use threshold: 0 to ensure large elements don't get stuck hidden
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'none';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: '0px 0px -20px 0px' }
      );

      elements.forEach(el => {
        if (el.style.opacity === '0') {
          observer.observe(el);
        }
      });
    };

    // Setup animations immediately and with a slight delay for lazy/late renders
    setupAnimations();
    const timer = setTimeout(setupAnimations, 150);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
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
