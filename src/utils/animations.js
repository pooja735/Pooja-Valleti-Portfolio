// Animation utility functions
export const initScrollAnimations = () => {
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

  // Observe all elements with animation classes
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
};

export const initTextReveal = () => {
  const textElements = document.querySelectorAll('.text-reveal');
  
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  textElements.forEach(el => {
    // Only process if not already processed
    if (!el.classList.contains('text-reveal-processed')) {
      el.classList.add('text-reveal-processed');
      // Wrap each character in a span for individual animation
      const text = el.textContent;
      el.innerHTML = '';
      text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        el.appendChild(span);
      });
      textObserver.observe(el);
    }
  });
};

export const addFloatingElements = () => {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach((section, index) => {
    if (index % 2 === 0 && !section.querySelector('.floating-element')) {
      // Add floating elements to even sections
      for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = `${20 + i * 30}%`;
        element.style.top = `${10 + i * 20}%`;
        section.appendChild(element);
      }
    }
  });
};

export const initParallaxEffect = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
};

export const addHoverEffects = () => {
  // Add hover effects to cards
  const cards = document.querySelectorAll('.project, .glass-card, .contact__card');
  cards.forEach(card => {
    if (!card.classList.contains('hover-lift')) {
      card.classList.add('hover-lift');
    }
  });

  // Add shimmer effect to buttons
  const buttons = document.querySelectorAll('.btn--outline');
  buttons.forEach(btn => {
    if (!btn.classList.contains('btn--animated')) {
      btn.classList.add('btn--animated');
    }
  });

  // Add glow effect to social links
  const socialLinks = document.querySelectorAll('.link--icon');
  socialLinks.forEach(link => {
    if (!link.classList.contains('hover-glow')) {
      link.classList.add('hover-glow');
    }
  });
};

// Initialize all animations with retry mechanism
export const initAnimations = () => {
  const initializeWithRetry = (maxRetries = 3, delay = 100) => {
    let retryCount = 0;
    
    const attemptInit = () => {
      try {
        initScrollAnimations();
        initTextReveal();
        addFloatingElements();
        initParallaxEffect();
        addHoverEffects();
        console.log('Animations initialized successfully');
      } catch (error) {
        console.warn('Animation initialization failed, retrying...', error);
        retryCount++;
        if (retryCount < maxRetries) {
          setTimeout(attemptInit, delay * retryCount);
        } else {
          console.error('Failed to initialize animations after', maxRetries, 'attempts');
        }
      }
    };
    
    attemptInit();
  };

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWithRetry);
  } else {
    // If DOM is already loaded, wait a bit for React to render
    setTimeout(initializeWithRetry, 100);
  }
}; 