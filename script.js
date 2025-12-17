// // DOM Elements
// const menuToggle = document.getElementById('menuToggle');
// const navLinks = document.querySelector('.nav-links');
// const backToTop = document.getElementById('backToTop');
// const currentYear = document.getElementById('currentYear');
// const nav = document.querySelector('nav');
// const messageForm = document.getElementById('messageForm');
// const themeToggle = document.getElementById('themeToggle');
// const projectFilters = document.getElementById('projectFilters');
// const projectCards = document.querySelectorAll('.project-card');
// const projectCount = document.getElementById('projectCount');
// const downloadResume = document.getElementById('downloadResume');
// const previewResume = document.getElementById('previewResume');
// const loadingOverlay = document.getElementById('loadingOverlay');
// const loadTime = document.getElementById('loadTime');

// // 3D Visualization Elements
// const dataCube = document.querySelector('.data-cube');
// const rotateBtn = document.getElementById('rotateCube');
// const toggleBtn = document.getElementById('toggleAnimation');
// const themeBtn = document.getElementById('changeTheme');
// const dataPoints = document.querySelectorAll('.data-point');

// // Modal Elements
// const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
// const modals = document.querySelectorAll('.modal');
// const modalCloses = document.querySelectorAll('.modal-close');
// const modalOverlays = document.querySelectorAll('.modal-overlay');
// const resumePreviewModal = document.getElementById('resumePreviewModal');

// // Performance measurement
// const pageLoadStart = performance.now();

// // Initialize theme from localStorage or default to light
// const currentTheme = localStorage.getItem('theme') || 'light';
// if (currentTheme === 'dark') {
//     document.body.classList.add('dark-mode');
// }

// // Set current year in footer
// currentYear.textContent = new Date().getFullYear();

// // ====== 3D VISUALIZATION INTERACTIVITY ======
// function init3DVisualization() {
//     if (!dataCube) return;
    
//     console.log('Initializing 3D Visualization...');
    
//     // Cube rotation variables
//     let isRotating = true;
//     let rotationX = -15;
//     let rotationY = -15;
//     let mouseDown = false;
//     let lastMouseX = 0;
//     let lastMouseY = 0;
    
//     // Manual rotation with mouse
//     dataCube.addEventListener('mousedown', (e) => {
//         mouseDown = true;
//         lastMouseX = e.clientX;
//         lastMouseY = e.clientY;
//         dataCube.style.cursor = 'grabbing';
//         dataCube.style.animationPlayState = 'paused';
//         e.preventDefault();
//     });
    
//     document.addEventListener('mousemove', (e) => {
//         if (!mouseDown) return;
        
//         const deltaX = e.clientX - lastMouseX;
//         const deltaY = e.clientY - lastMouseY;
        
//         rotationY += deltaX * 0.5;
//         rotationX -= deltaY * 0.5;
        
//         dataCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        
//         lastMouseX = e.clientX;
//         lastMouseY = e.clientY;
//     });
    
//     document.addEventListener('mouseup', () => {
//         mouseDown = false;
//         dataCube.style.cursor = 'grab';
//         if (isRotating) {
//             dataCube.style.animationPlayState = 'running';
//         }
//     });
    
//     // Touch support for mobile
//     dataCube.addEventListener('touchstart', (e) => {
//         mouseDown = true;
//         lastMouseX = e.touches[0].clientX;
//         lastMouseY = e.touches[0].clientY;
//         dataCube.style.animationPlayState = 'paused';
//         e.preventDefault();
//     });
    
//     document.addEventListener('touchmove', (e) => {
//         if (!mouseDown) return;
        
//         const deltaX = e.touches[0].clientX - lastMouseX;
//         const deltaY = e.touches[0].clientY - lastMouseY;
        
//         rotationY += deltaX * 0.5;
//         rotationX -= deltaY * 0.5;
        
//         dataCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        
//         lastMouseX = e.touches[0].clientX;
//         lastMouseY = e.touches[0].clientY;
//         e.preventDefault();
//     });
    
//     document.addEventListener('touchend', () => {
//         mouseDown = false;
//         if (isRotating) {
//             dataCube.style.animationPlayState = 'running';
//         }
//     });
    
//     // Rotate button functionality
//     if (rotateBtn) {
//         rotateBtn.addEventListener('click', () => {
//             console.log('Rotate button clicked');
//             rotationX = -15;
//             rotationY = -15;
//             dataCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
//             dataCube.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
//             setTimeout(() => {
//                 dataCube.style.transition = '';
//             }, 800);
//         });
//     }
    
//     // Toggle animation button functionality
//     if (toggleBtn) {
//         toggleBtn.addEventListener('click', () => {
//             isRotating = !isRotating;
//             console.log('Animation toggled:', isRotating ? 'Playing' : 'Paused');
            
//             if (isRotating) {
//                 dataCube.style.animationPlayState = 'running';
//                 toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
//                 toggleBtn.setAttribute('title', 'Pause Animation');
//             } else {
//                 dataCube.style.animationPlayState = 'paused';
//                 toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
//                 toggleBtn.setAttribute('title', 'Play Animation');
//             }
//         });
//     }
    
//     // Change theme/colors button functionality
//     if (themeBtn) {
//         let colorTheme = 0;
//         const themes = [
//             ['#2563eb', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899'], // Default
//             ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'], // Red-Blue
//             ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'], // Purple-Pink
//             ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899']  // Green-Orange
//         ];
        
//         themeBtn.addEventListener('click', () => {
//             colorTheme = (colorTheme + 1) % themes.length;
//             const colors = themes[colorTheme];
//             console.log('Changing color theme to:', colorTheme);
            
