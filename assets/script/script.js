class KurdorApp {
    constructor() {
        this.translations = {
            en: {
                "logo": "Kurdor Dev",
                "available": "Available For Work",
                "name": "Rashid Farhad",
                "display-name": "Rashid Farhad",
                "tagline": "No Matter How Tall The Mountain Is, The Sun Always Rise... ☀️",
                "terminal-title": "KurdorDev ~ bash$",
                "terminal-name": "Rashid Farhad $",
                "terminal-title2": "FullStack Developer | UI/UX",
                "terminal-chess": "Blood, sweat, code.",
                "contact-title": "Contact Me",
                "projects-title": "- Projects",
                "projects-subtitle": "Things I've built & published",
                "about-title": "- About Me",
                "profile-title": "FullStack Developer | Kurdistan, Barzan",
                "profile-bio": "\"In chess, as in code - the deeper you go, the more you realize the game has no end. ♟️🃏\"",
                "sikhur-play": "Play Now",
                "project-sikhur-title": "Sikhur",
                "project-sikhur-subtitle": "Web App (Imposter Game)",
                "project-theme-title": "Kurdor Theme",
                "project-theme-subtitle": "Visual Studio Code Extension",
                "project-weather-title": "Weather",
                "project-weather-subtitle": "View Your Area Weather Condition"
            },
            ku: {
                "logo": "کوردور دێڤ",
                "available": "بەردەستە بۆ کار",
                "name": "کوردۆردێڤ",
                "display-name": "ڕەشید فەرهاد",
                "tagline": "گرنگ نیە چیە شاخەکە چەن بەرزە، هەمیشه خۆر هەڵدەستێ... ☀️",
                "terminal-title": "کوردۆردێڤ ~ bash$",
                "terminal-name": "ڕەشید فەرهەد $",
                "terminal-title2": "گەشەپێدەری FullStack | UI/UX",
                "terminal-chess": "خووین، ئارەق، کۆد",
                "contact-title": "پەیوەندیم پێوەبکە",
                "projects-title": "- پڕۆژەکان",
                "projects-subtitle": " پروژێن ژلایێ منڤە هاتینە دروستکرن", 
                "about-title": "- دەربارەی من",
                "profile-title": "گەشەپێدەری FullStack | کوردستان، بارزان",
                "profile-bio": "\"د شەترەنجێ دا، وەک د کۆدی دا - هەتا کویرتر بچییە دناڤدا، زێدەتر دێ زانی کو ڤێ یارییێ دوماهیک نینە. ♟️🃏\"",
                "sikhur-play": "یارییکرن",
                "project-sikhur-title": "سیخوڕ",
                "project-sikhur-subtitle": "یاری دناڤ وێبی دا (یارییا سیخوڕی)",
                "project-theme-title": "ثیمێ کوردۆر",
                "project-theme-subtitle": "زێدەهییا ڤیژوال ستودیو کۆدی",
                "project-weather-title": "کەش و هەوا",
                "project-weather-subtitle": "بارودوخێ کەش و هەوای یێ دەڤەرا خۆ ببینە"
            }
        };
        
        this.currentLang = 'en';
        this.currentSection = 'home';
        this.init();
    }

    init() {
        this._loadLanguage();
        this._loadTheme();
        this._setupBottomMenu();
        this._setupEventListeners();
        this._setupSocialIconsClick();
        this._setupAvailableLink();
        this._setupNameAnimation();
        this._showSection('home');
    }

    // ============ NAME ANIMATION ============
    _setupNameAnimation() {
        const nameElement = document.getElementById('animated-name');
        if (nameElement) {
            nameElement.classList.add('animated-name');
        }
    }

    // ============ BOTTOM MENU ============
    _setupBottomMenu() {
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('data-section');
                
                menuItems.forEach(mi => mi.classList.remove('active'));
                item.classList.add('active');
                
                this._showSection(section);
            });
        });
    }

    _showSection(sectionId) {
        this.currentSection = sectionId;
        
        const sections = ['home', 'projects', 'about', 'contact'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none';
            }
        });
        
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        history.pushState(null, null, `#${sectionId}`);
    }

    // ============ AVAILABLE FOR WORK LINK ============
    _setupAvailableLink() {
        const availableLink = document.querySelector('.work');
        if (availableLink) {
            availableLink.addEventListener('click', (e) => {
                e.preventDefault();
                
                const menuItems = document.querySelectorAll('.menu-item');
                menuItems.forEach(mi => mi.classList.remove('active'));
                
                const aboutMenuItem = document.querySelector('.menu-item[data-section="about"]');
                if (aboutMenuItem) {
                    aboutMenuItem.classList.add('active');
                }
                
                this._showSection('about');
            });
        }
    }

    // ============ SOCIAL ICONS CLICK EFFECT ============
    _setupSocialIconsClick() {
        const socialIcons = document.querySelectorAll('.profile-social a');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                socialIcons.forEach(i => i.classList.remove('active-social'));
                icon.classList.add('active-social');
                
                setTimeout(() => {
                    icon.classList.remove('active-social');
                }, 1000);
            });
        });
    }

    // ============ LANGUAGE SYSTEM ============
    _loadLanguage() {
        const saved = localStorage.getItem('kurdor-lang');
        const browserLang = navigator.language?.substring(0, 2) || 'en';
        const defaultLang = saved || (browserLang === 'ku' ? 'ku' : 'en');
        
        this.setLanguage(defaultLang);
        
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
        
        html.setAttribute('data-lang', lang);
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ku' ? 'rtl' : 'ltr');
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
        });
        
        this._updateTranslations(lang);
        localStorage.setItem('kurdor-lang', lang);
    }

    _updateTranslations(lang) {
        const texts = this.translations[lang];
        if (!texts) return;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = texts[key];
            
            if (text) {
                if (element.hasAttribute('data-text')) {
                    element.setAttribute('data-text', text);
                }
                
                if (key === 'name' && element.id === 'animated-name') {
                    element.textContent = text;
                } else if (key !== 'name') {
                    element.textContent = text;
                }
            }
        });
        
        const displayNameElement = document.getElementById('animated-name');
        if (displayNameElement && texts['display-name']) {
            if (lang === 'ku') {
                displayNameElement.textContent = texts['display-name'];
            } else {
                displayNameElement.textContent = texts['name'];
            }
        }
    }

    // ============ THEME SYSTEM ============
    _loadTheme() {
        const saved = localStorage.getItem('kurdor-theme') || 'dark';
        this.setTheme(saved);
        
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
        
        const themeTag = document.querySelector('.status-tag:last-child span');
        if (themeTag) {
            themeTag.textContent = theme;
        }
    }

    // ============ EVENT LISTENERS ============
    _setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 'l') {
                e.preventDefault();
                const newLang = this.currentLang === 'en' ? 'ku' : 'en';
                this.setLanguage(newLang);
            }
            
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                const current = document.documentElement.getAttribute('data-theme');
                this.setTheme(current === 'dark' ? 'light' : 'dark');
            }
        });
        
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
        
        if (window.location.hash) {
            const section = window.location.hash.substring(1);
            if (['home', 'projects', 'about', 'contact'].includes(section)) {
                setTimeout(() => {
                    this._showSection(section);
                    document.querySelectorAll('.menu-item').forEach(item => {
                        item.classList.toggle('active', item.getAttribute('data-section') === section);
                    });
                }, 100);
            }
        }
    }
}

// ============ INITIALIZE APP ============
document.addEventListener('DOMContentLoaded', () => {
    const app = new KurdorApp();
    console.log('🎯 Kurdor Dev - Bilingual Portfolio Loaded');
    console.log('🌍 Language:', app.currentLang);
    console.log('🎨 Theme:', document.documentElement.getAttribute('data-theme'));
});
