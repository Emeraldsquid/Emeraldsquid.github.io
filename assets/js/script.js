const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.main-nav ul');

// Toggle the menu when the hamburger icon is clicked
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a link is clicked
const navLink = document.querySelectorAll('.main-nav ul li a');
navLink.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Corrected to use 'navLinks'
    });
});
