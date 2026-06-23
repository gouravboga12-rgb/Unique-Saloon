import React, { useState } from 'react';

const SERVICES_LIST = [
  'Haircuts & Trim',
  'Hairstyles & Setting',
  'Hair Coloring',
  'Fashion Coloring',
  'Deep Therapy Hair Spa',
  'Hair Smoothening',
  'Keratin Protein Therapy',
  'Hair Botox Treatment',
  'Blow Dry & Volume',
  'Facials & Cleanups',
  'Hygienic Waxing',
  'Eyebrow Shaping',
  'Facial Threading',
  'Soak & Scrub Pedicure',
  'Nail & Hand Manicure',
  'Classic Beard Shaving',
  'Beard Design & Trim',
  'Beard Dyeing & Color',
  'Bridal Makeover Package',
  'Groom Grooming Package',
  'Other / Custom Consultation'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0],
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, date, time, notes } = formData;
    const whatsappNumber = '919014540296'; // India country code 91 + salon number 9014540296

    // Construct the formatted WhatsApp booking message
    let message = `*APPOINTMENT BOOKING REQUEST*\n`;
    message += `--------------------------------------\n`;
    message += `👤 *Name:* ${name}\n`;
    message += `📞 *Phone:* ${phone}\n`;
    message += `💆 *Service:* ${service}\n`;
    message += `📅 *Preferred Date:* ${date}\n`;
    message += `🕒 *Preferred Time:* ${time}\n`;
    
    if (notes.trim()) {
      message += `📝 *Additional Notes:* ${notes}\n`;
    }
    
    message += `--------------------------------------\n`;
    message += `Sent from THE UNIQUE SALON React website booking assistant.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form inputs
    setFormData({
      name: '',
      phone: '',
      service: SERVICES_LIST[0],
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <>
      {/* Page Banner */}
      <section class="page-banner">
        <div class="container-wide">
          <h1 class="page-banner-title">Contact Us</h1>
          <div class="page-banner-breadcrumbs">
            <span>Home</span> <span>/</span> Contact Us
          </div>
        </div>
      </section>

      {/* Contact Layout */}
      <section class="section">
        <div class="container-wide">
          <div class="contact-layout-grid">
            
            {/* Contact Panel details */}
            <div class="contact-info-panel" data-aos="fade-right">
              <span class="section-subtitle">Get In Touch</span>
              <h2 class="section-title" style={{ display: 'block', width: '100%', textAlign: 'left', margin: '0' }}>We Welcome You</h2>
              
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
                  <p>WhatsApp: <a href="https://wa.me/919014540296" target="_blank" rel="noopener noreferrer">9014540296</a></p>
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
            
            {/* Booking Form Wrapper */}
            <div class="booking-form-wrapper" id="booking-section" data-aos="fade-left">
              <h3 class="booking-form-title">Book An Appointment</h3>
              <p class="booking-form-subtitle">Fill in your preferred slots. We will instantly redirect you to finalize booking on WhatsApp.</p>
              
              <form onSubmit={handleSubmit}>
                <div class="form-group-row">
                  <div class="form-group">
                    <label htmlFor="client-name">Your Name *</label>
                    <input 
                      type="text" 
                      id="client-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Enter your name" 
                      class="form-control" 
                      required 
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="client-phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="client-phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Enter mobile number" 
                      class="form-control" 
                      required 
                    />
                  </div>
                </div>
                
                <div class="form-group">
                  <label htmlFor="client-service">Select Styling Service *</label>
                  <select 
                    id="client-service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    class="form-control" 
                    required
                  >
                    {SERVICES_LIST.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>
                
                <div class="form-group-row">
                  <div class="form-group">
                    <label htmlFor="booking-date">Preferred Date *</label>
                    <input 
                      type="date" 
                      id="booking-date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange} 
                      class="form-control" 
                      required 
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="booking-time">Preferred Time *</label>
                    <input 
                      type="time" 
                      id="booking-time" 
                      name="time" 
                      value={formData.time} 
                      onChange={handleChange} 
                      class="form-control" 
                      required 
                    />
                  </div>
                </div>
                
                <div class="form-group">
                  <label htmlFor="booking-notes">Special Styling Request (Optional)</label>
                  <textarea 
                    id="booking-notes" 
                    name="notes" 
                    value={formData.notes} 
                    onChange={handleChange} 
                    placeholder="Enter details like hair length, coloring history, skin type..." 
                    class="form-control"
                  ></textarea>
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

      {/* Google Map Section */}
      <section class="section section-bg-soft" style={{ paddingBottom: '3.5rem' }} data-aos="fade-up">
        <div class="container-wide">
          <div class="section-title-wrapper" style={{ marginBottom: '2.5rem' }}>
            <span class="section-subtitle">Find Us On Map</span>
            <h3 class="section-title">Visit Our Family Salon</h3>
          </div>
          <div class="contact-map-wrapper">
            <iframe 
              title="Google Map Embed Location for THE UNIQUE SALON"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8093155799786!2d78.55243169999999!3d17.348821999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b47e5b38ed3%3A0xe54dcf9cbe498967!2sHastinapuram%2C%20Hyderabad%2C%20Telangana%20500079!5e0!3m2!1sen!2sin!4v1719142000000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
