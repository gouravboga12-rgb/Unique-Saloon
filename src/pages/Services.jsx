import React, { useEffect } from 'react';

const HAIR_SERVICES = [
  { name: 'Haircuts & Trim', desc: 'Customized styling haircuts tailored to facial structure, including blowdry style setting for men and women.', image: '/assets/images/services/haircut_trim.png' },
  { name: 'Hairstyles & Setting', desc: 'Party curls, braids, elegant buns, blowouts, and iron-straightening styles for special celebrations.', image: '/assets/images/services/hairstyle_setting.png' },
  { name: 'Hair Coloring', desc: 'Premium grey coverage, root touches, and full global coloring with ammonia-free, hair-safe products.', image: '/assets/images/services/hair_coloring.png' },
  { name: 'Fashion Coloring', desc: 'Trendy highlights, Balayage, Ombre, and customized styling tones to match your style personality.', image: '/assets/images/services/fashion_coloring.png' },
  { name: 'Deep Therapy Hair Spa', desc: 'Deep scalp nourishment, anti-dandruff treatments, hair root hydration, massage, and steam therapy.', image: '/assets/images/services/hair_spa.png' },
  { name: 'Hair Smoothening', desc: 'Eliminate frizz and get permanent silky, straight hair using professional salon formulas.', image: '/assets/images/services/hair_smoothening.png' },
  { name: 'Keratin Protein Therapy', desc: 'Advanced protein infusing system to repair damage, restore elasticity, and add maximum gloss and shine.', image: '/assets/images/services/keratin_therapy.png' },
  { name: 'Hair Botox Treatment', desc: 'The absolute premier moisturizing makeover. Smooths hair structure, heals split ends, and adds high-volume gloss.', image: '/assets/images/services/hair_botox.png' },
  { name: 'Blow Dry & Volume', desc: 'Wash, condition, styling blowout, and volume settings for quick, fresh professional styles.', image: '/assets/images/services/blow_dry.png' }
];

const BEAUTY_SERVICES = [
  { name: 'Facials & Cleanups', desc: 'Luxury skincare facials (O3+, Lotus, Herbals) to brighten, cleanse, and rejuvenate tired skin.', image: '/assets/images/services/facial_cleanup.png' },
  { name: 'Hygienic Waxing', desc: 'Full body, legs, or arms waxing using Rica wax or premium honey wax to protect sensitive skin tissues.', image: '/assets/images/services/waxing.png' },
  { name: 'Eyebrow Shaping', desc: 'Micro-precision threading to map out and clean eyebrow arches, matching facial dynamics.', image: '/assets/images/services/eyebrows.png' },
  { name: 'Facial Threading', desc: 'Upper lip, chin, forehead, or full-face organic threading using high-quality antibacterial threads.', image: '/assets/images/services/threading_face.png' },
  { name: 'Soak & Scrub Pedicure', desc: 'Hygienic foot tubs, cuticle grooming, heel scrubbing, herbal massage, and professional polishing.', image: '/assets/images/services/pedicure.png' },
  { name: 'Nail & Hand Manicure', desc: 'Cuticle oil soak, fingernail trimming/shaping, hand massage, and moisturizing polish protection.', image: '/assets/images/services/manicure.png' }
];

const MENS_SERVICES = [
  { name: 'Classic Beard Shaving', desc: 'Smooth gel or foam shaving with single-use sterile blades, steam towels, and antiseptic aftershave care.', image: '/assets/images/services/beard_shave.png' },
  { name: 'Beard Design & Trim', desc: 'Beard detailing, razor cheek lines, neckline trimming, and styling with premium beard oils.', image: '/assets/images/services/beard_trim.png' },
  { name: 'Beard Dyeing & Color', desc: 'Skin-friendly professional coloring to eliminate grey patches, giving a dark natural look.', image: '/assets/images/services/beard_dye.png' }
];

const MAKEUP_SERVICES = [
  { name: 'Bridal Makeover Package', desc: 'Premium HD makeups, advanced hairstyling draping, floral styling, and saree pinning for the bride.', image: '/assets/images/services/bridal_makeup.png' },
  { name: 'Groom Grooming Package', desc: 'Natural face correction, grooming, hair setting, beard contouring, and blemish protection for the groom.', image: '/assets/images/services/groom_makeup.png' }
];

