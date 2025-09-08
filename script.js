const aboutText ="Fundada em 1926 (fusão da Daimler-Motoren-Gesellschaft e Benz & Cie).";
const aboutElement = document.querySelector('#about p');
let index = 0;

const aboutText   = "Criou-se o primeiro automóvel movido a gasolina (Karl Benz, 1886).";
const aboutElement = document.querySelector('#about p');
let index = 0;

const aboutText = "Marca reconhecida mundialmente pelo luxo, inovação e segurança.";
const aboutElement = document.querySelector('#about p');
let index = 0;

function typeWriter() {
    if (index < aboutText.length) {
        aboutElement.textContent += aboutText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    aboutElement.textContent = '';
    typeWriter();
});

// Mobile menu toggle
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'menu-toggle';
mobileMenuToggle.innerHTML = '☰';
mobileMenuToggle.style.display = 'none';

const nav = document.querySelector('nav');
nav.appendChild(mobileMenuToggle);

const navUl = document.querySelector('nav ul');

mobileMenuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

function checkScreenSize() {
    if (window.innerWidth <= 768) {
        mobileMenuToggle.style.display = 'block';
    } else {
        mobileMenuToggle.style.display = 'none';
        navUl.classList.remove('show');
    }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);

// Add some interactive effects
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-10px) scale(1.02)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0) scale(1)';
    });
});