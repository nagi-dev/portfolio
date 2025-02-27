// Fonction pour activer le smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// Fonction pour faire défiler vers le haut
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
    const target = document.querySelector(id);
    const offset = 30; // Ajuste cette valeur selon le décalage
    window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth',
    });
}



//hard skills contenue
document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.category-btn');
  const carousel = document.querySelector('#carousel-content');
  const pagination = document.querySelector('.pagination');
  const leftArrow = document.querySelector('.carousel-controls .material-symbols-outlined:nth-child(1)');
  const rightArrow = document.querySelector('.carousel-controls .material-symbols-outlined:nth-child(2)');

    const content = {
  langages: [
    { src: './img/langages/html.png', text: 'HTML' },
    { src: './img/langages/css.png', text: 'CSS' },
    { src: './img/langages/python.png', text: 'Python' },
    { src: './img/langages/mysql.png', text: 'SQL' },
	{ src: './img/langages/c++.png', text: 'C++' },
    { src: './img/langages/c.png', text: 'C' },
  ],

  outils: [
    { src: './img/outils/arduino.png', text: 'Arduino' },
    { src: './img/outils/stm32.png', text: 'STM32Cube' },
    { src: './img/outils/sublimetext.png', text: 'Sublime Text' },
    { src: './img/outils/vs_code.png', text: 'Visual Studio Code' },
    { src: './img/outils/matlab.png', text: 'Matlab'},
    { src: './img/outils/vivado.png', text: 'Vivado' },
  ],
  
  os: [
    { src: './img/os/linux.png', text: 'Linux' },
    { src: './img/os/windows.png', text: 'Windows' },
  ],
  
  langues: [
    { src: './img/langues/fr.png', text: 'Français' },
    { src: './img/langues/en.png', text: 'Anglais' },
  ],

   autres: [
  { src: './img/autres/autocad.png', text: 'AutoCAD' },
  { src: './img/autres/gantt.png', text: 'GanttProject' },
  { src: './img/autres/kicad.png', text: 'KiCad' },
  { src: './img/autres/ltspice.png', text: 'LTspice' },
  { src: './img/autres/maple.png', text: 'Maple' },
  { src: './img/autres/scilab.png', text: 'Scilab' },
  { src: './img/autres/siemens.png', text: 'Simatic Manager' },
],

};


  let currentCategory = 'langages';
  let currentIndex = 0;

  // Fonction de mise à jour du carrousel
function updateCarousel() {
    const items = content[currentCategory]
        .map((item, index) => `
            <div class="carousel-item ${index === currentIndex ? 'active' : ''}">
                <img src="${item.src}" alt="${item.text} Icon">
                <p>${item.text}</p>
            </div>
        `)
        .join('');
    carousel.innerHTML = items;
    updatePagination();
}

  // Mise à jour de la pagination
  function updatePagination() {
    const dots = Array(content[currentCategory].length)
      .fill(0)
      .map((_, index) =>
        `<span class="dot ${index === currentIndex ? 'active' : ''}"></span>`
      )
      .join('');
    pagination.innerHTML = dots;
  }

  // Gestion des boutons de catégorie
  categories.forEach(btn =>
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      currentIndex = 0;
      updateCarousel();
    })
  );

  // Gestion des flèches gauche/droite
  leftArrow.addEventListener('click', () => {
    currentIndex =
      currentIndex === 0 ? content[currentCategory].length - 1 : currentIndex - 1;
    updateCarousel();
  });

  rightArrow.addEventListener('click', () => {
    currentIndex =
      currentIndex === content[currentCategory].length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  updateCarousel(); // Initialiser le carrousel
});


document.addEventListener('DOMContentLoaded', () => {
    const btnProjetsPerso = document.getElementById('btn-projets-perso');
    const btnProjetsAcademiques = document.getElementById('btn-projets-academiques');

    // Masquer tous les contenus de projet par défaut
    document.querySelectorAll('.project-content').forEach(content => {
        content.style.display = 'none';
    });

    // Afficher le contenu pour les projets personnels
    btnProjetsPerso.addEventListener('click', () => {
        document.querySelectorAll('.project-content').forEach(content => {
            content.style.display = 'none'; // Masquer tous les contenus
        });
        document.getElementById('projets-perso').style.display = 'block'; // Afficher le contenu personnel
    });

    // Afficher le contenu pour les projets académiques
    btnProjetsAcademiques.addEventListener('click', () => {
        document.querySelectorAll('.project-content').forEach(content => {
            content.style.display = 'none'; // Masquer tous les contenus
        });
        document.getElementById('projets-academiques').style.display = 'block'; // Afficher le contenu académique
    });
});

function observeSections() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const icons = entry.target.querySelectorAll('.animate-icon');
                icons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.classList.add('visible');
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', observeSections);