export default function Services({ targetSection, setTargetSection }) {
  useEffect(() => {
    if (targetSection) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (setTargetSection) {
          setTargetSection(null);
        }
      }, 200);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [targetSection, setTargetSection]);

  const getWhatsAppLink = (serviceName) => {
    const text = `Hi, The Unique Salon! I'd like to book an appointment for ${serviceName}.`;
    return `https://wa.me/918500237031?text=${encodeURIComponent(text)}`;
  };

  const renderServiceSection = (title, subtitle, badge, services, sectionId) => {
    return (
      <div id={sectionId} class="services-category-section" data-aos="fade-up">
        <div class="services-category-title-wrapper">
          <h2 class="services-category-title">{title}</h2>
          <span class="feature-check" style={{ fontWeight: '600', color: 'var(--primary-gold)' }}>{badge}</span>
        </div>
        
        <div class="services-grid">
          {services.map((item, idx) => (
            <div key={idx} class="service-item-card" data-aos="fade-up" data-aos-delay={(idx % 3) * 100}>
              <div class="service-item-img-wrapper">
                <img src={item.image} alt={item.name} class="service-item-img" loading="lazy" />
              </div>
              <div class="service-item-body">
                <h3 class="service-item-name">{item.name}</h3>
                <p class="service-item-desc">{item.desc}</p>
                <div class="service-item-footer">
                  <a 
                    href={getWhatsAppLink(item.name)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn-whatsapp" 
                    style={{ width: '100%', padding: '0.6rem 1.5rem', fontSize: '0.88rem' }}
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Page Banner */}
      <section class="page-banner">
        <div class="container-wide">
          <h1 class="page-banner-title">Our Premium Services</h1>
          <div class="page-banner-breadcrumbs">
            <span>Home</span> <span>/</span> Services Menu
          </div>
        </div>
      </section>

      {/* Category Navigator Cards */}
      <section class="section section-bg-soft" id="services-category-nav" style={{ paddingBottom: '2rem' }}>
        <div class="container-wide">
          <div class="section-title-wrapper">
            <span class="section-subtitle">Browse By Category</span>
            <h2 class="section-title">What Are You Looking For?</h2>
          </div>
          <div class="featured-services-grid">
            {/* Card 1: Hair Services */}
            <article class="service-card" data-aos="fade-up" data-aos-delay="100">
              <div class="service-card-img-wrapper">
                <span class="service-card-tag">Hair Care</span>
                <img src="/assets/images/services/hair_smoothening.png" alt="Premium Hair Treatments" class="service-card-img" width="380" height="240" />
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Premium Hair Treatments</h3>
                <p class="service-card-desc">Keratin, Botox, Smoothening, Coloring, Hair Spa, and expert cuts — all under one roof with L'Oreal & Matrix products.</p>
                <div class="service-card-footer" style={{ justifyContent: 'center' }}>
                  <button
                    onClick={() => {
                      const el = document.getElementById('hair-services');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    class="service-card-cta"
                    aria-label="Go to Premium Hair Services"
                  >
                    Explore Category ➔
                  </button>
                </div>
              </div>
            </article>

            {/* Card 2: Bridal & Makeup */}
            <article class="service-card" data-aos="fade-up" data-aos-delay="200">
              <div class="service-card-img-wrapper">
                <span class="service-card-tag">Makeup</span>
                <img src="/assets/images/services/bridal_makeup.png" alt="Bridal & Special Occasions" class="service-card-img" width="380" height="240" />
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Bridal & Special Occasions</h3>
                <p class="service-card-desc">HD Bridal Makeovers, Groom Grooming Packages, and premium special occasion styling for your most important days.</p>
                <div class="service-card-footer" style={{ justifyContent: 'center' }}>
                  <button
                    onClick={() => {
                      const el = document.getElementById('makeup-services');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    class="service-card-cta"
                    aria-label="Go to Special Makeup Packages"
                  >
                    Explore Category ➔
                  </button>
                </div>
              </div>
            </article>

            {/* Card 3: Beauty & Grooming */}
            <article class="service-card" data-aos="fade-up" data-aos-delay="300">
              <div class="service-card-img-wrapper">
                <span class="service-card-tag">Grooming & Beauty</span>
                <img src="/assets/images/services/beard_trim.png" alt="Haircuts, Grooming & Beauty" class="service-card-img" width="380" height="240" />
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Haircuts, Beauty & Grooming</h3>
                <p class="service-card-desc">Precision haircuts, facials, waxing, eyebrow shaping, beard styling, manicure, pedicure, and threading — for the whole family.</p>
                <div class="service-card-footer" style={{ justifyContent: 'center' }}>
                  <button
                    onClick={() => {
                      const el = document.getElementById('beauty-services');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    class="service-card-cta"
                    aria-label="Go to Beauty & Grooming Services"
                  >
                    Explore Category ➔
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Quick jump links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginTop: '2rem' }}>
            {[
              { label: '💇 Hair Services', id: 'hair-services' },
              { label: '💅 Beauty & Skin', id: 'beauty-services' },
              { label: '🧔 Men\'s Grooming', id: 'mens-services' },
              { label: '👰 Bridal Makeup', id: 'makeup-services' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={{
                  padding: '0.5rem 1.2rem',
                  border: '1.5px solid var(--primary-gold)',
                  borderRadius: '50px',
                  background: 'transparent',
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.target.style.background = 'var(--primary-gold)'; e.target.style.color = '#111'; }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-dark)'; }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Full Services Listings */}
      <section class="section" id="services-menu-section">
        <div class="container-wide">
          {renderServiceSection('💇 Premium Hair Services', 'Hair Care', "L'Oreal & Matrix Salon Partner", HAIR_SERVICES, 'hair-services')}
          <div style={{ margin: '3.5rem 0' }}></div>
          {renderServiceSection('💅 Skin, Beauty & Grooming Services', 'Beauty & Skin', 'Sanitized Tools Only', BEAUTY_SERVICES, 'beauty-services')}
          <div style={{ margin: '3.5rem 0' }}></div>
          {renderServiceSection('🧔 Men\'s Grooming Services', 'Grooming', 'Clinical Shave Hygiene', MENS_SERVICES, 'mens-services')}
          <div style={{ margin: '3.5rem 0' }}></div>
          {renderServiceSection('👰 Special Makeup Packages', 'Cosmetology & Makeovers', 'HD & Airbrush Makeup', MAKEUP_SERVICES, 'makeup-services')}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section class="cta-banner" id="final-cta-section" data-aos="fade-up">
        <div class="cta-banner-content">
          <h2>Ready for Your Style Transformation?</h2>
          <p>Book your slot now on WhatsApp or call our support team to consult our specialists.</p>
          <div class="cta-banner-actions">
            <a href="https://wa.me/918500237031?text=Hi%2C%20The%20Unique%20Salon.%20I'd%20like%20to%20book%20an%20appointment!" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="footer-whatsapp-btn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.927a7.86 7.86 0 0 0-2.327-5.596zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.202-.594-1.392-.658-.189-.069-.327-.103-.465.101-.138.203-.534.659-.653.793-.12.134-.239.151-.44.051-.2-.1-0.849-.312-1.616-.997-.598-.533-.999-1.193-1.117-1.396-.118-.2-.013-.309.088-.409.09-.09.201-.234.301-.35.1-.117.133-.198.2-.33.067-.133.033-.25-.017-.35-.05-.101-.466-1.122-.638-1.536-.168-.405-.333-.35-.465-.357-.12-.007-.257-.007-.393-.007-.137 0-.36.051-.549.258-.19.208-.724.708-.724 1.728 0 1.02.742 2.008.845 2.146.103.138 1.46 2.23 3.537 3.125.495.213.88.34 1.18.435.498.158.951.135 1.309.083.399-.058 1.202-.492 1.372-1.003.17-.512.17-.951.12-1.003-.05-.052-.189-.101-.392-.202z"/>
              </svg>
              Book via WhatsApp
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
