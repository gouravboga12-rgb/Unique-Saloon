import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAppointmentClick = () => {
    setCurrentPage('contact');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById('booking-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header class="header">
      <div class="nav-container">
        <div onClick={() => navigateTo('home')} class="logo-wrapper" id="nav-logo" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="/assets/images/logo.png" alt="THE UNIQUE SALON Logo" class="nav-logo-img" />
        </div>
        
        <nav aria-label="Main Navigation">
          <ul class={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <button 
                onClick={() => navigateTo('home')} 
                class={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('about')} 
                class={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('services')} 
                class={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('contact')} 
                class={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              >
                Contact
              </button>
            </li>
            <li class="nav-menu-cta">
              <button 
                onClick={handleBookAppointmentClick}
                class="btn btn-primary" 
                style={{ width: '100%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', padding: '0.8rem 1.5rem', fontSize: '1.05rem' }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5v1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                Book Appointment
              </button>
            </li>
          </ul>
        </nav>
        
        <div class="header-cta">
          <button 
            onClick={handleBookAppointmentClick}
            class="btn btn-primary" 
            id="header-book-btn"
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', border: 'none' }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
              <path d="M3.5 0a.5.5 0 0 1 .5.5v1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            Book Appointment
          </button>
        </div>
        
        {/* Hamburger Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          class="hamburger-toggle" 
          aria-label="Toggle navigation menu" 
          aria-expanded={mobileMenuOpen}
        >
          <span 
            class="hamburger-bar"
            style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 6px)' } : {}}
          ></span>
          <span 
            class="hamburger-bar"
            style={mobileMenuOpen ? { opacity: 0 } : {}}
          ></span>
          <span 
            class="hamburger-bar"
            style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -6px)' } : {}}
          ></span>
        </button>
      </div>
    </header>
  );
}