//             // Update cube faces
//             const cubeFaces = document.querySelectorAll('.cube-face');
//             cubeFaces.forEach((face, index) => {
//                 if (index < colors.length) {
//                     const baseColor = colors[index];
//                     const lightColor = lightenColor(baseColor, 30);
//                     face.style.background = `linear-gradient(135deg, ${baseColor}, ${lightColor})`;
//                 }
//             });
            
//             // Update data points
//             dataPoints.forEach((point, index) => {
//                 if (index < colors.length) {
//                     point.style.setProperty('--color', colors[index]);
//                 }
//             });
            
//             // Add visual feedback
//             themeBtn.style.transform = 'rotate(180deg)';
//             setTimeout(() => {
//                 themeBtn.style.transform = 'rotate(0deg)';
//             }, 300);
//         });
//     }
    
//     // Data point interactions
//     if (dataPoints.length > 0) {
//         dataPoints.forEach(point => {
//             point.addEventListener('click', (e) => {
//                 e.stopPropagation();
//                 console.log('Data point clicked');
                
//                 // Add pulse animation
//                 point.style.animation = 'none';
//                 point.style.transform = 'scale(2)';
                
//                 setTimeout(() => {
//                     point.style.animation = '';
//                     point.style.transform = '';
//                 }, 300);
                
//                 // Show tooltip with technology info
//                 const icon = point.querySelector('i');
//                 if (icon) {
//                     const iconClass = Array.from(icon.classList)
//                         .find(cls => cls.startsWith('fa-'));
                    
//                     const messages = {
//                         'fa-python': 'Python: Data analysis, Machine Learning, Automation',
//                         'fa-r-project': 'R Programming: Statistical analysis, Data visualization',
//                         'fa-database': 'SQL Databases: MySQL, PostgreSQL, Data management',
//                         'fa-chart-pie': 'Power BI: Business intelligence, Interactive dashboards',
//                         'fa-robot': 'Machine Learning: Predictive modeling, AI algorithms'
//                     };
                    
//                     if (iconClass && messages[iconClass]) {
//                         showNotification(messages[iconClass], 'info');
//                     }
//                 }
//             });
            
//             point.addEventListener('mouseenter', () => {
//                 point.style.zIndex = '100';
//                 point.style.transform = 'scale(1.2)';
//             });
            
//             point.addEventListener('mouseleave', () => {
//                 point.style.zIndex = '';
//                 point.style.transform = '';
//             });
//         });
//     }
    
//     // Add hover effect for cube
//     dataCube.addEventListener('mouseenter', () => {
//         dataCube.style.cursor = 'grab';
//     });
    
//     dataCube.addEventListener('mouseleave', () => {
//         if (!mouseDown) {
//             dataCube.style.cursor = 'default';
//         }
//     });
    
//     console.log('3D Visualization initialized successfully');
// }

// // Helper function to lighten colors
// function lightenColor(color, percent) {
//     const num = parseInt(color.replace("#", ""), 16);
//     const amt = Math.round(2.55 * percent);
//     const R = (num >> 16) + amt;
//     const G = (num >> 8 & 0x00FF) + amt;
//     const B = (num & 0x0000FF) + amt;
    
//     return "#" + (
//         0x1000000 +
//         (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
//         (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
//         (B < 255 ? B < 1 ? 0 : B : 255)
//     ).toString(16).slice(1);
// }

// // ====== THEME TOGGLE ======
// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     const isDarkMode = document.body.classList.contains('dark-mode');
//     localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
//     console.log(`Switched to ${isDarkMode ? 'dark' : 'light'} mode`);
//     announceToScreenReader(`Switched to ${isDarkMode ? 'dark' : 'light'} mode`);
// });

// // ====== MOBILE MENU ======
// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     const isOpen = navLinks.classList.contains('active');
//     menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
//     menuToggle.setAttribute('aria-expanded', isOpen);
    
//     if (isOpen) {
//         trapFocus(navLinks);
//     }
// });

// // Close mobile menu when clicking a link
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.classList.remove('active');
//         menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
//         menuToggle.setAttribute('aria-expanded', 'false');
//     });
// });

