import React, { useEffect } from 'react';

export default function Lightbox({ isOpen, onClose, images, currentIndex, setCurrentIndex }) {
  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images, onClose]);

  // Lock background scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-content-wrapper')) {
      onClose();
    }
  };

  return (
    <div 
      id="lightbox" 
      class="lightbox active" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Image Preview Lightbox"
      onClick={handleOverlayClick}
    >
      <div class="lightbox-content-wrapper">
        <button class="lightbox-close" aria-label="Close Lightbox" onClick={onClose}>&times;</button>
        
        {images.length > 1 && (
          <button class="lightbox-arrow lightbox-arrow-left" aria-label="Previous Image" onClick={handlePrev}>
            &#10094;
          </button>
        )}
        
        <img src={currentImage.src} alt={currentImage.alt || currentImage.title} class="lightbox-img" />
        
        {images.length > 1 && (
          <button class="lightbox-arrow lightbox-arrow-right" aria-label="Next Image" onClick={handleNext}>
            &#10095;
          </button>
        )}
        
        <div class="lightbox-caption">
          {currentImage.title} ({currentImage.categoryLabel || currentImage.category})
        </div>
      </div>
    </div>
  );
}
