import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyCTA from './components/MobileStickyCTA';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [targetSection, setTargetSection] = useState(null);

  const navigateToSection = (page, sectionId = null) => {
    setTargetSection(sectionId);
    setCurrentPage(page);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      disable: function() {
        // Disable AOS on small mobile screens to prevent elements staying hidden
        return window.innerWidth < 768;
      }
    });
  }, []);

  useEffect(() => {
    // Wait slightly for DOM to update after state change
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 50);
    return () => clearTimeout(timer);
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