// // ====== SMOOTH SCROLLING ======
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if(targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if(targetElement) {
//             navLinks.classList.remove('active');
//             menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
//             menuToggle.setAttribute('aria-expanded', 'false');
            
//             window.scrollTo({
//                 top: targetElement.offsetTop - 80,
//                 behavior: 'smooth'
//             });
            
//             history.pushState(null, null, targetId);
//         }
//     });
// });

// // ====== NAVBAR SCROLL EFFECT ======
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
    
//     if (window.scrollY > 300) {
//         backToTop.classList.add('visible');
//     } else {
//         backToTop.classList.remove('visible');
//     }
    
//     updateActiveNavLink();
// });

// // ====== BACK TO TOP ======
// backToTop.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
//     document.querySelector('.skip-to-content').focus();
// });

// // ====== CONTACT FORM ======
// if (messageForm) {
//     messageForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         const name = this.querySelector('input[type="text"]').value;
//         const email = this.querySelector('input[type="email"]').value;
//         const subject = this.querySelectorAll('input[type="text"]')[1].value;
//         const message = this.querySelector('textarea').value;
        
//         if (!name || !email || !message || !subject) {
//             showNotification('Please fill in all fields', 'error');
//             this.querySelector('input[type="text"]').focus();
//             return;
//         }
        
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             showNotification('Please enter a valid email address', 'error');
//             this.querySelector('input[type="email"]').focus();
//             return;
//         }
        
//         const submitBtn = this.querySelector('button[type="submit"]');
//         const originalText = submitBtn.innerHTML;
//         submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//         submitBtn.disabled = true;
        
//         setTimeout(() => {
//             showNotification(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`, 'success');
//             this.reset();
//             submitBtn.innerHTML = originalText;
//             submitBtn.disabled = false;
//             console.log('Contact form submission:', { name, email, subject, message });
//             announceToScreenReader(`Thank you ${name}, your message has been sent successfully`);
//         }, 1500);
//     });
// }

// // ====== PROJECT FILTERING ======
// if (projectFilters) {
//     projectFilters.addEventListener('click', (e) => {
//         if (!e.target.classList.contains('filter-btn')) return;
        
//         document.querySelectorAll('.filter-btn').forEach(btn => {
//             btn.classList.remove('active');
//             btn.setAttribute('aria-pressed', 'false');
//         });
//         e.target.classList.add('active');
//         e.target.setAttribute('aria-pressed', 'true');
        
//         const filter = e.target.dataset.filter;
//         filterProjects(filter);
//         announceToScreenReader(`Showing ${filter === 'all' ? 'all projects' : filter + ' projects'}`);
//     });
// }

// function filterProjects(filter) {
//     let visibleCount = 0;
    
//     projectCards.forEach(card => {
//         const categories = card.dataset.categories.split(' ');
        
//         if (filter === 'all' || categories.includes(filter)) {
//             card.classList.remove('hidden');
//             card.style.display = 'flex';
//             visibleCount++;
//         } else {
//             card.classList.add('hidden');
//             setTimeout(() => {
//                 card.style.display = 'none';
//             }, 400);
//         }
//     });
    
//     projectCount.textContent = visibleCount;
// }

// // ====== PROJECT MODALS ======
// viewDetailsBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         const projectId = btn.getAttribute('data-project');
//         const modal = document.getElementById(`projectModal${projectId}`);
        
//         if (modal) {
//             openModal(modal);
//         }
//     });
// });

// // Resume Preview Button
// if (previewResume) {
//     previewResume.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (resumePreviewModal) {
//             openModal(resumePreviewModal);
//         }
//     });
// }

// // Close modal with close button
// modalCloses.forEach(closeBtn => {
//     closeBtn.addEventListener('click', () => {
//         closeCurrentModal();
//     });
// });

// // Close modal with overlay click
// modalOverlays.forEach(overlay => {
//     overlay.addEventListener('click', () => {
//         closeCurrentModal();
//     });
// });

// // Close modal with Escape key
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//         closeCurrentModal();
        
//         if (navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//             menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
//             menuToggle.setAttribute('aria-expanded', 'false');
//         }
//     }
    
//     if (e.ctrlKey && e.key === 't') {
//         e.preventDefault();
//         themeToggle.click();
//     }
// });

// function openModal(modal) {
//     closeCurrentModal();
//     modal.classList.add('active');
//     modal.setAttribute('aria-hidden', 'false');
//     trapFocus(modal);
//     document.body.style.overflow = 'hidden';
//     announceToScreenReader(`Opened ${modal.querySelector('.modal-title').textContent}`);
// }

// function closeCurrentModal() {
//     const activeModal = document.querySelector('.modal.active');
//     if (activeModal) {
//         activeModal.classList.remove('active');
//         activeModal.setAttribute('aria-hidden', 'true');
//         document.body.style.overflow = '';
        
//         const lastFocused = document.activeElement;
//         if (lastFocused && lastFocused.classList.contains('view-details-btn')) {
//             setTimeout(() => lastFocused.focus(), 100);
//         }
        
//         announceToScreenReader('Modal closed');
//     }
// }

// // ====== SKILL BAR ANIMATIONS ======
// let skillBarsAnimated = false;

// function animateSkillBars() {
//     if (skillBarsAnimated) return;
    
//     const skillLevels = document.querySelectorAll('.skill-level');
    
//     // First, reset all skill bars to 0 width
//     skillLevels.forEach(level => {
//         level.style.width = '0';
//     });
    
//     // Force reflow
//     void document.querySelector('.skills').offsetHeight;
    
//     // Then animate each skill bar with delays
//     skillLevels.forEach((level, index) => {
//         setTimeout(() => {
//             const targetWidth = getComputedStyle(level).getPropertyValue('--target-width') || 
//                                level.getAttribute('data-width') || 
//                                '90%';
            
//             level.style.transition = 'width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
//             level.style.width = targetWidth;
//         }, index * 200); // Staggered animation
//     });
    
//     skillBarsAnimated = true;
// }

// function animateStatistics() {
//     const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
//     statNumbers.forEach(stat => {
//         const target = parseInt(stat.getAttribute('data-count'));
//         const duration = 2000;
//         const increment = target / (duration / 16);
        
//         let current = 0;
//         const timer = setInterval(() => {
//             current += increment;
//             if (current >= target) {
//                 current = target;
//                 clearInterval(timer);
//             }
//             stat.textContent = Math.floor(current);
//         }, 16);
//     });
// }

// // Intersection Observer for Skills Section
// const skillsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animateSkillBars();
//             animateStatistics();
//             skillsObserver.unobserve(entry.target);
//         }
//     });
// }, {
//     threshold: 0.3,
//     rootMargin: '0px 0px -50px 0px'
// });

// // ====== RESUME DOWNLOAD ======
// if (downloadResume) {
//     downloadResume.addEventListener('click', (e) => {
//         console.log('Resume download initiated');
//         announceToScreenReader('Resume download started');
//     });
// }

// // Track all downloads
// document.querySelectorAll('a[download]').forEach(link => {
//     link.addEventListener('click', function() {
//         const fileName = this.download || this.href.split('/').pop();
//         console.log(`Downloading: ${fileName}`);
//     });
// });

// // ====== NOTIFICATION SYSTEM ======
// function showNotification(message, type = 'info') {
//     const existingNotification = document.querySelector('.notification');
//     if (existingNotification) {
//         existingNotification.remove();
//     }
    
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type}`;
//     notification.setAttribute('role', 'alert');
//     notification.setAttribute('aria-live', 'assertive');
//     notification.innerHTML = `
//         <div class="notification-content">
//             <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
//             <span>${message}</span>
//         </div>
//         <button class="notification-close" aria-label="Close notification">
//             <i class="fas fa-times"></i>
//         </button>
//     `;
    
//     document.body.appendChild(notification);
    
//     setTimeout(() => {
//         notification.classList.add('show');
//     }, 10);
    
//     const autoRemove = setTimeout(() => {
//         notification.classList.remove('show');
//         setTimeout(() => {
//             if (notification.parentNode) {
//                 notification.remove();
//             }
//         }, 300);
//     }, 5000);
    
//     notification.querySelector('.notification-close').addEventListener('click', () => {
//         clearTimeout(autoRemove);
//         notification.classList.remove('show');
//         setTimeout(() => {
//             if (notification.parentNode) {
//                 notification.remove();
//             }
//         }, 300);
//     });
    
//     announceToScreenReader(message);
// }

// // ====== ACTIVE NAV LINK UPDATE ======
// function updateActiveNavLink() {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.nav-links a');
    
//     let currentSection = '';
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100;
//         const sectionHeight = section.clientHeight;
        
//         if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//             currentSection = section.getAttribute('id');
//         }
//     });
    
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${currentSection}`) {
//             link.classList.add('active');
//         }
//     });
// }

// // ====== INITIALIZE PROJECTS FILTER ======
// function initProjectsFilter() {
//     projectCount.textContent = document.querySelectorAll('.project-card').length;
    
//     projectCards.forEach((card, index) => {
//         card.style.animationDelay = `${index * 0.1}s`;
//     });
// }

// // ====== RESUME SECTION ANIMATION ======
// const resumeObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const resumeCard = document.querySelector('.resume-card');
//             const resumeHighlights = document.querySelector('.resume-highlights');
            
//             if (resumeCard) {
//                 resumeCard.style.animation = 'fadeInUp 0.8s ease forwards';
//                 resumeCard.style.opacity = '0';
//             }
            
//             if (resumeHighlights) {
//                 setTimeout(() => {
//                     resumeHighlights.style.animation = 'fadeInUp 0.8s ease 0.2s forwards';
//                     resumeHighlights.style.opacity = '0';
//                 }, 200);
//             }
            
//             resumeObserver.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.3 });

// // ====== PERFORMANCE MEASUREMENT AND LOADING ======
// function hideLoadingOverlay() {
//     const pageLoadEnd = performance.now();
//     const loadDuration = Math.round(pageLoadEnd - pageLoadStart);
    
//     if (loadTime) {
//         loadTime.textContent = loadDuration;
//     }
    
//     setTimeout(() => {
//         loadingOverlay.classList.add('hidden');
//         console.log(`Portfolio loaded in ${loadDuration}ms`);
//         console.log(`Theme: ${document.body.classList.contains('dark-mode') ? 'Dark' : 'Light'} mode`);
//         console.log(`Projects loaded: ${projectCards.length}`);
//         console.log(`Modals initialized: ${modals.length}`);
//         announceToScreenReader('Portfolio loaded successfully');
//     }, 500);
// }

// // ====== ACCESSIBILITY FUNCTIONS ======
// function trapFocus(element) {
//     const focusableElements = element.querySelectorAll(
//         'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
//     );
    
//     if (focusableElements.length === 0) return;
    
//     const firstFocusableElement = focusableElements[0];
//     const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
//     element.addEventListener('keydown', function(e) {
//         if (e.key !== 'Tab') return;
        
//         if (e.shiftKey) {
//             if (document.activeElement === firstFocusableElement) {
//                 lastFocusableElement.focus();
//                 e.preventDefault();
//             }
//         } else {
//             if (document.activeElement === lastFocusableElement) {
//                 firstFocusableElement.focus();
//                 e.preventDefault();
//             }
//         }
//     });
    
//     setTimeout(() => firstFocusableElement.focus(), 100);
// }

// function announceToScreenReader(message) {
//     const announcement = document.createElement('div');
//     announcement.setAttribute('aria-live', 'polite');
//     announcement.setAttribute('aria-atomic', 'true');
//     announcement.classList.add('sr-only');
//     announcement.textContent = message;
    
//     document.body.appendChild(announcement);
    
//     setTimeout(() => {
//         if (announcement.parentNode) {
//             announcement.parentNode.removeChild(announcement);
//         }
//     }, 1000);
// }

// // Add CSS for screen reader only class
// const srOnlyCSS = `
//     .sr-only {
//         position: absolute;
//         width: 1px;
//         height: 1px;
//         padding: 0;
//         margin: -1px;
//         overflow: hidden;
//         clip: rect(0, 0, 0, 0);
//         white-space: nowrap;
//         border: 0;
//     }
// `;

// const styleSheet = document.createElement('style');
// styleSheet.textContent = srOnlyCSS;
// document.head.appendChild(styleSheet);

// // ====== PROJECT CARD INTERACTIVITY ======
// document.querySelectorAll('.project-card').forEach(card => {
//     card.addEventListener('mouseenter', function() {
//         this.style.transform = 'translateY(-10px)';
//     });
    
//     card.addEventListener('mouseleave', function() {
//         this.style.transform = 'translateY(0)';
//     });
    
//     card.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             const viewDetailsBtn = card.querySelector('.view-details-btn');
//             if (viewDetailsBtn) {
//                 viewDetailsBtn.click();
//             }
//         }
//     });
// });

// // ====== INITIALIZE EVERYTHING ======
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM Content Loaded - Initializing...');
    
//     // Initialize 3D Visualization
//     init3DVisualization();
    
//     // Initialize other components
//     initProjectsFilter();
//     updateActiveNavLink();
    
//     document.querySelectorAll('.filter-btn').forEach(btn => {
//         btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
//     });
    
//     menuToggle.setAttribute('aria-expanded', 'false');
    
//     // Observe resume section
//     const resumeSection = document.querySelector('.resume');
//     if (resumeSection) {
//         resumeObserver.observe(resumeSection);
//     }
    
//     // Observe skills section
//     const skillsSection = document.querySelector('#skills');
//     if (skillsSection) {
//         skillsObserver.observe(skillsSection);
//     }
    
//     // Hide loading overlay
//     window.addEventListener('load', hideLoadingOverlay);
//     setTimeout(hideLoadingOverlay, 2000);
// });

// // ====== ENHANCED CONSOLE GREETING ======
// console.log("%c🚀 Welcome to Ravi Manikandan's Data Science Portfolio!", "color: #2563eb; font-size: 18px; font-weight: bold;");
// console.log("%c📊 Data Science | Business Analytics | Machine Learning", "color: #64748b; font-size: 14px;");
// console.log("%c💻 Built with HTML, CSS, and JavaScript", "color: #10b981;");
// console.log("%c🔧 Features: Dark Mode | Project Filtering | Modals | Animations | SEO | Accessibility", "color: #f59e0b;");
// console.log("%c📧 Contact: ravimanikandanm@gmail.com | 📱 9384710789", "color: #8b5cf6;");
// console.log("%c🎮 Interactive 3D Visualization: Try dragging the cube!", "color: #ec4899;");
// console.log("%c🔍 Skill Bars: Animate on scroll to Skills section", "color: #3b82f6;");

// // ====== ADDITIONAL PERFORMANCE OPTIMIZATIONS ======
// if ('loading' in HTMLImageElement.prototype) {
//     const images = document.querySelectorAll('img[loading="lazy"]');
//     images.forEach(img => {
//         img.src = img.dataset.src;
//     });
// }

// function preloadCriticalResources() {
//     const resources = [
//         'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500&display=swap',
//         'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
//     ];
    
//     resources.forEach(resource => {
//         const link = document.createElement('link');
//         link.rel = 'preload';
//         link.as = 'style';
//         link.href = resource;
//         document.head.appendChild(link);
//     });
// }

// document.addEventListener('DOMContentLoaded', preloadCriticalResources);

// Enhanced Portfolio JavaScript
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        console.log("%c🚀 Welcome to Ravi Manikandan's Data Science Portfolio!", "color: #2563eb; font-size: 18px; font-weight: bold;");
        console.log("%c📊 Data Science | Business Analytics | Machine Learning", "color: #64748b; font-size: 14px;");
        console.log("%c💻 Built with HTML, CSS, and JavaScript", "color: #10b981;");
        console.log("%c🔧 Features: Dark Mode | Project Filtering | Modals | Animations | SEO | Accessibility", "color: #f59e0b;");
        console.log("%c📧 Contact: ravimanikandanm@gmail.com | 📱 9384710789", "color: #8b5cf6;");
        
        this.setupElements();
        this.setupEventListeners();
        this.setupObservers();
        this.initialize3DVisualization();
        this.preloadCriticalResources();
        this.measurePerformance();
    }

    setupElements() {
        // DOM Elements
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.querySelector('.nav-links');
        this.backToTop = document.getElementById('backToTop');
        this.currentYear = document.getElementById('currentYear');
        this.nav = document.querySelector('nav');
        this.messageForm = document.getElementById('messageForm');
        this.themeToggle = document.getElementById('themeToggle');
        this.projectFilters = document.getElementById('projectFilters');
        this.projectCards = document.querySelectorAll('.project-card');
        this.projectCount = document.getElementById('projectCount');
        this.downloadResume = document.getElementById('downloadResume');
        this.loadingOverlay = document.getElementById('loadingOverlay');
        this.loadTime = document.getElementById('loadTime');
        
        // 3D Visualization Elements
        this.dataCube = document.querySelector('.data-cube');
        this.toggleBtn = document.getElementById('toggleAnimation');
        this.dataPoints = document.querySelectorAll('.data-point');
        
        // Modal Elements
        this.viewDetailsBtns = document.querySelectorAll('.view-details-btn');
        this.modals = document.querySelectorAll('.modal');
        this.modalCloses = document.querySelectorAll('.modal-close');
        this.modalOverlays = document.querySelectorAll('.modal-overlay');
        this.resumePreviewModal = document.getElementById('resumePreviewModal');
        
        // Performance measurement
        this.pageLoadStart = performance.now();
        
        // Set current year
        if (this.currentYear) {
            this.currentYear.textContent = new Date().getFullYear();
        }
    }

    setupEventListeners() {
        // Theme toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Mobile menu
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleSmoothScroll(e, anchor));
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => this.handleScroll());

        // Back to top
        if (this.backToTop) {
            this.backToTop.addEventListener('click', () => this.scrollToTop());
        }

        // Contact form
        if (this.messageForm) {
            this.messageForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Project filtering
        if (this.projectFilters) {
            this.projectFilters.addEventListener('click', (e) => this.handleProjectFilter(e));
        }

        // Project modals
        this.viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.openProjectModal(e, btn));
        });

        // Close modal with close button
        this.modalCloses.forEach(closeBtn => {
            closeBtn.addEventListener('click', () => this.closeCurrentModal());
        });

        // Close modal with overlay click
        this.modalOverlays.forEach(overlay => {
            overlay.addEventListener('click', () => this.closeCurrentModal());
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));

        // Resume download
        if (this.downloadResume) {
            this.downloadResume.addEventListener('click', () => this.trackDownload());
        }

        // Track all downloads
        document.querySelectorAll('a[download]').forEach(link => {
            link.addEventListener('click', () => this.trackDownload(link));
        });

        // Project card keyboard navigation
        this.projectCards.forEach(card => {
            card.addEventListener('keydown', (e) => this.handleProjectCardKeyDown(e, card));
        });

        // Initialize theme
        this.initTheme();
    }

    setupObservers() {
        // Intersection Observer for Skills Section
        const skillsSection = document.querySelector('#skills');
        if (skillsSection) {
            const skillsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateSkillBars();
                        this.animateStatistics();
                        skillsObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            });
            skillsObserver.observe(skillsSection);
        }

        // Intersection Observer for Resume Section
        const resumeSection = document.querySelector('.resume');
        if (resumeSection) {
            const resumeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateResumeSection();
                        resumeObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            resumeObserver.observe(resumeSection);
        }

        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('loading');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    initialize3DVisualization() {
        if (!this.dataCube) return;
        
        // Cube rotation variables
        let isRotating = true;
        let rotationX = -15;
        let rotationY = -15;
        let mouseDown = false;
        let lastMouseX = 0;
        let lastMouseY = 0;
        
        // Manual rotation with mouse
        this.dataCube.addEventListener('mousedown', (e) => {
            mouseDown = true;
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
            this.dataCube.style.cursor = 'grabbing';
            this.dataCube.style.animationPlayState = 'paused';
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!mouseDown) return;
            
            const deltaX = e.clientX - lastMouseX;
            const deltaY = e.clientY - lastMouseY;
            
            rotationY += deltaX * 0.5;
            rotationX -= deltaY * 0.5;
            
            this.dataCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        });
        
        document.addEventListener('mouseup', () => {
            mouseDown = false;
            this.dataCube.style.cursor = 'grab';
            if (isRotating) {
                this.dataCube.style.animationPlayState = 'running';
            }
        });
        
        // Touch support for mobile
        this.dataCube.addEventListener('touchstart', (e) => {
            mouseDown = true;
            lastMouseX = e.touches[0].clientX;
            lastMouseY = e.touches[0].clientY;
            this.dataCube.style.animationPlayState = 'paused';
            e.preventDefault();
        });
        
        document.addEventListener('touchmove', (e) => {
            if (!mouseDown) return;
            
            const deltaX = e.touches[0].clientX - lastMouseX;
            const deltaY = e.touches[0].clientY - lastMouseY;
            
            rotationY += deltaX * 0.5;
            rotationX -= deltaY * 0.5;
            
            this.dataCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            
            lastMouseX = e.touches[0].clientX;
            lastMouseY = e.touches[0].clientY;
            e.preventDefault();
        });
        
        document.addEventListener('touchend', () => {
            mouseDown = false;
            if (isRotating) {
                this.dataCube.style.animationPlayState = 'running';
            }
        });
        
        // Toggle animation button functionality
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => {
                isRotating = !isRotating;
                
                if (isRotating) {
                    this.dataCube.style.animationPlayState = 'running';
                    this.toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    this.toggleBtn.setAttribute('title', 'Pause Animation');
                    this.toggleBtn.setAttribute('aria-label', 'Pause animation');
                } else {
                    this.dataCube.style.animationPlayState = 'paused';
                    this.toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
                    this.toggleBtn.setAttribute('title', 'Play Animation');
                    this.toggleBtn.setAttribute('aria-label', 'Play animation');
                }
            });
        }
        
        // Data point interactions
        if (this.dataPoints.length > 0) {
            this.dataPoints.forEach(point => {
                point.addEventListener('click', (e) => {
                    e.stopPropagation();
                    
                    // Add pulse animation
                    point.style.animation = 'none';
                    point.style.transform = 'scale(2)';
                    
                    setTimeout(() => {
                        point.style.animation = '';
                        point.style.transform = '';
                    }, 300);
                    
                    // Show tooltip with technology info
                    const icon = point.querySelector('i');
                    if (icon) {
                        const iconClass = Array.from(icon.classList)
                            .find(cls => cls.startsWith('fa-'));
                        
                        const messages = {
                            'fa-python': 'Python: Data analysis, Machine Learning, Automation',
                            'fa-r-project': 'R Programming: Statistical analysis, Data visualization',
                            'fa-database': 'SQL Databases: MySQL, PostgreSQL, Data management',
                            'fa-chart-pie': 'Power BI: Business intelligence, Interactive dashboards',
                            'fa-robot': 'Machine Learning: Predictive modeling, AI algorithms'
                        };
                        
                        if (iconClass && messages[iconClass]) {
                            this.showNotification(messages[iconClass], 'info');
                        }
                    }
                });
                
                point.addEventListener('mouseenter', () => {
                    point.style.zIndex = '100';
                    point.style.transform = 'scale(1.2)';
                });
                
                point.addEventListener('mouseleave', () => {
                    point.style.zIndex = '';
                    point.style.transform = '';
                });
            });
        }
        
        // Add hover effect for cube
        this.dataCube.addEventListener('mouseenter', () => {
            this.dataCube.style.cursor = 'grab';
        });
        
        this.dataCube.addEventListener('mouseleave', () => {
            if (!mouseDown) {
                this.dataCube.style.cursor = 'default';
            }
        });
    }

    // Theme Methods
    initTheme() {
        const currentTheme = localStorage.getItem('theme') || 
                           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    document.body.classList.add('dark-mode');
                } else {
                    document.body.classList.remove('dark-mode');
                }
            }
        });
    }

    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        this.showNotification(`Switched to ${isDarkMode ? 'dark' : 'light'} mode`, 'info');
        this.announceToScreenReader(`Switched to ${isDarkMode ? 'dark' : 'light'} mode`);
        
        // Track theme change
        if (typeof gtag !== 'undefined') {
            gtag('event', 'theme_toggle', {
                'event_category': 'engagement',
                'event_label': isDarkMode ? 'dark' : 'light'
            });
        }
    }

    // Mobile Menu Methods
    toggleMobileMenu() {
        this.navLinks.classList.toggle('active');
        const isOpen = this.navLinks.classList.contains('active');
        this.menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        this.menuToggle.setAttribute('aria-expanded', isOpen);
        this.menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        
        if (isOpen) {
            this.trapFocus(this.navLinks);
        }
    }

    closeMobileMenu() {
        this.navLinks.classList.remove('active');
        this.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        this.menuToggle.setAttribute('aria-expanded', 'false');
        this.menuToggle.setAttribute('aria-label', 'Open menu');
    }

    // Smooth Scrolling
    handleSmoothScroll(e, anchor) {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            this.closeMobileMenu();
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update URL without page reload
            history.pushState(null, null, targetId);
            
            // Update active nav link
            this.updateActiveNavLink();
            
            // Announce to screen reader
            const sectionName = targetId.replace('#', '').replace('-', ' ');
            this.announceToScreenReader(`Navigated to ${sectionName} section`);
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.querySelector('.skip-to-content').focus();
    }

    // Scroll Handling
    handleScroll() {
        // Navbar scroll effect
        if (window.scrollY > 50) {
            this.nav.classList.add('scrolled');
        } else {
            this.nav.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        if (window.scrollY > 300) {
            this.backToTop.classList.add('visible');
        } else {
            this.backToTop.classList.remove('visible');
        }
        
        // Update active nav link
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Form Handling
    async handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const subject = form.querySelectorAll('input[type="text"]')[1].value;
        const message = form.querySelector('textarea').value;
        
        // Validation
        if (!name || !email || !message || !subject) {
            this.showNotification('Please fill in all fields', 'error');
            form.querySelector('input[type="text"]').focus();
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            form.querySelector('input[type="email"]').focus();
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Store in IndexedDB for offline support
            if ('indexedDB' in window) {
                await this.storeFormSubmission({ name, email, subject, message });
            }
            
            this.showNotification(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`, 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Track form submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'contact_form_submit', {
                    'event_category': 'engagement',
                    'event_label': 'Contact Form'
                });
            }
            
            this.announceToScreenReader(`Thank you ${name}, your message has been sent successfully`);
        } catch (error) {
            this.showNotification('Failed to send message. Please try again.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async storeFormSubmission(data) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('FormSubmissions', 1);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['pending-submissions'], 'readwrite');
                const store = transaction.objectStore('pending-submissions');
                
                const submission = {
                    id: Date.now(),
                    data,
                    timestamp: new Date().toISOString()
                };
                
                const addRequest = store.add(submission);
                addRequest.onsuccess = () => {
                    // Register background sync
                    if ('serviceWorker' in navigator && 'SyncManager' in window) {
                        navigator.serviceWorker.ready.then(registration => {
                            registration.sync.register('submit-contact-form');
                        });
                    }
                    resolve();
                };
                addRequest.onerror = () => reject(addRequest.error);
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('pending-submissions')) {
                    db.createObjectStore('pending-submissions', { keyPath: 'id' });
                }
            };
        });
    }

    // Project Filtering
    handleProjectFilter(e) {
        if (!e.target.classList.contains('filter-btn')) return;
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        e.target.classList.add('active');
        e.target.setAttribute('aria-pressed', 'true');
        
        const filter = e.target.dataset.filter;
        this.filterProjects(filter);
        
        this.announceToScreenReader(`Showing ${filter === 'all' ? 'all projects' : filter + ' projects'}`);
        
        // Track filter usage
        if (typeof gtag !== 'undefined') {
            gtag('event', 'project_filter', {
                'event_category': 'engagement',
                'event_label': filter
            });
        }
    }

    filterProjects(filter) {
        let visibleCount = 0;
        
        this.projectCards.forEach(card => {
            const categories = card.dataset.categories.split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                card.classList.remove('hidden');
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400);
            }
        });
        
        if (this.projectCount) {
            this.projectCount.textContent = visibleCount;
        }
    }

    // Modal Methods
    openProjectModal(e, btn) {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project');
        const modal = document.getElementById(`projectModal${projectId}`);
        
        if (modal) {
            this.closeCurrentModal();
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            this.trapFocus(modal);
            
            const modalTitle = modal.querySelector('.modal-title').textContent;
            this.announceToScreenReader(`Opened ${modalTitle}`);
            
            // Track modal opening
            if (typeof gtag !== 'undefined') {
                gtag('event', 'view_project_details', {
                    'event_category': 'engagement',
                    'event_label': modalTitle
                });
            }
        }
    }

    closeCurrentModal() {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            activeModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            
            const lastFocused = document.activeElement;
            if (lastFocused && lastFocused.classList.contains('view-details-btn')) {
                setTimeout(() => lastFocused.focus(), 100);
            }
            
            this.announceToScreenReader('Modal closed');
        }
    }

    // Keyboard Navigation
    handleKeyDown(e) {
        // Close modal with Escape key
        if (e.key === 'Escape') {
            this.closeCurrentModal();
            
            if (this.navLinks.classList.contains('active')) {
                this.closeMobileMenu();
            }
        }
        
        // Theme toggle shortcut (Ctrl/Cmd + T)
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            this.themeToggle.click();
        }
        
        // Navigate projects with arrow keys when focused
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const focusedCard = document.activeElement.closest('.project-card');
            if (focusedCard) {
                e.preventDefault();
                this.navigateProjects(focusedCard, e.key);
            }
        }
    }

    navigateProjects(currentCard, direction) {
        const cards = Array.from(this.projectCards).filter(card => 
            !card.classList.contains('hidden') && card.style.display !== 'none'
        );
        
        const currentIndex = cards.indexOf(currentCard);
        let nextIndex;
        
        if (direction === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % cards.length;
        } else if (direction === 'ArrowLeft') {
            nextIndex = (currentIndex - 1 + cards.length) % cards.length;
        }
        
        if (cards[nextIndex]) {
            cards[nextIndex].focus();
            this.announceToScreenReader(`Project ${nextIndex + 1} of ${cards.length}`);
        }
    }

    handleProjectCardKeyDown(e, card) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const viewDetailsBtn = card.querySelector('.view-details-btn');
            if (viewDetailsBtn) {
                viewDetailsBtn.click();
            }
        }
    }

    // Animation Methods
    animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        
        // Reset all skill bars to 0 width
        skillLevels.forEach(level => {
            level.style.width = '0';
        });
        
        // Force reflow
        void document.querySelector('.skills').offsetHeight;
        
        // Animate each skill bar with delays
        skillLevels.forEach((level, index) => {
            setTimeout(() => {
                const targetWidth = level.getAttribute('data-width') || '90%';
                level.style.transition = 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
                level.style.width = targetWidth;
            }, index * 200);
        });
    }

    animateStatistics() {
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }

    animateResumeSection() {
        const resumeCard = document.querySelector('.resume-card');
        const resumeHighlights = document.querySelector('.resume-highlights');
        
        if (resumeCard) {
            resumeCard.style.animation = 'fadeInUp 0.8s ease forwards';
            resumeCard.style.opacity = '0';
        }
        
        if (resumeHighlights) {
            setTimeout(() => {
                resumeHighlights.style.animation = 'fadeInUp 0.8s ease 0.2s forwards';
                resumeHighlights.style.opacity = '0';
            }, 200);
        }
    }

    // Notification System
    showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        const autoRemove = setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
        
        notification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(autoRemove);
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        });
        
        this.announceToScreenReader(message);
    }

    // Accessibility Methods
    trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;
        
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        
        const handleTabKey = (e) => {
            if (e.key !== 'Tab') return;
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        };
        
        element.addEventListener('keydown', handleTabKey);
        
        // Store the handler for cleanup
        element._trapFocusHandler = handleTabKey;
        
        setTimeout(() => firstFocusableElement.focus(), 100);
    }

    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.classList.add('sr-only');
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (announcement.parentNode) {
                announcement.parentNode.removeChild(announcement);
            }
        }, 1000);
    }

    // Performance Methods
    measurePerformance() {
        const pageLoadEnd = performance.now();
        const loadDuration = Math.round(pageLoadEnd - this.pageLoadStart);
        
        if (this.loadTime) {
            this.loadTime.textContent = loadDuration;
        }
        
        // Hide loading overlay
        setTimeout(() => {
            if (this.loadingOverlay) {
                this.loadingOverlay.classList.add('hidden');
            }
            console.log(`Portfolio loaded in ${loadDuration}ms`);
            this.announceToScreenReader('Portfolio loaded successfully');
            
            // Send performance metric to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'timing_complete', {
                    'name': 'load',
                    'value': loadDuration,
                    'event_category': 'Performance'
                });
            }
        }, 500);
    }

    preloadCriticalResources() {
        const resources = [
            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            '/style.css',
            '/script.js'
        ];
        
        resources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = resource.endsWith('.js') ? 'script' : 'style';
            link.href = resource;
            
            if (link.as === 'script') {
                link.crossOrigin = 'anonymous';
            }
            
            document.head.appendChild(link);
        });
    }

    // Tracking Methods
    trackDownload(link = null) {
        const fileName = link ? 
            (link.download || link.href.split('/').pop()) : 
            'Ravi_Manikandan_Resume.pdf';
        
        console.log(`Downloading: ${fileName}`);
        this.announceToScreenReader(`Downloading ${fileName}`);
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'engagement',
                'event_label': fileName,
                'value': 1
            });
        }
    }

    // Initialize projects filter
    initProjectsFilter() {
        if (this.projectCount) {
            this.projectCount.textContent = this.projectCards.length;
        }
        
        this.projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new Portfolio();
    portfolio.initProjectsFilter();
    
    // Expose portfolio instance for debugging (optional)
    window.portfolio = portfolio;
});

// Load event for final optimizations
window.addEventListener('load', () => {
    // Remove loading overlay if still visible
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay && !loadingOverlay.classList.contains('hidden')) {
        loadingOverlay.classList.add('hidden');
    }
    
    // Enable service worker background sync for forms
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then(registration => {
            console.log('Service Worker ready for background sync');
        });
    }
});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}