//index page
window.addEventListener('load', function() {
    const enterButton = document.querySelector('.enter');
    setTimeout(() => {
        enterButton.style.opacity = 1;
    }, 2000); // Delay the "ENTER" button, 2 seconds
});

//hamburger menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

//homepage images
window.addEventListener('load', function() {
    const images = document.querySelectorAll('.welcome-img');

    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.remove('slide-in-right'); // Remove initial slide-in classes
            img.classList.add('slide-in'); // Add final slide-in class
        }, index * 500); // Delay each image's animation
    });
});