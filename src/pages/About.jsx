import React, { useRef, useEffect } from 'react';

// Reusable count-up hook
function useCountUp(target, suffix = '', duration = 1800) {
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const isK = suffix.includes('k');
        const numTarget = isK ? parseInt(target) * 1000 : parseInt(target);
        const startTime = performance.now();

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * numTarget);
          const display = isK
            ? (current >= 1000 ? Math.floor(current / 1000) + 'k' : current)
            : current;
          el.textContent = display + '+';
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return ref;
}

export default function About({ setCurrentPage }) {
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const yearsRef = useCountUp('6', '+', 1200);
  const clientsRef = useCountUp('10', 'k+', 1800);
  const stylistsRef = useCountUp('12', '+', 1500);

  return (
    <>
      {/* Page Banner */}
      <section class="page-banner">
        <div class="container-wide">
          <h1 class="page-banner-title">Our Story</h1>
          <div class="page-banner-breadcrumbs">
            <span onClick={() => navigateTo('home')}>Home</span> <span>/</span> About Us
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section class="section" id="story-section">
        <div class="container-wide">
          <div class="story-grid">
            <div class="story-content" data-aos="fade-right">
              <span class="section-subtitle">Since 2020</span>
              <h2 class="section-title" style={{ display: 'block', width: '100%', textAlign: 'left', marginBottom: '2rem' }}>The Journey of THE UNIQUE SALON</h2>
              <p>Founded on a passion for excellence in hair care and cosmetology, THE UNIQUE SALON has evolved into the absolute favorite family groomers in Hastinapuram, Hyderabad. Over our six-plus years of operations, we have maintained a philosophy that combines premium luxury treatments with accessible, budget-conscious prices.</p>
              <p>Our journey began with a single mission: to create a comfortable, clinical-grade hygienic space where men, women, and families could receive tailored styles without compromise. Today, our salon boasts a community of thousands of regular customers, thanks to our expert stylists and premium cosmetic products.</p>

              <div class="story-highlights">
                <div class="story-highlight-card">
                  <span class="story-highlight-num" ref={yearsRef}>6+</span>
                  <span class="story-highlight-label">Years Open</span>
                </div>
                <div class="story-highlight-card">
                  <span class="story-highlight-num" ref={clientsRef}>10k+</span>
                  <span class="story-highlight-label">Happy Clients</span>
                </div>
                <div class="story-highlight-card">
                  <span class="story-highlight-num" ref={stylistsRef}>12+</span>
                  <span class="story-highlight-label">Expert Stylists</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <img src="/assets/images/salon_interior.png" alt="THE UNIQUE SALON interior layout" class="about-preview-img" style={{ width: '100%' }} width="550" height="400" />
            </div>
          </div>
        </div>
      </section>


      {/* Founder Message Section */}
      <section class="section section-bg-soft" id="founder-section">
        <div class="container-wide">
          <div class="founder-box" data-aos="fade-up">
            <div class="founder-img-wrapper">
              <img src="/assets/images/hair_service.png" alt="Founder & Lead Stylist Sandeep Kumar" width="300" height="350" style={{ objectFit: 'cover', width: '100%', height: '350px' }} />
            </div>
            <div class="founder-content">
              <span class="section-subtitle" style={{ letterSpacing: '2px' }}>Leadership Message</span>
              <h3 class="founder-quote">"True styling is not about copying a trend. It is about understanding your unique features, lifestyle, and hair health to amplify your inner confidence."</h3>
              <p class="founder-text">As the founder of THE UNIQUE SALON, my commitment has always been focused on two primary pillars: uncompromising sanitation hygiene and professional skill specialization. The beauty industry is constantly changing, but our focus on serving you with warm hospitality, expert advice, and premium cosmetics remains constant.</p>
              <p class="founder-text">Whether you visit us for a quick haircut or a premium hair Botox session, we ensure a comfortable, relaxing, and satisfying grooming experience.</p>
              <h4 class="founder-signature">Sandeep Kumar</h4>
              <span class="founder-title">Founder & Lead Stylist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section class="section" id="vision-mission-section">
        <div class="container-wide">
          <div class="vision-mission-grid">
            {/* Vision Card */}
            <div class="vision-mission-card" data-aos="fade-right">
              <div class="vision-mission-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To become Hyderabad's most trusted, preferred, and referred family hair and beauty destination. We aim to elevate industry standards by consistently introducing modern techniques, clinical hygiene practices, and absolute transparency in product quality.</p>
            </div>
            
            {/* Mission Card */}
            <div class="vision-mission-card" data-aos="fade-left">
              <div class="vision-mission-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-4A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To provide high-quality, professional, and accessible hair grooming and cosmetology solutions. We achieve this by empowering our trained stylists, using premium global brands (like L'Oreal, Matrix, and luxury skin solutions), and prioritizing customer styling consultations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section class="section section-bg-dark" id="values-section">
        <div class="container-wide">
          <div class="section-title-wrapper">
            <span class="section-subtitle">Our Core Pillars</span>
            <h2 class="section-title">Values That Define Us</h2>
          </div>
          
          <div class="values-grid">
            <div class="value-card" data-aos="fade-up" data-aos-delay="100">
              <span class="value-num">01</span>
              <h3 class="value-name">Professionalism</h3>
              <p class="value-desc">Punctual, certified specialists focused on precise cuts, styling, and makeup techniques.</p>
            </div>
            <div class="value-card" data-aos="fade-up" data-aos-delay="200">
              <span class="value-num">02</span>
              <h3 class="value-name">Premium Quality</h3>
              <p class="value-desc">We use global cosmetic brands, avoiding cheap chemicals to ensure hair and skin safety.</p>
            </div>
            <div class="value-card" data-aos="fade-up" data-aos-delay="300">
              <span class="value-num">03</span>
              <h3 class="value-name">Mutual Trust</h3>
              <p class="value-desc">Clear consultation and upfront pricing. No hidden costs or unneeded services recommended.</p>
            </div>
            <div class="value-card" data-aos="fade-up" data-aos-delay="400">
              <span class="value-num">04</span>
              <h3 class="value-name">Client Satisfaction</h3>
              <p class="value-desc">We customize style cuts to suit facial structures and customer preferences perfectly.</p>
            </div>
            <div class="value-card" data-aos="fade-up" data-aos-delay="500">
              <span class="value-num">05</span>
              <h3 class="value-name">Cosmetic Innovation</h3>
              <p class="value-desc">Constant updates on global styling trends, Botox treatments, and fashion colors.</p>
            </div>
            <div class="value-card" data-aos="fade-up" data-aos-delay="600">
              <span class="value-num">06</span>
              <h3 class="value-name">Strict Hygiene</h3>
              <p class="value-desc">Fresh aprons, disposable neck strips, sanitized scissors, and clean styling chairs for all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Booking Banner */}
      <section class="cta-banner" id="final-cta-section" data-aos="fade-up">
        <div class="cta-banner-content">
          <h2>Want a Custom Beauty Consultation?</h2>
          <p>Chat with our styling experts directly on WhatsApp or schedule your visit today.</p>
          <div class="cta-banner-actions">
            <a href="https://wa.me/918500237031?text=Hi%2C%20The%20Unique%20Salon.%20I'd%20like%20to%20get%20a%20beauty%20consultation!" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="footer-whatsapp-btn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.927a7.86 7.86 0 0 0-2.327-5.596zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.202-.594-1.392-.658-.189-.069-.327-.103-.465.101-.138.203-.534.659-.653.793-.12.134-.239.151-.44.051-.2-.1-0.849-.312-1.616-.997-.598-.533-.999-1.193-1.117-1.396-.118-.2-.013-.309.088-.409.09-.09.201-.234.301-.35.1-.117.133-.198.2-.33.067-.133.033-.25-.017-.35-.05-.101-.466-1.122-.638-1.536-.168-.405-.333-.35-.465-.357-.12-.007-.257-.007-.393-.007-.137 0-.36.051-.549.258-.19.208-.724.708-.724 1.728 0 1.02.742 2.008.845 2.146.103.138 1.46 2.23 3.537 3.125.495.213.88.34 1.18.435.498.158.951.135 1.309.083.399-.058 1.202-.492 1.372-1.003.17-.512.17-.951.12-1.003-.05-.052-.189-.101-.392-.202z"/>
            </svg>
            Consult on WhatsApp
          </a>
          <a href="tel:9014540296" class="btn btn-secondary" id="footer-call-btn">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.884.511z"/>
            </svg>
            Call 9014540296
          </a>
        </div>
      </div>
    </section>
  </>
);
}
