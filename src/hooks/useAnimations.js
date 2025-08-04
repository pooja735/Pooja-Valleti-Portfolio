import { useEffect, useRef } from 'react';

export const useAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    
    const initAnimations = () => {
      // Simple intersection observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      // Observe all animated elements
      const animatedElements = document.querySelectorAll(
        '.fade-in-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll, .scale-in-on-scroll, .card-entrance, .stagger-item'
      );

      animatedElements.forEach(el => observer.observe(el));

      // Handle staggered animations
      const staggerContainers = document.querySelectorAll('.stagger-container');
      staggerContainers.forEach(container => {
        const items = container.querySelectorAll('.stagger-item');
        items.forEach(item => observer.observe(item));
      });

      // Add hover effects
      const cards = document.querySelectorAll('.project, .glass-card, .contact__card');
      cards.forEach(card => {
        if (!card.classList.contains('hover-lift')) {
          card.classList.add('hover-lift');
        }
      });

      const buttons = document.querySelectorAll('.btn--outline');
      buttons.forEach(btn => {
        if (!btn.classList.contains('btn--animated')) {
          btn.classList.add('btn--animated');
        }
      });

      const socialLinks = document.querySelectorAll('.link--icon');
      socialLinks.forEach(link => {
        if (!link.classList.contains('hover-glow')) {
          link.classList.add('hover-glow');
        }
      });

      initialized.current = true;
    };

    // Initialize with a delay to ensure React has rendered
    const timer = setTimeout(initAnimations, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);
}; 