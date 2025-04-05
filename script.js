document.addEventListener('DOMContentLoaded', () => {

    let isDarkMode = false;


    const createMobileNav = () => {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.navbar-links');

        if (window.innerWidth <= 850) {

            if (!document.querySelector('.hamburger-menu')) {
                const hamburger = document.createElement('div');
                hamburger.className = 'hamburger-menu';


                updateHamburgerIcon(hamburger);

                navbar.insertBefore(hamburger, navLinks);


                hamburger.addEventListener('click', () => {
                    navLinks.classList.toggle('show');
                    hamburger.classList.toggle('active');
                });


                const style = document.createElement('style');
                style.id = 'mobile-nav-style';
                style.textContent = `

                    .navbar {
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                    }

                    .navbar-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: rgba(14, 25, 36, 0.88);
                        border: 3px solid rgba(161, 225, 255, 0.2);
                        border-radius: 22px;
                        padding: 20px;
                        align-items: flex-start;
                        margin-top: 8px;
                        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.75);
                        width: 100%;
                        z-index: 1000;
                    }
                    
                    .navbar-links.show {
                        display: flex;
                        animation: menuFadeIn 0.3s ease forwards;
                    }
                    
                    @keyframes menuFadeIn {
                        from { 
                            opacity: 0;
                            transform: translateY(-8px);
                            backdrop-filter: blur(0px);
                        }
                        to { 
                            opacity: 1;
                            transform: translateY(0);
                            backdrop-filter: blur(12px);
                        }
                    }
                    
                    .navbar-links a {
                        position: relative;
                        z-index: 2;
                    }
                    
                    .navbar-links::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: -1;
                        border-radius: 20px;
                        background: linear-gradient(
                            135deg, 
                            rgba(255, 255, 255, 0.1) 0%, 
                            rgba(255, 255, 255, 0.05) 50%, 
                            rgba(255, 255, 255, 0) 100%
                        );
                    }
                    
                    .hamburger-menu {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 30px;
                        height: 22px;
                        cursor: pointer;
                        position: relative;
                        transition: transform 0.3s ease;
                    }
                    
                    .hamburger-menu:hover {
                        transform: scale(1.05);
                    }
                    
                    .bar {
                        height: 3px;
                        width: 100%;
                        background-color: white;
                        border-radius: 3px;
                        transition: 0.3s;
                    }
                    
                    .hamburger-menu.active .bar:nth-child(1) {
                        transform: translateY(9px) rotate(45deg);
                    }
                    
                    .hamburger-menu.active .bar:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .hamburger-menu.active .bar:nth-child(3) {
                        transform: translateY(-9px) rotate(-45deg);
                    }
                    
                    
                    .bun-top, .bun-bottom, .patty, .cheese, .lettuce {
                        border-radius: 50px;
                        position: relative;
                        transition: 0.3s;
                    }
                    
                    .bun-top {
                        height: 10px;
                        width: 100%;
                        background-color: #F2BB67; 
                        border-radius: 10px 10px 3px 3px;
                        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
                    }
                    
                    .bun-top::after {
                        content: '';
                        position: absolute;
                        top: 1px;
                        left: 3px;
                        right: 3px;
                        height: 2px;
                        background-color: rgba(255, 255, 255, 0.2);
                        border-radius: 10px;
                    }
                    
                    .bun-bottom {
                        height: 8px;
                        width: 100%;
                        background-color: #E3A84B; 
                        border-radius: 3px 3px 10px 10px;
                    }
                    
                    .patty {
                        height: 6px;
                        width: 100%;
                        background-color: #633C15; 
                        border-radius: 3px;
                    }
                    
                    .cheese {
                        height: 3px;
                        width: 110%;
                        left: -5%;
                        background-color: #F3CA47; 
                        border-radius: 2px;
                    }
                    
                    .lettuce {
                        height: 4px;
                        width: 105%;
                        left: -2.5%;
                        background-color: #4AB04A; 
                        border-radius: 2px;
                        box-shadow: 0 0 2px #3ca53c;
                    }
                    
                    
                    .hamburger-menu.active .bun-top {
                        transform: translateY(13px) rotate(45deg);
                        background-color: #E3A84B;
                    }
                    
                    .hamburger-menu.active .bun-bottom {
                        transform: translateY(-13px) rotate(-45deg);
                    }
                    
                    .hamburger-menu.active .patty,
                    .hamburger-menu.active .cheese,
                    .hamburger-menu.active .lettuce {
                        opacity: 0;
                    }
                `;
                document.head.appendChild(style);
            } else {

                const hamburger = document.querySelector('.hamburger-menu');
                updateHamburgerIcon(hamburger);
            }
        } else {

            const hamburger = document.querySelector('.hamburger-menu');
            if (hamburger) {
                hamburger.remove();
                navLinks.classList.remove('show');


                const mobileStyle = document.getElementById('mobile-nav-style');
                if (mobileStyle) {
                    mobileStyle.remove();
                }


                navLinks.style.display = '';
                navLinks.style.flexDirection = '';
                navLinks.style.position = '';
            }
        }
    };


    const updateHamburgerIcon = (hamburgerElement) => {

        hamburgerElement.innerHTML = '';

        if (isDarkMode) {

            hamburgerElement.innerHTML = `
                <div class="bun-top"></div>
                <div class="lettuce"></div>
                <div class="cheese"></div>
                <div class="patty"></div>
                <div class="bun-bottom"></div>
            `;
            hamburgerElement.style.width = '34px';
            hamburgerElement.style.height = '34px';
            hamburgerElement.style.transform = 'scale(0.85)';
        } else {

            hamburgerElement.innerHTML = `
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            `;
            hamburgerElement.style.width = '30px';
            hamburgerElement.style.height = '22px';
            hamburgerElement.style.transform = '';
        }
    };


    const parallaxEffect = () => {
        const mockup = document.querySelector('.mockup');
        const mockupContainer = document.querySelector('.mockup-container');

        // Reset any transform when the page loads to ensure proper centering
        if (mockup) {
            mockup.style.transform = 'none';
        }

        // Check if the device is a mobile device - disable parallax on mobile
        const isMobile = window.innerWidth <= 768;

        window.addEventListener('scroll', () => {
            if (mockup && mockupContainer && !isMobile) {
                const scrollY = window.scrollY;
                const containerRect = mockupContainer.getBoundingClientRect();
                
                // Only apply parallax if the mockup is in or near the viewport
                if (containerRect.bottom > 0 && containerRect.top < window.innerHeight) {
                    // Apply a very subtle parallax effect with even more limited movement
                    const translateY = Math.min(scrollY * 0.02, 25); // Reduced intensity and max movement
                    mockup.style.transform = `translateY(${translateY}px)`; // Only affect Y-axis
                } else {
                    // Reset transform when out of view
                    mockup.style.transform = 'none';
                }
            }
        });

        // Update parallax effect on resize and ensure centering
        window.addEventListener('resize', () => {
            // Disable parallax on mobile
            const nowMobile = window.innerWidth <= 768;
            if (nowMobile && mockup) {
                mockup.style.transform = 'none';
            }
            
            // Ensure centering is maintained
            if (mockup) {
                // Force horizontal centering
                mockup.style.left = '0';
                mockup.style.right = '0';
                mockup.style.margin = '0 auto';
            }
        });
    };


    const smoothScroll = () => {
        const navLinks = document.querySelectorAll('.navbar-links a[href^="#"]');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();


                    const mobileMenu = document.querySelector('.navbar-links.show');
                    const hamburger = document.querySelector('.hamburger-menu.active');

                    if (mobileMenu && hamburger) {
                        mobileMenu.classList.remove('show');
                        hamburger.classList.remove('active');
                    }


                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    };


    const updateActiveNavLink = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-links a[href^="#"]');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    };


    const addScrollAnimations = () => {
        const animateOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, {
            threshold: 0.1
        });

        const elements = document.querySelectorAll('.glass-card, .hero-content h1, .mockup-container');
        elements.forEach(el => {
            observer.observe(el);
            el.classList.add('scroll-animation');
        });


        const style = document.createElement('style');
        style.textContent = `
            .scroll-animation {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .scroll-animation.animate {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    };


    const setupEasterEgg = () => {
        const logoFull = document.querySelector('.logo-full');
        const logoMobile = document.querySelector('.logo-mobile');


        const secretMessage = document.createElement('div');
        secretMessage.className = 'secret-message';
        secretMessage.textContent = 'nocturnal mode activated: thoughts flow better at night';
        document.body.appendChild(secretMessage);


        let secretActive = false;
        let secretTimeout;


        const handleLogoClick = () => {

            if (secretActive) {

                clearTimeout(secretTimeout);
                removeStars();
                document.body.classList.remove('nocturnal-mode');
                secretMessage.textContent = 'day mode activated: brightness returns';
                secretMessage.classList.add('visible');


                logoFull.classList.remove('moon-secret');
                logoMobile.classList.remove('moon-secret');


                secretActive = false;
                isDarkMode = false;


                const hamburger = document.querySelector('.hamburger-menu');
                if (hamburger) {
                    updateHamburgerIcon(hamburger);
                }


                secretTimeout = setTimeout(() => {
                    secretMessage.classList.remove('visible');
                }, 3000);
            } else {

                activateSecret();
            }
        };


        const activateSecret = () => {

            logoFull.classList.add('moon-secret');
            logoMobile.classList.add('moon-secret');


            secretMessage.textContent = 'nocturnal mode activated: thoughts flow better at night';
            secretMessage.classList.add('visible');


            document.body.classList.add('nocturnal-mode');


            secretActive = true;
            isDarkMode = true;


            const hamburger = document.querySelector('.hamburger-menu');
            if (hamburger) {
                updateHamburgerIcon(hamburger);
            }


            if (!document.getElementById('nocturnal-style')) {
                const style = document.createElement('style');
                style.id = 'nocturnal-style';
                style.textContent = `
                    .nocturnal-mode {
                        background: linear-gradient(to bottom, #09111b, #061c2e) !important;
                    }
                    
                    .nocturnal-mode .navbar,
                    .nocturnal-mode .glass-card {
                        box-shadow: 0 5px 20px rgba(161, 225, 255, 0.1);
                    }
                    
                    .nocturnal-mode .feature:hover {
                        box-shadow: 0 10px 20px rgba(161, 225, 255, 0.1);
                    }
                    
                    .nocturnal-mode .navbar-links {
                        background: rgba(9, 17, 27, 0.7);
                        border: 1px solid rgba(161, 225, 255, 0.15);
                        backdrop-filter: blur(12px) !important;
                        -webkit-backdrop-filter: blur(12px) !important;
                    }
                    
                    @keyframes starTwinkle {
                        0%, 100% { opacity: 0.1; }
                        50% { opacity: 0.8; }
                    }
                    
                    .star {
                        position: fixed;
                        background-color: white;
                        border-radius: 50%;
                        z-index: -1;
                        animation: starTwinkle ease-in-out infinite;
                    }
                `;
                document.head.appendChild(style);
            }


            createStars();


            secretTimeout = setTimeout(() => {
                secretMessage.classList.remove('visible');
            }, 3000);
        };


        const createStars = () => {

            removeStars();

            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'star';


                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;


                const size = Math.random() * 3 + 1;


                const duration = Math.random() * 3 + 2;


                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${x}px`;
                star.style.top = `${y}px`;
                star.style.animationDuration = `${duration}s`;

                document.body.appendChild(star);
            }
        };


        const removeStars = () => {
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => star.remove());
        };


        logoFull.addEventListener('click', handleLogoClick);
        logoMobile.addEventListener('click', handleLogoClick);
    };


    const setupComingSoonMessage = () => {

        if (!document.querySelector('.coming-soon-message')) {
            const messageEl = document.createElement('div');
            messageEl.className = 'coming-soon-message';
            messageEl.innerHTML = `
                <button class="close-btn">&times;</button>
                <h3 style="margin-bottom: 10px; color: white;">Coming Soon to App Store</h3>
                <p>nocturne is currently in development and will be available on the App Store soon. Check back for updates!</p>
            `;
            document.body.appendChild(messageEl);


            const closeBtn = messageEl.querySelector('.close-btn');
            closeBtn.addEventListener('click', () => {
                messageEl.classList.remove('visible');
            });


            document.addEventListener('click', (e) => {
                if (messageEl.classList.contains('visible') &&
                    !messageEl.contains(e.target) &&
                    !e.target.classList.contains('coming-soon-link') &&
                    !e.target.closest('.coming-soon-link')) {
                    messageEl.classList.remove('visible');
                }
            });
        }


        const comingSoonLinks = document.querySelectorAll('.coming-soon-link');
        comingSoonLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const messageEl = document.querySelector('.coming-soon-message');
                messageEl.classList.add('visible');
            });
        });
    };


    const setupScreenshotGallery = () => {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(document.querySelectorAll('.carousel-slide'));
        const dotsContainer = document.querySelector('.carousel-dots');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        
        // Fullscreen elements
        const fullscreenView = document.querySelector('.fullscreen-view');
        const fullscreenImage = document.querySelector('.fullscreen-image');
        const fullscreenCaption = document.querySelector('.fullscreen-caption');
        const closeFullscreen = document.querySelector('.close-fullscreen');
        const fullscreenPrev = document.querySelector('.fullscreen-prev');
        const fullscreenNext = document.querySelector('.fullscreen-next');
        
        let fullscreenIndex = 0;
        
        if (!track || slides.length === 0) return;
        
        let currentIndex = 0;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let isDragging = false;
        
        // Create dot indicators
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
        
        // Set up fullscreen view
        slides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            const caption = slide.querySelector('p').textContent;
            
            img.addEventListener('click', () => {
                openFullscreen(index, img.src, caption);
            });
        });
        
        function openFullscreen(index, src, caption) {
            fullscreenIndex = index;
            fullscreenImage.src = src;
            fullscreenImage.alt = caption;
            fullscreenCaption.textContent = caption;
            
            // Add active class with slight delay for transition effect
            setTimeout(() => {
                fullscreenView.classList.add('active');
                
                // Prevent body scroll when fullscreen is active
                document.body.style.overflow = 'hidden';
                
                // Stop autoplay while fullscreen is open
                stopAutoPlay();
            }, 10);
        }
        
        function closeFullscreenView() {
            fullscreenView.classList.remove('active');
            
            // Re-enable body scroll
            document.body.style.overflow = '';
            
            // Resume autoplay after closing fullscreen
            setTimeout(startAutoPlay, 1000);
        }
        
        function navigateFullscreen(direction) {
            let newIndex = fullscreenIndex + direction;
            
            // Loop navigation
            if (newIndex < 0) newIndex = slides.length - 1;
            if (newIndex >= slides.length) newIndex = 0;
            
            const slide = slides[newIndex];
            const img = slide.querySelector('img');
            const caption = slide.querySelector('p').textContent;
            
            // Apply fade out effect
            fullscreenImage.style.opacity = '0';
            fullscreenCaption.style.opacity = '0';
            
            setTimeout(() => {
                fullscreenIndex = newIndex;
                fullscreenImage.src = img.src;
                fullscreenImage.alt = caption;
                fullscreenCaption.textContent = caption;
                
                // Apply fade in effect
                fullscreenImage.style.opacity = '1';
                fullscreenCaption.style.opacity = '1';
            }, 300);
        }
        
        // Fullscreen event listeners
        closeFullscreen.addEventListener('click', closeFullscreenView);
        fullscreenPrev.addEventListener('click', () => navigateFullscreen(-1));
        fullscreenNext.addEventListener('click', () => navigateFullscreen(1));
        
        // Close fullscreen on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && fullscreenView.classList.contains('active')) {
                closeFullscreenView();
            } else if (e.key === 'ArrowLeft' && fullscreenView.classList.contains('active')) {
                navigateFullscreen(-1);
            } else if (e.key === 'ArrowRight' && fullscreenView.classList.contains('active')) {
                navigateFullscreen(1);
            }
        });
        
        // Click outside the image to close fullscreen
        fullscreenView.addEventListener('click', (e) => {
            if (e.target === fullscreenView) {
                closeFullscreenView();
            }
        });
        
        // Set up carousel event listeners
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            } else {
                // Loop to last slide
                goToSlide(slides.length - 1);
            }
        });
        
        nextButton.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                goToSlide(currentIndex + 1);
            } else {
                // Loop to first slide
                goToSlide(0);
            }
        });
        
        // Touch events
        function touchStart(e) {
            stopAutoPlay();
            startPos = getPositionX(e);
            isDragging = true;
            
            const slideWidth = slides[0].offsetWidth;
            currentTranslate = -currentIndex * slideWidth;
            prevTranslate = currentTranslate;
        }
        
        function touchMove(e) {
            if (!isDragging) return;
            
            const currentPosition = getPositionX(e);
            currentTranslate = prevTranslate + currentPosition - startPos;
            updateTrackPosition();
        }
        
        function touchEnd() {
            isDragging = false;
            
            const movedBy = currentTranslate - prevTranslate;
            
            // Calculate the threshold for considering it a swipe (20% of slide width)
            const threshold = slides[0].offsetWidth * 0.2;
            
            if (movedBy < -threshold && currentIndex < slides.length - 1) {
                goToSlide(currentIndex + 1);
            } else if (movedBy > threshold && currentIndex > 0) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex);
            }
            
            setTimeout(startAutoPlay, 3000);
        }
        
        function getPositionX(e) {
            return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        }
        
        function updateTrackPosition() {
            track.style.transform = `translateX(${currentTranslate}px)`;
        }
        
        // Add touch and mouse event listeners
        track.addEventListener('mousedown', touchStart);
        track.addEventListener('touchstart', touchStart);
        track.addEventListener('mousemove', touchMove);
        track.addEventListener('touchmove', touchMove);
        track.addEventListener('mouseup', touchEnd);
        track.addEventListener('touchend', touchEnd);
        track.addEventListener('mouseleave', () => {
            if (isDragging) {
                touchEnd();
            }
        });
        
        // Prevent context menu on long press
        track.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        
        // Slide navigation function
        function goToSlide(index) {
            // Update current index
            currentIndex = index;
            
            // Update slide track position
            const slideWidth = slides[0].offsetWidth;
            currentTranslate = -index * slideWidth;
            prevTranslate = currentTranslate;
            updateTrackPosition();
            
            // Update dots
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        // Handle window resize to maintain correct slide position
        window.addEventListener('resize', () => {
            // Recalculate position when window is resized
            goToSlide(currentIndex);
        });
        
        let autoPlayTimer;
        let isAutoPlaying = true;
        
        function startAutoPlay() {
            if (!isAutoPlaying) return;
            stopAutoPlay(); // Clear any existing timers first
            autoPlayTimer = setInterval(() => {
                const nextIndex = (currentIndex + 1) % slides.length;
                goToSlide(nextIndex);
            }, 5000);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayTimer);
        }
        
        // Start autoplay initially
        startAutoPlay();
        
        // Pause autoplay on user interaction
        track.addEventListener('mouseenter', stopAutoPlay);
        track.addEventListener('touchstart', stopAutoPlay);
        track.addEventListener('mouseleave', startAutoPlay);
        track.addEventListener('touchend', () => {
            setTimeout(startAutoPlay, 3000);
        });
        prevButton.addEventListener('click', () => {
            stopAutoPlay();
            setTimeout(startAutoPlay, 3000);
        });
        nextButton.addEventListener('click', () => {
            stopAutoPlay();
            setTimeout(startAutoPlay, 3000);
        });
        
        // Initial setup
        goToSlide(0);
        
        // Add this as a scroll animation target
        const carouselContainer = document.querySelector('.screenshot-carousel');
        if (carouselContainer) {
            // Create an observer for the carousel
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            carouselContainer.classList.add('scroll-animation');
            observer.observe(carouselContainer);
        }
    };


    // Initialize everything
    createMobileNav();
    parallaxEffect();
    smoothScroll();
    updateActiveNavLink();
    addScrollAnimations();
    setupEasterEgg();
    setupComingSoonMessage();
    setupScreenshotGallery();


    window.addEventListener('resize', createMobileNav);
}); 