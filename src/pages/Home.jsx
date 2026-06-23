import React, { useState, useEffect, useRef } from 'react';
import Lightbox from '../components/Lightbox';

// ------------------------------------
// Standalone Home Contact Section
// ------------------------------------
const HOME_SERVICES_LIST = [
  'Haircuts & Trim', 'Hairstyles & Setting', 'Hair Coloring', 'Fashion Coloring',
  'Deep Therapy Hair Spa', 'Hair Smoothening', 'Keratin Protein Therapy',
  'Hair Botox Treatment', 'Blow Dry & Volume', 'Facials & Cleanups',
  'Hygienic Waxing', 'Eyebrow Shaping', 'Facial Threading',
  'Soak & Scrub Pedicure', 'Nail & Hand Manicure', 'Classic Beard Shaving',
  'Beard Design & Trim', 'Beard Dyeing & Color', 'Bridal Makeover Package',
  'Groom Grooming Package', 'Other / Custom Consultation'
];

function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', service: HOME_SERVICES_LIST[0],
    date: '', time: '', notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, date, time, notes } = formData;
    let message = `*APPOINTMENT BOOKING REQUEST*\n`;
    message += `--------------------------------------\n`;
    message += `👤 *Name:* ${name}\n`;
    message += `📞 *Phone:* ${phone}\n`;
    message += `💆 *Service:* ${service}\n`;
    message += `📅 *Preferred Date:* ${date}\n`;
    message += `🕒 *Preferred Time:* ${time}\n`;
    if (notes.trim()) message += `📝 *Notes:* ${notes}\n`;
    message += `--------------------------------------\nSent from THE UNIQUE SALON website.`;
    window.open(`https://wa.me/918500237031?text=${encodeURIComponent(message)}`, '_blank');
    setFormData({ name: '', phone: '', service: HOME_SERVICES_LIST[0], date: '', time: '', notes: '' });
  };

  return (
    <>
      {/* Contact Info + Booking Form */}
      <section class="section" id="home-contact-section">
        <div class="container-wide">
          <div class="section-title-wrapper">
            <span class="section-subtitle">Book An Appointment</span>
            <h2 class="section-title">Get In Touch With Us</h2>
          </div>
          <div class="contact-layout-grid">
            {/* Info Panel */}
            <div class="contact-info-panel">
              <span class="section-subtitle">Find Us</span>
              <h3 class="section-title" style={{ display: 'block', textAlign: 'left', margin: '0 0 1.5rem' }}>We Welcome You</h3>
              <div class="contact-info-card">
                <div class="contact-info-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div class="contact-info-content">
                  <h4>Salon Address</h4>
                  <p>Plot No. 5, Laxmi Narasimhapuram Colony,</p>
                  <p>Nagarjuna Sagar Road, Hastinapuram,</p>
                  <p>Beside Sangeeth Grand Hotel, Hyderabad - 500079</p>
                </div>
              </div>
              <div class="contact-info-card">
                <div class="contact-info-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.884.511z"/>
                  </svg>
                </div>
                <div class="contact-info-content">
                  <h4>Call Bookings</h4>
                  <p>Phone: <a href="tel:9014540296">9014540296</a></p>
                  <p>Alternate: <a href="tel:8500237031">8500237031</a></p>
                  <p>WhatsApp: <a href="https://wa.me/918500237031" target="_blank" rel="noopener noreferrer">8500237031</a></p>
                </div>
              </div>
              <div class="contact-info-card">
                <div class="contact-info-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <div class="contact-info-content" style={{ width: '100%' }}>
                  <h4>Business Hours</h4>
                  <div class="contact-hours-list">
                    <div class="contact-hours-row">
                      <span class="days">Monday - Friday</span>
                      <span class="time">9:00 AM - 9:00 PM</span>
                    </div>
                    <div class="contact-hours-row">
                      <span class="days">Saturday - Sunday</span>
                      <span class="time">9:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div class="booking-form-wrapper" id="home-booking-form">
              <h3 class="booking-form-title">Book An Appointment</h3>
              <p class="booking-form-subtitle">Fill in your preferred slots. We will redirect you to WhatsApp to confirm.</p>
              <form onSubmit={handleSubmit}>
                <div class="form-group-row">
                  <div class="form-group">
                    <label htmlFor="hc-name">Your Name *</label>
                    <input type="text" id="hc-name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" class="form-control" required />
                  </div>
                  <div class="form-group">
                    <label htmlFor="hc-phone">Phone Number *</label>
                    <input type="tel" id="hc-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter mobile number" class="form-control" required />
                  </div>
                </div>
                <div class="form-group">
                  <label htmlFor="hc-service">Select Styling Service *</label>
                  <select id="hc-service" name="service" value={formData.service} onChange={handleChange} class="form-control" required>
                    {HOME_SERVICES_LIST.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>
                <div class="form-group-row">
                  <div class="form-group">
                    <label htmlFor="hc-date">Preferred Date *</label>
                    <input type="date" id="hc-date" name="date" value={formData.date} onChange={handleChange} class="form-control" required />
                  </div>
                  <div class="form-group">
                    <label htmlFor="hc-time">Preferred Time *</label>
                    <input type="time" id="hc-time" name="time" value={formData.time} onChange={handleChange} class="form-control" required />
                  </div>
                </div>
                <div class="form-group">
                  <label htmlFor="hc-notes">Special Request (Optional)</label>
                  <textarea id="hc-notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Hair length, coloring history, skin type..." class="form-control"></textarea>
                </div>
                <button type="submit" class="btn btn-whatsapp" style={{ width: '100%' }}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.927a7.86 7.86 0 0 0-2.327-5.596zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.202-.594-1.392-.658-.189-.069-.327-.103-.465.101-.138.203-.534.659-.653.793-.12.134-.239.151-.44.051-.2-.1-0.849-.312-1.616-.997-.598-.533-.999-1.193-1.117-1.396-.118-.2-.013-.309.088-.409.09-.09.201-.234.301-.35.1-.117.133-.198.2-.33.067-.133.033-.25-.017-.35-.05-.101-.466-1.122-.638-1.536-.168-.405-.333-.35-.465-.357-.12-.007-.257-.007-.393-.007-.137 0-.36.051-.549.258-.19.208-.724.708-.724 1.728 0 1.02.742 2.008.845 2.146.103.138 1.46 2.23 3.537 3.125.495.213.88.34 1.18.435.498.158.951.135 1.309.083.399-.058 1.202-.492 1.372-1.003.17-.512.17-.951.12-1.003-.05-.052-.189-.101-.392-.202z"/>
                  </svg>
                  Book Appointment via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section class="section section-bg-soft" style={{ paddingBottom: '3.5rem' }}>
        <div class="container-wide">
          <div class="section-title-wrapper" style={{ marginBottom: '2.5rem' }}>
            <span class="section-subtitle">Find Us On Map</span>
            <h3 class="section-title">Visit Our Family Salon</h3>
          </div>
          <div class="contact-map-wrapper">
            <iframe
              title="Google Map Location for THE UNIQUE SALON - Home"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8093155799786!2d78.55243169999999!3d17.348821999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b47e5b38ed3%3A0xe54dcf9cbe498967!2sHastinapuram%2C%20Hyderabad%2C%20Telangana%20500079!5e0!3m2!1sen!2sin!4v1719142000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

// ------------------------------------

const GALLERY_IMAGES = [
  { id: 1, src: '/assets/images/hair_service.png', alt: 'Fashion Hair Coloring Makeover', title: 'Fashion Hair Coloring', category: 'hair', categoryLabel: 'Hair Styling' },
  { id: 2, src: '/assets/images/salon_interior.png', alt: 'Premium Salon Interior Vibe', title: 'Luxurious Salon Layout', category: 'interior', categoryLabel: 'Salon Ambience' },
  { id: 3, src: '/assets/images/beauty_service.png', alt: 'Bridal Makeup Glow', title: 'Bridal Glow Makeover', category: 'makeup', categoryLabel: 'Groom & Bridal Makeup' },
  { id: 4, src: '/assets/images/hero_bg.png', alt: 'Modern Hair Styling Design', title: 'Chic Women Styling', category: 'hair', categoryLabel: 'Hair Styling' },
  { id: 5, src: '/assets/images/beauty_service.png', alt: 'Premium Facial Skincare Session', title: 'Premium Facial Therapy', category: 'beauty', categoryLabel: 'Beauty & Facials' },
  { id: 6, src: '/assets/images/hair_service.png', alt: 'Groom Beard Styling & Face Care', title: 'Groom Styling Package', category: 'makeup', categoryLabel: 'Groom & Bridal Makeup' },
  { id: 7, src: '/assets/images/hero_bg.png', alt: 'Stylist Stations Mirror Layout', title: 'Gold Accented Mirrors', category: 'interior', categoryLabel: 'Salon Ambience' },
  { id: 8, src: '/assets/images/salon_interior.png', alt: 'Smooth hair texture treatment result', title: 'Keratin Smoothening', category: 'hair', categoryLabel: 'Hair Styling' }
];

const TESTIMONIALS = [
  {
    id: 1,
    stars: '★★★★★',
    text: '"Absolutely the best salon experience in Hyderabad! The staff was incredibly professional and maintained extreme hygiene. My Keratin hair treatment turned out perfect. Highly recommend their services!"',
    author: 'Priya R.',
    subtitle: 'Hair Treatment Client'
  },
  {
    id: 2,
    stars: '★★★★★',
    text: '"The stylists here are absolute experts. Got my beard styled and hair colored. It was done with premium products and great attention to detail. Excellent value for money. Very clean environment!"',
    author: 'Rahul K.',
    subtitle: 'Grooming Client'
  },
  {
    id: 3,
    stars: '★★★★★',
    text: '"Did my bridal makeup here and I couldn\'t be happier! It was natural, glowing, and stayed all day. They truly listen to what you want. A trusted salon for the whole family."',
    author: 'Ananya M.',
    subtitle: 'Bridal Makeup Client'
  }
];

export default function Home({ setCurrentPage, navigateToSection }) {
  // Gallery states
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Testimonial slider states
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderInterval = useRef(null);
  const startTouchX = useRef(0);

  // Filter gallery items
  const filteredGallery = GALLERY_IMAGES.filter(img => 
    galleryFilter === 'all' || img.category === galleryFilter
  );

  const openLightboxAt = (imageItem) => {
    const idx = filteredGallery.findIndex(img => img.id === imageItem.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  // Auto-scrolling Testimonials effect
  useEffect(() => {
    startAutoSlider();
    return () => stopAutoSlider();
  }, [activeSlide]);

  const startAutoSlider = () => {
    stopAutoSlider();
    sliderInterval.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  const stopAutoSlider = () => {
    if (sliderInterval.current) clearInterval(sliderInterval.current);
  };

  const handleDotClick = (idx) => {
    setActiveSlide(idx);
    startAutoSlider();
  };

  // Slider swipe hooks
  const handleTouchStart = (e) => {
    startTouchX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startTouchX.current - endX;
    
    if (diff > 50) {
      // Swipe left -> next
      setActiveSlide(prev => (prev + 1) % TESTIMONIALS.length);
    } else if (diff < -50) {
      // Swipe right -> prev
      setActiveSlide(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
    startAutoSlider();
  };

  const navigateTo = (page, sectionId = null) => {
    if (navigateToSection) {
      navigateToSection(page, sectionId);
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section class="hero" id="hero-section">
        <div class="hero-content" data-aos="fade-up">
          <span class="hero-subtitle">Premium Hair & Beauty Grooming</span>
          <h1 class="hero-title">Transform Your Style with Professional Hair & Beauty Experts</h1>
          <p class="hero-text">6+ Years of Excellence in Hair, Beauty, Grooming & Makeup Services in Hyderabad. Affordable luxury tailored for families, brides, and grooming enthusiasts.</p>
          <div class="hero-actions">
            <a href="https://wa.me/918500237031?text=Hi%2C%20The%20Unique%20Salon.%20I'd%20like%20to%20book%20an%20appointment!" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="hero-whatsapp-btn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.927a7.86 7.86 0 0 0-2.327-5.596zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.202-.594-1.392-.658-.189-.069-.327-.103-.465.101-.138.203-.534.659-.653.793-.12.134-.239.151-.44.051-.2-.1-0.849-.312-1.616-.997-.598-.533-.999-1.193-1.117-1.396-.118-.2-.013-.309.088-.409.09-.09.201-.234.301-.35.1-.117.133-.198.2-.33.067-.133.033-.25-.017-.35-.05-.101-.466-1.122-.638-1.536-.168-.405-.333-.35-.465-.357-.12-.007-.257-.007-.393-.007-.137 0-.36.051-.549.258-.19.208-.724.708-.724 1.728 0 1.02.742 2.008.845 2.146.103.138 1.46 2.23 3.537 3.125.495.213.88.34 1.18.435.498.158.951.135 1.309.083.399-.058 1.202-.492 1.372-1.003.17-.512.17-.951.12-1.003-.05-.052-.189-.101-.392-.202z"/>
              </svg>
              Book Now
            </a>
            <button 
              onClick={() => navigateTo('services')} 
              class="btn" 
              id="hero-services-btn" 
              style={{ 
                background: 'transparent', 
                cursor: 'pointer', 
                color: '#ffffff',
                border: '2px solid #D4AF37',
                fontWeight: '600',
                letterSpacing: '0.04em'
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section class="section" id="about-preview-section">
        <div class="container-wide">
          <div class="about-preview-grid">
            <div class="about-preview-img-wrapper" data-aos="fade-right">
              <img src="/assets/images/hair_service.png" alt="Hair Styling at THE UNIQUE SALON" class="about-preview-img" width="550" height="400" />
              <div class="about-preview-experience">
                <span class="exp-years">6+</span>
                <span class="exp-text">Years of<br />Excellence</span>
              </div>
            </div>
            <div class="about-preview-content" data-aos="fade-left">
              <span class="section-subtitle">Who We Are</span>
              <h2 class="section-title">Hyderabad's Trusted Hair & Beauty Family Salon</h2>
              <p class="lead">Crafting beautiful transformations and boosting confidence since 2020.</p>
              <p>At THE UNIQUE SALON, we believe that self-care is a necessity, not a luxury. Located in Hastinapuram, Hyderabad, our salon has spent over six years offering state-of-the-art styling, grooming, and luxury beauty treatments. Our professional, highly trained stylists customize services to suit your distinct persona, ensuring you leave looking and feeling your absolute best.</p>
              
              <div class="about-preview-features">
                <div class="feature-check">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '4px' }}>
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-5.446z"/>
                  </svg>
                  Experienced Stylists
                </div>
                <div class="feature-check">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '4px' }}>
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-5.446z"/>
                  </svg>
                  Premium Products Only
                </div>
                <div class="feature-check">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '4px' }}>
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-5.446z"/>
                  </svg>
                  Hygienic Environment
                </div>
                <div class="feature-check">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '4px' }}>
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-5.446z"/>
                  </svg>
                  Modern Techniques
                </div>
              </div>
              
              <button onClick={() => navigateTo('about')} class="btn btn-dark" id="about-read-more">Learn More About Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section class="section section-bg-soft" id="why-choose-us-section">
        <div class="container-wide">
          <div class="section-title-wrapper">
            <span class="section-subtitle">Our Guarantee</span>
            <h2 class="section-title">Why Choose THE UNIQUE SALON?</h2>
          </div>
          
          <div class="why-us-grid">
            <div class="why-us-card" data-aos="fade-up" data-aos-delay="100">
              <div class="why-us-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                </svg>
              </div>
              <h3 class="why-us-title">6+ Years Experience</h3>
              <p class="why-us-text">Over six years of delivering superior cuts, colors, facials, and gorgeous bridal makeovers.</p>
            </div>
            
            <div class="why-us-card" data-aos="fade-up" data-aos-delay="200">
              <div class="why-us-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
              </div>
              <h3 class="why-us-title">Professional Stylists</h3>
              <p class="why-us-text">Our experts are certified, passionate, and undergo training on modern global styling styles.</p>
            </div>
            
            <div class="why-us-card" data-aos="fade-up" data-aos-delay="300">
              <div class="why-us-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a7 7 0 1 1-10.932 0A30.156 30.156 0 0 1 2.5.5zM3.503 2c.075.485.163.987.262 1.503a6.002 6.002 0 1 0 8.47 0c.099-.516.187-1.018.262-1.503h-9z"/>
                </svg>
              </div>
              <h3 class="why-us-title">Premium Products</h3>
              <p class="why-us-text">We strictly use high-grade international hair and skin cosmetics to protect your beauty and health.</p>
            </div>
            
            <div class="why-us-card" data-aos="fade-up" data-aos-delay="400">
              <div class="why-us-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zm-1 2H5v3h6V3zm0 4H5v3h6V7zm0 4H5v3h6v-3z"/>
                </svg>
              </div>
              <h3 class="why-us-title">Hygienic Environment</h3>
              <p class="why-us-text">We adhere to clinical sanitization. All tools, chairs, and styling decks are sanitized after every visitor.</p>
            </div>
            
            <div class="why-us-card" data-aos="fade-up" data-aos-delay="500">
              <div class="why-us-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M11.354 4.646a.5.5 0 0 0-.708 0L7 8.293 5.354 6.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708z"/>
                </svg>
              </div>
              <h3 class="why-us-title">Customer Satisfaction</h3>
              <p class="why-us-text">Our primary priority is client happiness. We perform personalized consultation before every service.</p>
            </div>
            
            <div class="why-us-card" data-aos="fade-up" data-aos-delay="600">
              <div class="why-us-icon">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0h-13zM8 4.41c1.386 0 2.5 1.115 2.5 2.5 0 1.386-1.114 2.5-2.5 2.5S5.5 8.296 5.5 6.91c0-1.385 1.114-2.5 2.5-2.5zM6.5 6.91a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm1.5-4.4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
                </svg>
              </div>
              <h3 class="why-us-title">Affordable Luxury</h3>
              <p class="why-us-text">Experience absolute high-end salon vibes and styling at prices that fit family budgets comfortably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section class="section" id="featured-services-section">
        <div class="container-wide">
          <div class="section-title-wrapper">
            <span class="section-subtitle">Our Specialities</span>
            <h2 class="section-title">Featured Salon Services</h2>
          </div>
          
          <div class="featured-services-grid">
            {/* Card 1: Hair Treatments */}
            <article class="service-card" data-aos="fade-up" data-aos-delay="100">
              <div class="service-card-img-wrapper">
                <span class="service-card-tag">Hair Care</span>
                <img src="/assets/images/hair_service.png" alt="Hair Botox and Keratin Treatment" class="service-card-img" width="380" height="240" />
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Premium Hair Treatments</h3>
                <p class="service-card-desc">Restore gloss, bounce, and strength to damaged hair. We specialize in Keratin treatment, Hair Smoothening, and advanced Hair Botox.</p>
                <div class="service-card-footer" style={{ justifyContent: 'center' }}>
                  <button onClick={() => navigateTo('services', 'hair-services')} class="service-card-cta" aria-label="View all Premium Hair Treatments services">
                    View All Services ➔
                  </button>
                </div>
              </div>
            </article>
            
            {/* Card 2: Makeup & Bridal */}
            <article class="service-card" data-aos="fade-up" data-aos-delay="200">
              <div class="service-card-img-wrapper">
                <span class="service-card-tag">Makeup</span>
                <img src="/assets/images/beauty_service.png" alt="Bridal & Groom Makeup Artist" class="service-card-img" width="380" height="240" />
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Bridal & Special Occasions</h3>
                <p class="service-card-desc">Look absolute best on your wedding day or festive occasions. Expert bridal and groom packages with high-definition makeup styling.</p>
                <div class="service-card-footer" style={{ justifyContent: 'center' }}>
                  <button onClick={() => navigateTo('services', 'makeup-services')} class="service-card-cta" aria-label="View all Bridal & Special Occasions services">
                    View All Services ➔
                  </button>
                </div>
              </div>
            </article>
            
            {/* Card 3: Family Grooming */}
            <article class="service-card" data-aos="fade-up" data-aos-delay="300">
              <div class="service-card-img-wrapper">
                <span class="service-card-tag">Grooming</span>
                <img src="/assets/images/salon_interior.png" alt="Haircuts and Styling Services" class="service-card-img" width="380" height="240" />
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Haircuts & Styling</h3>
                <p class="service-card-desc">Modern haircuts for men, women, and children. Get the trending cuts, blow dry, beard styling, and classic skin grooming under one roof.</p>
                <div class="service-card-footer" style={{ justifyContent: 'center' }}>
                  <button onClick={() => navigateTo('services', 'hair-services')} class="service-card-cta" aria-label="View all Haircuts & Styling services">
                    View All Services ➔
                  </button>
                </div>
              </div>
            </article>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => navigateTo('services')} class="btn btn-dark" id="featured-view-all">
              View All Premium Services
            </button>
          </div>
        </div>
      </section>

      {/* Transformation Gallery Section */}
      <section class="section section-bg-soft" id="gallery-section">
        <div class="container-wide">
          <div class="section-title-wrapper">
            <span class="section-subtitle">Visual Proof</span>
            <h2 class="section-title">Our Transformation Gallery</h2>
          </div>
          
          {/* Filter Controls */}
          <div class="gallery-filters">
            <button onClick={() => setGalleryFilter('all')} class={`gallery-filter-btn ${galleryFilter === 'all' ? 'active' : ''}`}>All Photos</button>
            <button onClick={() => setGalleryFilter('hair')} class={`gallery-filter-btn ${galleryFilter === 'hair' ? 'active' : ''}`}>Hair Styling</button>
            <button onClick={() => setGalleryFilter('makeup')} class={`gallery-filter-btn ${galleryFilter === 'makeup' ? 'active' : ''}`}>Groom & Bridal Makeup</button>
            <button onClick={() => setGalleryFilter('beauty')} class={`gallery-filter-btn ${galleryFilter === 'beauty' ? 'active' : ''}`}>Beauty & Facials</button>
            <button onClick={() => setGalleryFilter('interior')} class={`gallery-filter-btn ${galleryFilter === 'interior' ? 'active' : ''}`}>Salon Ambience</button>
          </div>
          
          {/* Gallery Grid */}
          <div class="gallery-grid" id="gallery-masonry" data-aos="fade-up">
            {filteredGallery.map((img) => (
              <div 
                key={img.id} 
                class="gallery-item" 
                onClick={() => openLightboxAt(img)}
              >
                <img src={img.src} alt={img.alt} class="gallery-item-img" loading="lazy" />
                <div class="gallery-item-overlay">
                  <div class="gallery-item-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <h4 class="gallery-item-title">{img.title}</h4>
                  <p class="gallery-item-category">{img.categoryLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section class="section section-bg-dark" id="testimonials-section">
        <div class="container-wide">
          <div class="section-title-wrapper">
            <span class="section-subtitle">Real Feedback</span>
            <h2 class="section-title">What Our Customers Say</h2>
          </div>
          
          <div class="testimonials-slider-container" data-aos="fade-up">
            <div 
              class="testimonials-track" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} class="testimonial-slide">
                  <div class="testimonial-card">
                    <div class="testimonial-quote-icon">“</div>
                    <div class="testimonial-stars">{t.stars}</div>
                    <p class="testimonial-text">{t.text}</p>
                    <h4 class="testimonial-author-title">{t.author}</h4>
                    <p class="testimonial-author-subtitle">{t.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider Dot Paginators */}
            <div class="slider-dots">
              {TESTIMONIALS.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleDotClick(idx)} 
                  class={`slider-dot ${idx === activeSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Booking Banner */}
      <section class="cta-banner" id="final-cta-section" data-aos="fade-up">
        <div class="cta-banner-content">
          <h2>Ready to Experience Premium Salon Services?</h2>
          <p>Book your slot now on WhatsApp or call our support team to consult our beauty & hair specialists.</p>
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

      {/* Home Contact & Map Section */}
      <HomeContactSection />

      {/* Reusable Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredGallery}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </>
  );
}
