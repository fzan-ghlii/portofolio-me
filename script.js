document.addEventListener('DOMContentLoaded', () => {

    // --- Fungsionalitas Dasar ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => { 
        hamburger.classList.toggle("active"); 
        navMenu.classList.toggle("active"); 
    });
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => { 
        hamburger.classList.remove("active"); 
        navMenu.classList.remove("active"); 
    }));

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); });

    new Typed('.profession-text', { strings: ['Web Developer', 'Fintech Enthusiast', 'Capital Market Analyst'], typeSpeed: 100, backSpeed: 60, loop: true });

    // --- Observer untuk Animasi Fade-in ---
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                entry.target.classList.add('visible'); 
                fadeObserver.unobserve(entry.target); 
            } 
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(el => { fadeObserver.observe(el); });
    
    const modal = document.getElementById("portfolio-modal"), descButtons = document.querySelectorAll(".btn-desc"), closeButton = document.querySelector(".close-button"), modalDescription = document.getElementById("modal-description");
    descButtons.forEach(button => { button.addEventListener("click", () => { modalDescription.textContent = button.getAttribute("data-desc"); modal.style.display = "block"; }); });
    closeButton.addEventListener("click", () => { modal.style.display = "none"; });
    window.addEventListener("click", (event) => { if (event.target == modal) { modal.style.display = "none"; } });
    
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => { if (pageYOffset >= section.offsetTop - 150) { current = section.getAttribute('id'); } });
        navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href').includes(current)) { link.classList.add('active'); } });
    });

    // --- Fitur Light/Dark Mode ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        themeToggle.checked = (theme === 'dark');
    };

    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        applyTheme('dark');
    }

    themeToggle.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        applyTheme(theme);
        localStorage.setItem('theme', theme);
    });
});
