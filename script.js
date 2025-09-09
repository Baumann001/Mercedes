const sectionTexts = {
    produtos: [
        "Fundada em 1926 (fusão da Daimler-Motoren-Gesellschaft e Benz & Cie).",
        "Criou o primeiro automóvel movido a gasolina (Karl Benz, 1886).",
        "Marca reconhecida mundialmente pelo luxo, inovação e segurança."
    ],
    interior: [
        "A Mercedes investe em digitalização e equipes híbridas.",
        "Fábricas inteligentes utilizam tecnologia avançada para otimizar a produção."
    ],
    exterior: [
        "Trabalho remoto e integração global são prioridades.",
        "Fornecedores conectados garantem eficiência na cadeia de suprimentos."
    ],
    digital: [
        "A Mercedes se enquadra na era digital com inovação constante.",
        "Uso de tecnologias digitais para melhorar produtos e processos."
    ],
    global: [
        "Presença global em diversos continentes.",
        "Organização estruturada para atender mercados locais e globais."
    ],
    geografia: [
        "Conceitos de globalização, território e meio ambiente são aplicados.",
        "Mobilidade de pessoas e tecnologias é fundamental para a empresa."
    ]
};

function typeWriter(element, texts, index = 0, charIndex = 0) {
    if (index >= texts.length) return;
    if (charIndex < texts[index].length) {
        element.textContent += texts[index].charAt(charIndex);
        setTimeout(() => typeWriter(element, texts, index, charIndex + 1), 50);
    } else {
        element.textContent += '\n';
        setTimeout(() => {
            element.textContent += '\n';
            typeWriter(element, texts, index + 1, 0);
        }, 500);
    }
}

document.querySelectorAll('.start-typing-btn').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        const sectionElement = document.getElementById(section);
        const imgElement = sectionElement.querySelector('.section-img');
        const textContainer = sectionElement.querySelector('.typing-text');

        // Hide all images and clear all typing-texts first
        document.querySelectorAll('.section-img').forEach(img => img.style.display = 'none');
        document.querySelectorAll('.typing-text').forEach(text => text.textContent = '');

        if (imgElement) {
            imgElement.style.display = 'block';
        }
        if (textContainer) {
            typeWriter(textContainer, sectionTexts[section]);
        }
    });
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
