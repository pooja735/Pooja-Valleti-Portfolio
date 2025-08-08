// Simple and reliable navigation system
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing navigation...');
    
    // Wait a bit for all elements to be properly rendered
    setTimeout(() => {
        initializeNavigation();
        initScrollToTop();
        initThemeToggle();
        initAnimations();
        initMobileMenu();
        initTypingAnimation();
    }, 100);
});

function initializeNavigation() {
    // Test all sections first
    testSections();
    
    // Simple smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    console.log('Found navigation links:', navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            console.log('Navigation link clicked:', targetId);
            
            // Simple scroll to section
            scrollToSection(targetId);
            
            // Add visual feedback
            this.style.color = 'var(--clr-primary)';
            setTimeout(() => {
                this.style.color = '';
            }, 1000);
        });
    });
}

function testSections() {
    const sections = ['about', 'projects', 'skills', 'experience', 'education', 'contact'];
    console.log('Testing sections...');
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            console.log(`✓ Section ${sectionId} found at offsetTop: ${section.offsetTop}`);
        } else {
            console.log(`✗ Section ${sectionId} NOT FOUND`);
        }
    });
}

function scrollToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        console.log('Scrolling to:', targetId);
        console.log('Target element found:', targetElement);
        console.log('Target offsetTop:', targetElement.offsetTop);
        
        // Get header height
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 80;
        console.log('Header height:', headerHeight);
        
        // Calculate position
        let scrollPosition;
        
        if (targetId === '#about') {
            scrollPosition = 0;
        } else {
            scrollPosition = targetElement.offsetTop - headerHeight - 20;
        }
        
        // Ensure positive value
        scrollPosition = Math.max(0, scrollPosition);
        
        console.log('Scroll position:', scrollPosition);
        
        // Smooth scroll
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
        
        // Update URL
        history.pushState(null, null, targetId);
    } else {
        console.log('Target not found:', targetId);
        // List all sections to debug
        const allSections = document.querySelectorAll('section[id]');
        console.log('Available sections:');
        allSections.forEach(section => {
            console.log('-', section.id, section);
        });
    }
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollTopButton = document.getElementById('scroll-top');
    
    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });
    }
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            body.classList.toggle('light');
            
            const icon = themeToggle.querySelector('.material-icons');
            if (icon) {
                icon.textContent = body.classList.contains('dark') ? 'light_mode' : 'dark_mode';
            }
        });
    }
}

// Simple animations
function initAnimations() {
    // Intersection Observer for scroll-triggered animations
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
        '.fade-in-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll, .scale-in-on-scroll, .card-entrance, .stagger-item, .timeline-item'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Enhanced hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card, .project, .timeline-item, .education__item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = 'var(--shadow-hover)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
});

// Mobile menu functionality
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu toggle clicked');
            
            mobileMenu.classList.toggle('active');
            console.log('Mobile menu active:', mobileMenu.classList.contains('active'));
            
            // Change icon
            const icon = this.querySelector('.material-icons');
            if (icon) {
                icon.textContent = mobileMenu.classList.contains('active') ? 'close' : 'menu';
            }
        });

        // Close menu when clicking on a link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                console.log('Mobile menu link clicked:', targetId);
                
                // Scroll to section
                scrollToSection(targetId);
                
                // Close mobile menu
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('.material-icons');
                if (icon) {
                    icon.textContent = 'menu';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('.material-icons');
                if (icon) {
                    icon.textContent = 'menu';
                }
            }
        });
    } else {
        console.error('Mobile menu elements not found!');
    }
}

// Beautiful name animation
function initTypingAnimation() {
    const nameElement = document.querySelector('.name-glow');
    if (nameElement) {
        // Add a subtle entrance effect
        nameElement.style.opacity = '0';
        nameElement.style.transform = 'translateY(20px) scale(0.9)';
        
        setTimeout(() => {
            nameElement.style.transition = 'all 1.5s ease-out';
            nameElement.style.opacity = '1';
            nameElement.style.transform = 'translateY(0) scale(1)';
        }, 500);
    }
}

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const initialElements = document.querySelectorAll('.card-entrance, .text-reveal');
    initialElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
});