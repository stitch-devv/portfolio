const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Открыть меню
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Закрыть меню при нажатии на крести
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});