// Theme management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = this.themeToggle?.querySelector('.material-icons');
        
        this.init();
    }
    
    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listener for theme toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // Add keyboard shortcut for theme toggle (Ctrl/Cmd + T)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 't') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
        
        // Add theme transition styles
        this.addThemeTransitionStyles();
    }
    
    setTheme(theme) {
        const body = document.body;
        
        // Remove existing theme classes
        body.classList.remove('light', 'dark');
        
        // Add new theme class
        body.classList.add(theme);
        
        // Update theme icon
        if (this.themeIcon) {
            this.themeIcon.textContent = theme === 'light' ? 'dark_mode' : 'light_mode';
        }
        
        // Store theme preference
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
        
        // Update meta theme color
        this.updateMetaThemeColor();
        
        // Dispatch custom event for theme change
        document.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add animation effect
        this.addThemeTransition();
        
        // Add haptic feedback for mobile
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
    
    addThemeTransition() {
        const body = document.body;
        
        // Add transition class
        body.classList.add('theme-transitioning');
        
        // Remove transition class after animation completes
        setTimeout(() => {
            body.classList.remove('theme-transitioning');
        }, 300);
    }
    
    addThemeTransitionStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .theme-transitioning * {
                transition: background-color 0.3s ease, 
                           color 0.3s ease, 
                           border-color 0.3s ease, 
                           box-shadow 0.3s ease !important;
            }
            
            .theme-toggle-animation {
                transform: rotate(180deg);
                transition: transform 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }
    
    updateMetaThemeColor() {
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', this.isDarkMode() ? '#1a202c' : '#f8f4ff');
        }
    }
    
    getCurrentTheme() {
        return this.currentTheme;
    }
    
    isDarkMode() {
        return this.currentTheme === 'dark';
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.themeManager = new ThemeManager();
});

// Theme-aware color scheme
function updateColorScheme() {
    const isDark = window.themeManager?.isDarkMode() || false;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', isDark ? '#1a202c' : '#f8f4ff');
    }
}

// Update color scheme when theme changes
document.addEventListener('themeChange', updateColorScheme);

// Initial color scheme update
document.addEventListener('DOMContentLoaded', updateColorScheme);

// Add theme-aware favicon (if you have different favicons for light/dark)
function updateFavicon() {
    const isDark = window.themeManager?.isDarkMode() || false;
    const favicon = document.querySelector('link[rel="icon"]');
    
    if (favicon) {
        // You can change favicon based on theme if you have different versions
        // favicon.href = isDark ? '/favicon-dark.ico' : '/favicon-light.ico';
    }
}

// Update favicon when theme changes
document.addEventListener('themeChange', updateFavicon);

// Add theme persistence across browser sessions
window.addEventListener('beforeunload', function() {
    if (window.themeManager) {
        localStorage.setItem('theme', window.themeManager.getCurrentTheme());
    }
});

// Add system theme detection
function detectSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleThemeChange(e) {
        if (!localStorage.getItem('theme')) {
            // Only auto-switch if user hasn't manually set a theme
            const newTheme = e.matches ? 'dark' : 'light';
            if (window.themeManager) {
                window.themeManager.setTheme(newTheme);
            }
        }
    }
    
    // Listen for system theme changes
    mediaQuery.addEventListener('change', handleThemeChange);
    
    // Set initial theme based on system preference if no user preference
    if (!localStorage.getItem('theme')) {
        handleThemeChange(mediaQuery);
    }
}

// Initialize system theme detection
document.addEventListener('DOMContentLoaded', detectSystemTheme);

// Add theme toggle animation
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            this.classList.add('theme-toggle-animation');
            
            setTimeout(() => {
                this.classList.remove('theme-toggle-animation');
            }, 300);
        });
    }
});

// Add theme-aware scrollbar styles
function updateScrollbarStyles() {
    const isDark = window.themeManager?.isDarkMode() || false;
    const style = document.getElementById('scrollbar-styles') || document.createElement('style');
    
    if (!document.getElementById('scrollbar-styles')) {
        style.id = 'scrollbar-styles';
        document.head.appendChild(style);
    }
    
    style.textContent = `
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: ${isDark ? '#2d3748' : '#f1f5f9'};
        }
        
        ::-webkit-scrollbar-thumb {
            background: ${isDark ? '#4a5568' : '#cbd5e0'};
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: ${isDark ? '#718096' : '#a0aec0'};
        }
    `;
}

// Update scrollbar when theme changes
document.addEventListener('themeChange', updateScrollbarStyles);

// Initial scrollbar update
document.addEventListener('DOMContentLoaded', updateScrollbarStyles);

// Add theme-aware focus styles
function updateFocusStyles() {
    const isDark = window.themeManager?.isDarkMode() || false;
    const style = document.getElementById('focus-styles') || document.createElement('style');
    
    if (!document.getElementById('focus-styles')) {
        style.id = 'focus-styles';
        document.head.appendChild(style);
    }
    
    style.textContent = `
        *:focus {
            outline: 2px solid ${isDark ? '#667eea' : '#4c51bf'};
            outline-offset: 2px;
        }
        
        *:focus:not(:focus-visible) {
            outline: none;
        }
    `;
}

// Update focus styles when theme changes
document.addEventListener('themeChange', updateFocusStyles);

// Initial focus styles update
document.addEventListener('DOMContentLoaded', updateFocusStyles);

// Add theme-aware selection styles
function updateSelectionStyles() {
    const isDark = window.themeManager?.isDarkMode() || false;
    const style = document.getElementById('selection-styles') || document.createElement('style');
    
    if (!document.getElementById('selection-styles')) {
        style.id = 'selection-styles';
        document.head.appendChild(style);
    }
    
    style.textContent = `
        ::selection {
            background: ${isDark ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'};
            color: ${isDark ? '#f7fafc' : '#2d3748'};
        }
        
        ::-moz-selection {
            background: ${isDark ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'};
            color: ${isDark ? '#f7fafc' : '#2d3748'};
        }
    `;
}

// Update selection styles when theme changes
document.addEventListener('themeChange', updateSelectionStyles);

// Initial selection styles update
document.addEventListener('DOMContentLoaded', updateSelectionStyles);