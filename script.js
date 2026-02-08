class KurdorApp {
    constructor() {
        this.translations = {
            en: {
                "logo": "Kurdor",
                "nav-home": "Home",
                "nav-contact": "Contact Me",
                "available": "Available For Work",
                "name": "Kurdor Dev",
                "tagline": "No Matter How Tall The Mountain Is, The Sun Always Rise... ☀️",
                "terminal-title": "KurdorDev ~ bash$",
                "terminal-name": "Rashid Farhad $",
                "terminal-title2": "FullStack Developer | UI/UX",
                "terminal-prompt": "kurdor@projects:~$",
                "terminal-command": "VSCode Theme",
                "theme-text": "Kurdor Theme...",
                "install-link": "[Click to Install]",
                "contact-title": "Contact Me",
                "footer-text": "© 2025 KurdorDev. Made with ❤️ in Kurdistan."
            },
            
            ku: {
                "logo": "کوردور",
                "nav-home": "دەستپێک",
                "nav-contact": "پەیوەندیکرن",
                "available": "بەرھەڤە بۆ کارکرنێ.",
                "name": "کوردۆر دێڤ ",
                "tagline": "ھەر چەند چیا بەرز بیت، رۆژ هەر دێ ھەلیت... ☀️",
                "terminal-title": "کوردۆر دێڤ   ~ bash$   ",
                "terminal-name": "ڕەشید فەرهەد $",
                "terminal-title2": "گەشەپێدەرێ FullStack | UI/UX",
                "terminal-prompt": "kurdor@پڕۆژەکان:~$",
                "terminal-command": "ثیمێ VSCode",
                "theme-text": "ثیمێ  کوردۆر...",
                "install-link": "[کلیک بکە بۆ ئینستالکرن]",
                "contact-title": "پەیوەندیکرن ",
                "footer-text": "© ٢٠٢٥ کوردۆردێڤ. هاتیە دروستکرن ب ❤️ ل کوردستان."
            }
        };
        
        this.currentLang = 'en';
        this.init();
    }
    
    init() {
        this._loadLanguage();
        this._loadTheme();
        this._setupMobileMenu();
        this._setupSmoothScroll();
        this._setupEventListeners();
        this._setupPerformance();
        this._showInstallLink();
    }
    
    // ============ LANGUAGE SYSTEM ============
    _loadLanguage() {
        const saved = localStorage.getItem('kurdor-lang');
        const browserLang = navigator.language?.substring(0, 2) || 'en';
        const defaultLang = saved || (browserLang === 'ku' ? 'ku' : 'en');
        
        this.setLanguage(defaultLang);
        
        // Language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }
    
    setLanguage(lang) {
        if (lang === this.currentLang) return;
        
        this.currentLang = lang;
        const html = document.documentElement;
        
        // Update HTML attributes
        html.setAttribute('data-lang', lang);
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ku' ? 'rtl' : 'ltr');
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
            
            // Button animation
            if (isActive) {
                btn.style.transform = 'scale(1.1)';
                setTimeout(() => btn.style.transform = '', 200);
            }
        });
        
        // Update all translatable text
        this._updateTranslations(lang);
        
        // Save to localStorage
        localStorage.setItem('kurdor-lang', lang);
        
        // Load Rabar font for Kurdish
        if (lang === 'ku') {
            this._loadRabarFont();
        }
        
        // Dispatch event for any listeners
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
    
    _updateTranslations(lang) {
        const texts = this.translations[lang];
        if (!texts) return;
        
        // Batch update for better performance
        requestAnimationFrame(() => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                const text = texts[key];
                
                if (text) {
                    if (element.hasAttribute('data-text')) {
                        element.setAttribute('data-text', text);
                    }
                    element.textContent = text;
                }
            });
        });
    }
    
    _loadRabarFont() {
        // Preload Rabar font for better performance
        if (document.fonts && document.fonts.check('12px Rabar')) {
            return; // Font already loaded
        }
        
        // Trigger font load
        const testSpan = document.createElement('span');
        testSpan.style.fontFamily = 'Rabar';
        testSpan.style.opacity = '0';
        testSpan.style.position = 'absolute';
        testSpan.textContent = 'کوردی';
        document.body.appendChild(testSpan);
        
        setTimeout(() => {
            document.body.removeChild(testSpan);
        }, 100);
    }
    
    // ============ THEME SYSTEM ============
    _loadTheme() {
        const saved = localStorage.getItem('kurdor-theme') || 'dark';
        this.setTheme(saved);
        
        // Theme toggle button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                this.setTheme(current === 'dark' ? 'light' : 'dark');
            });
        }
    }
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('kurdor-theme', theme);
        
        // Update toggle button label
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 
                theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
        }
    }
    
    // ============ MOBILE MENU ============
    _setupMobileMenu() {
        const menuBtn = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-links');
        
        if (!menuBtn || !navMenu) return;
        
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            menuBtn.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
            
            // Toggle body scroll
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        });
    }
    
    // ============ SMOOTH SCROLL ============
    _setupSmoothScroll() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    const navMenu = document.getElementById('nav-links');
                    const menuBtn = document.getElementById('menu-toggle');
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        document.body.style.overflow = '';
                    }
                    
                    // Calculate scroll position
                    const headerHeight = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ============ EVENT LISTENERS ============
    _setupEventListeners() {
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Alt + L: Toggle language
            if (e.altKey && e.key === 'l') {
                e.preventDefault();
                const newLang = this.currentLang === 'en' ? 'ku' : 'en';
                this.setLanguage(newLang);
            }
            
            // Alt + T: Toggle theme
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                const current = document.documentElement.getAttribute('data-theme');
                this.setTheme(current === 'dark' ? 'light' : 'dark');
            }
        });
        
        // Header shadow on scroll
        window.addEventListener('scroll', this._debounce(() => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        }, 10));
        
        // Social icons hover effects
        this._setupSocialIcons();
    }
    
    _setupSocialIcons() {
        const icons = document.querySelectorAll('.icons a');
        icons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transition = 'all 0.3s ease';
            });
        });
    }
    
    // ============ PERFORMANCE ============
    _setupPerformance() {
        // Reduce motion for users who prefer it
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            this._reduceMotion();
        }
        
        prefersReducedMotion.addEventListener('change', (e) => {
            if (e.matches) {
                this._reduceMotion();
            }
        });
        
        // Preload images
        this._preloadImages();
    }
    
    _reduceMotion() {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-slow', '0.1s ease');
        document.documentElement.style.setProperty('--transition-fast', '0.05s ease');
        
        // Disable glitch effect
        const glitch = document.querySelector('.glitch');
        if (glitch) {
            glitch.style.animation = 'none';
        }
    }
    
    _preloadImages() {
        // Preload social media icons
        const images = [
            'image/w.png',
            'image/telegram.png', 
            'image/insta.png',
            'image/snap.png',
            'image/tiktok.png'
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    _showInstallLink() {
        // Show the install link
        setTimeout(() => {
            const installLink = document.querySelector('.install-link');
            if (installLink) {
                installLink.classList.add('show');
            }
        }, 1500);
    }
    
    // ============ UTILITY ============
    _debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// ============ INITIALIZE APP ============
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    const app = new KurdorApp();
    
    // Add loaded class for transitions
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Log initialization
    console.log('🎯 KurdorDev - Bilingual Portfolio Loaded');
    console.log('🌍 Language:', app.currentLang);
    console.log('🎨 Theme:', document.documentElement.getAttribute('data-theme'));
});
