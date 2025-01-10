document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const menuList = document.getElementById('menu-list');
    const dropdowns = document.querySelectorAll('.main-nav ul .dropdown');
    const navLinks = document.querySelectorAll(".main-nav ul li a");
    const navMenu = document.querySelector(".main-nav ul");

    // Close menu when any link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });

    // Close mobile menu if clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
            menuList.classList.remove('active');
        }
    });

    // Handle dropdowns for desktop and mobile
    dropdowns.forEach((dropdown) => {
        const parent = dropdown.parentNode.querySelector('a');

        parent.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevent default link behavior
                dropdown.classList.toggle('active'); // Toggle dropdown visibility
            }
        });

        // Close dropdown if clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !parent.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });

    // Overlay functionality
    const openOverlayBtn = document.getElementById("open-overlay");
    const closeOverlayBtn = document.getElementById("close-overlay");
    const overlay = document.getElementById("overlay");

    if (openOverlayBtn && closeOverlayBtn && overlay) {
        openOverlayBtn.addEventListener("click", (e) => {
            e.preventDefault();
            overlay.style.display = "flex";
        });

        closeOverlayBtn.addEventListener("click", () => {
            overlay.style.display = "none";
        });

        // Optional: Close overlay when clicking outside of it
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.style.display = "none";
            }
        });

        document.getElementById('open-overlay').addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'flex';
        });
        
        document.getElementById('close-overlay').addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'none';
        });
        
        document.getElementById('return-top').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('overlay').scrollTo({ top: 0, behavior: 'smooth' });
        });
        
    }
});

