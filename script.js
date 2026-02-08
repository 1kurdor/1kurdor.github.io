// KurdorDev Portfolio - Fixed Language Issue
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('✅ Website loaded successfully');
    
    // ========== 1. MOBILE MENU ==========
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle && navLinks) {
        const menuIcon = menuToggle.querySelector('i');
        
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking links
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    }
    
    // ========== 2. THEME TOGGLE ==========
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (themeToggle) {
        // Get saved theme or use dark as default
        let currentTheme = localStorage.getItem('theme');
        if (!currentTheme) {
            currentTheme = 'dark';
            localStorage.setItem('theme', 'dark');
        }
        
        // Apply saved theme
        html.setAttribute('data-theme', currentTheme);
        
        // Toggle theme on click
        themeToggle.addEventListener('click', function() {
            if (html.getAttribute('data-theme') === 'dark') {
                html.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    
    // ========== 3. LANGUAGE SWITCHER - FIXED ==========
    const langButtons = document.querySelectorAll('.lang-btn');
    
    if (langButtons.length > 0) {
        // Get saved language or use English as default
        let savedLang = localStorage.getItem('language');
        
        // If no saved language, set to English
        if (!savedLang) {
            savedLang = 'en';
            localStorage.setItem('language', 'en');
        }
        
        // REMOVE ALL ACTIVE CLASSES FIRST
        langButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Apply saved language on page load
        applyLanguage(savedLang);
        
        // Set the correct button as active
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === savedLang) {
                btn.classList.add('active');
            }
        });
        
        // Click handler for language buttons
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                
                // Remove active class from ALL buttons first
                langButtons.forEach(b => {
                    b.classList.remove('active');
                });
                
                // Add active class only to clicked button
                this.classList.add('active');
                
                // Apply language
                applyLanguage(lang);
                
                // Save to localStorage
                localStorage.setItem('language', lang);
            });
        });
    }
    
    // ========== 4. APPLY LANGUAGE FUNCTION ==========
    function applyLanguage(lang) {
        // Set HTML attribute
        html.setAttribute('data-lang', lang);
        
        // Set direction (RTL for Kurdish)
        if (lang === 'ku') {
            document.documentElement.dir = 'rtl';
            document.body.style.direction = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
            document.body.style.direction = 'ltr';
        }
        
        // TRANSLATE CONTENT
        if (lang === 'ku') {
            // KURDISH TRANSLATIONS
            document.title = 'کوردۆر';
            
            // Navigation
            const navHome = document.querySelector('[data-i18n="nav-home"]');
            const navContact = document.querySelector('[data-i18n="nav-contact"]');
            if (navHome) navHome.textContent = 'دەستپێک';
            if (navContact) navContact.textContent = 'پەیوەندیکرن';
            
            // Hero section
            const available = document.querySelector('[data-i18n="available"]');
            const name = document.querySelector('[data-i18n="name"]');
            const tagline = document.querySelector('[data-i18n="tagline"]');
            if (available) available.textContent = 'بەردەستە بۆ کار';
            if (name) name.textContent = 'کوردۆر';
            if (tagline) tagline.textContent = 'هەر چەند چیا بەرز بیت، رۆژ دێ هەر هەلیت... ☀️';
            
            // Terminal
            const terminalName = document.querySelector('[data-i18n="terminal-name"]');
            const terminalTitle = document.querySelector('[data-i18n="terminal-title"]');
            const terminalPrompt = document.querySelector('[data-i18n="terminal-prompt"]');
            const terminalCommand = document.querySelector('[data-i18n="terminal-command"]');
            const themeText = document.querySelector('[data-i18n="theme-text"]');
            const installLink = document.querySelector('[data-i18n="install-link"]');
            
            if (terminalName) terminalName.textContent = 'ڕەشید فەرهاد $';
            if (terminalTitle) terminalTitle.textContent = 'گەشەپێدەرێ تەمام | UI/UX';
            if (terminalPrompt) terminalPrompt.textContent = 'کوردۆر@پرۆژە:~$';
            if (terminalCommand) terminalCommand.textContent = 'ثیمێ ڤیشوال ستودیو کودی';
            if (themeText) themeText.textContent = 'ثیمێ کوردۆر...';
            if (installLink) installLink.textContent = '[کلیک بکە بۆ داونلودکرنێ]';
            
            // Contact
            const contactTitle = document.querySelector('[data-i18n="contact-title"]');
            if (contactTitle) contactTitle.textContent = 'پەیوەندیکرن';
            
            // Footer
            const footerText = document.querySelector('[data-i18n="footer-text"]');
            if (footerText) footerText.textContent = '© ٢٠٢٣ کوردۆردێڤ. دروستکراوە لەگەڵ ❤️ لە کوردستان.';
            
        } else {
            // ENGLISH TRANSLATIONS (DEFAULT)
            document.title = 'KurdorDev';
            
            // Navigation
            const navHome = document.querySelector('[data-i18n="nav-home"]');
            const navContact = document.querySelector('[data-i18n="nav-contact"]');
            if (navHome) navHome.textContent = 'Home';
            if (navContact) navContact.textContent = 'Contact Me';
            
            // Hero section
            const available = document.querySelector('[data-i18n="available"]');
            const name = document.querySelector('[data-i18n="name"]');
            const tagline = document.querySelector('[data-i18n="tagline"]');
            if (available) available.textContent = 'Available For Work';
            if (name) name.textContent = 'KurdorDev';
            if (tagline) tagline.textContent = 'No Matter How Tall The Mountain Is, The Sun Always Rise.. ☀️';
            
            // Terminal
            const terminalName = document.querySelector('[data-i18n="terminal-name"]');
            const terminalTitle = document.querySelector('[data-i18n="terminal-title"]');
            const terminalPrompt = document.querySelector('[data-i18n="terminal-prompt"]');
            const terminalCommand = document.querySelector('[data-i18n="terminal-command"]');
            const themeText = document.querySelector('[data-i18n="theme-text"]');
            const installLink = document.querySelector('[data-i18n="install-link"]');
            
            if (terminalName) terminalName.textContent = 'Rashid Farhad $';
            if (terminalTitle) terminalTitle.textContent = 'FullStack Developer | UI/UX';
            if (terminalPrompt) terminalPrompt.textContent = 'kurdor@projects:~$';
            if (terminalCommand) terminalCommand.textContent = 'VSCode Theme';
            if (themeText) themeText.textContent = 'Kurdor Theme...';
            if (installLink) installLink.textContent = '[Click to Install]';
            
            // Contact
            const contactTitle = document.querySelector('[data-i18n="contact-title"]');
            if (contactTitle) contactTitle.textContent = 'Contact Me';
            
            // Footer
            const footerText = document.querySelector('[data-i18n="footer-text"]');
            if (footerText) footerText.textContent = '© 2023 KurdorDev. Made with ❤️ in Kurdistan.';
        }
    }
    
    // ========== 5. TERMINAL TYPING EFFECT ==========
    function startTerminalTyping() {
        const terminalLines = document.querySelectorAll('.terminal-line');
        
        if (terminalLines.length === 0) return;
        
        let currentLine = 0;
        
        function typeLine() {
            if (currentLine >= terminalLines.length) {
                // All lines typed - show install link
                const installLink = document.querySelector('.install-link');
                if (installLink) {
                    installLink.classList.add('show');
                }
                return;
            }
            
            const line = terminalLines[currentLine];
            const originalText = line.textContent;
            
            // Clear line
            line.textContent = '';
            line.style.display = 'flex';
            line.style.opacity = '1';
            
            let i = 0;
            function typeCharacter() {
                if (i < originalText.length) {
                    line.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeCharacter, 40);
                } else {
                    currentLine++;
                    
                    // If this line has install link, show it
                    if (line.querySelector('.install-link')) {
                        const link = line.querySelector('.install-link');
                        setTimeout(() => {
                            link.classList.add('show');
                        }, 300);
                    }
                    
                    // Type next line after delay
                    setTimeout(typeLine, 600);
                }
            }
            
            typeCharacter();
        }
        
        // Start typing after 1 second
        setTimeout(typeLine, 1000);
    }
    
    // Start terminal typing
    startTerminalTyping();
    
    // ========== 6. SCROLL HEADER EFFECT ==========
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // ========== 7. SMOOTH SCROLLING ==========
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== 8. VS CODE LINK CLICK ==========
    document.addEventListener('click', function(e) {
        // Check if clicked on install link
        if (e.target.classList.contains('install-link')) {
            e.preventDefault();
            window.open('https://marketplace.visualstudio.com/items?itemName=rashidfarhad.kurdor', '_blank');
            return;
        }
        
        // Check if clicked on theme text
        if (e.target.classList.contains('typing-text')) {
            e.preventDefault();
            window.open('https://marketplace.visualstudio.com/items?itemName=rashidfarhad.kurdor', '_blank');
            return;
        }
    });
    
    // ========== 9. BACKUP: SHOW INSTALL LINK ==========
    setTimeout(function() {
        const installLink = document.querySelector('.install-link');
        if (installLink && !installLink.classList.contains('show')) {
            installLink.classList.add('show');
        }
    }, 5000);
    
    // ========== 10. SOCIAL ICONS HOVER ==========
    const socialIcons = document.querySelectorAll('.icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ========== 11. GLITCH EFFECT ==========
    function startGlitchEffect() {
        const glitchElements = document.querySelectorAll('.glitch');
        
        if (glitchElements.length === 0) return;
        
        function randomGlitch() {
            glitchElements.forEach(element => {
                if (Math.random() > 0.8) {
                    element.classList.add('glitching');
                    setTimeout(() => {
                        element.classList.remove('glitching');
                    }, 200);
                }
            });
            
            // Next glitch in random time (2-5 seconds)
            setTimeout(randomGlitch, 2000 + Math.random() * 3000);
        }
        
        // Start first glitch after 3 seconds
        setTimeout(randomGlitch, 3000);
    }
    
    startGlitchEffect();
    
    // ========== 12. CHECK IF HTML HAS ACTIVE CLASS PROBLEM ==========
    // This fixes the issue where HTML might have both buttons as active
    setTimeout(function() {
        const langButtons = document.querySelectorAll('.lang-btn');
        const currentLang = localStorage.getItem('language') || 'en';
        
        // Remove active from all
        langButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active to correct one
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
        });
    }, 100);
});
