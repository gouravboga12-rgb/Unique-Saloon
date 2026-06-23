import React from 'react';

export default function Footer({ setCurrentPage, navigateToSection }) {
  const navigateTo = (page, sectionId = null) => {
    if (navigateToSection) {
      navigateToSection(page, sectionId);
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer class="footer">
      <div class="footer-grid">
        {/* Logo and Description */}
        <div class="footer-logo-panel">
          <div onClick={() => navigateTo('home')} class="logo-wrapper" style={{ marginBottom: '1.25rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
            <img src="/assets/images/logo.png" alt="THE UNIQUE SALON Logo" class="footer-logo-img" />
          </div>
          <p class="footer-about-text">THE UNIQUE SALON is Hyderabad's premier family grooming and beauty studio. For over 6 years, we have provided high-end haircuts, luxury facials, hair coloring treatments, and HD bridal makeovers.</p>
          <div class="footer-social-links">
            <a href="#" class="footer-social-btn" aria-label="Facebook Page"><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></a>
            <a href="#" class="footer-social-btn" aria-label="Instagram Profile"><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.917 3.917 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0h.002zm-.008 1.442h.018c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.277 1.159a3.536 3.536 0 1 0 0 7.07 3.536 3.536 0 0 0 0-7.07zm0 1.442a2.095 2.095 0 1 1 0 4.19 2.095 2.095 0 0 1 0-4.19z"/></svg></a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-links">
            <li><button onClick={() => navigateTo('home')} class="footer-link"><svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>Home</button></li>
            <li><button onClick={() => navigateTo('about')} class="footer-link"><svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>About Us</button></li>
            <li><button onClick={() => navigateTo('services')} class="footer-link"><svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>Services Menu</button></li>
            <li><button onClick={() => navigateTo('contact')} class="footer-link"><svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>Contact Us</button></li>
          </ul>
        </div>
        
        {/* Key Services */}
        <div>
          <h4 class="footer-title">Salon Services</h4>
          <ul class="footer-links">
            <li><button onClick={() => navigateTo('services', 'hair-services')} class="footer-link">Hair Botox Treatment</button></li>
            <li><button onClick={() => navigateTo('services', 'hair-services')} class="footer-link">Keratin Treatment</button></li>
            <li><button onClick={() => navigateTo('services', 'makeup-services')} class="footer-link">Bridal / Groom Makeup</button></li>
            <li><button onClick={() => navigateTo('services', 'beauty-services')} class="footer-link">Skin Facials & Cleanups</button></li>
            <li><button onClick={() => navigateTo('services', 'mens-services')} class="footer-link">Men's Styling & Beard</button></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h4 class="footer-title">Get In Touch</h4>
          <div class="footer-contact-info">
            <div class="footer-contact-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginTop: '4px' }}>
                <path d="M12.166 8.94c-.524-1.062-1.234-1.97-1.922-2.706C9.564 5.5 9 5 9 5c-.143-.103-.3-.103-.443 0 0 0-.564.5-1.244 1.234-.688.736-1.398 1.644-1.922 2.706C4.88 10.96 4.5 12.3 4.5 13c0 2 1.5 3 3.5 3s3.5-1 3.5-3c0-.7-.38-2.04-.88-4.06zM8 14.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                <path d="M8 0C3.58 0 0 3.58 0 8a7.975 7.975 0 0 0 1.942 5.234A3.985 3.985 0 0 1 5 10.5h6a3.985 3.985 0 0 1 3.058 2.734A7.975 7.975 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <span>Plot No. 5, Laxmi Narasimhapuram Colony, Hastinapuram, Beside Sangeeth Grand Hotel, Hyderabad - 500079</span>
            </div>
            <div class="footer-contact-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginTop: '4px' }}>
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
              </svg>
              <div>
                <a href="tel:9014540296">9014540296</a><br />
                <a href="tel:8500237031">8500237031</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginTop: '4px' }}>
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 THE UNIQUE SALON. All Rights Reserved. Designed for High Conversions.</p>
        <div class="footer-bottom-links">
          <span onClick={() => navigateTo('contact')}>Locate Us</span>
          <a href="https://wa.me/919014540296" target="_blank" rel="noopener noreferrer">Bookings Help</a>
        </div>
      </div>
    </footer>
  );
}
