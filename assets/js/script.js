    // Navigation Bar Toggle 
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });

        // Scroll to Top
        const scrollTopBtn = document.getElementById('scrollTop');
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        };
        scrollTopBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // Scroll Reveal
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        reveals.forEach(reveal => observer.observe(reveal));

        // Campus Search
        const searchInput = document.getElementById('campus-search');
        const campusGrid = document.getElementById('campus-grid');
        const uniCards = campusGrid.querySelectorAll('.uni-card');

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            uniCards.forEach(card => {
                const uniName = card.getAttribute('data-name').toLowerCase();
                if (searchTerm === '') {
                    // Show only default universities when search is empty
                    if (['ebsu', 'unn', 'ui', 'lasu', 'futa'].includes(uniName)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                } else {
                    // Show universities matching the search term
                    if (uniName.includes(searchTerm)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });

        // Hero Slideshow
        const hero = document.getElementById('hero');
        const images = [
            'assets/images/hero.jpg',
            'assets/images/campus.jpeg',
            'assets/images/lady.jpeg',
            'assets/images/praying.jpeg'
        ];
        let currentImageIndex = 0;

        function changeBackground() {
            hero.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${images[currentImageIndex]}') no-repeat center/cover`;
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        changeBackground(); // Set initial background
        setInterval(changeBackground, 5000); // Change every 5 seconds

        // Close Navigation Modal
        function closeNav() {
            document.getElementById('nav-toggle').checked = false;
        }

        // Close Modal on Outside Click
        document.addEventListener('click', (e) => {
            const navModal = document.querySelector('.nav-modal');
            const hamburger = document.querySelector('.hamburger');
            const navOverlay = document.querySelector('.nav-overlay');
            if (!navModal.contains(e.target) && !hamburger.contains(e.target) && document.getElementById('nav-toggle').checked) {
                closeNav();
            }
        });