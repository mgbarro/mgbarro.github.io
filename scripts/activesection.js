const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el salto instantáneo

    // Actualizar clase "active" en la navbar
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Desplazarse a la sección correspondiente
    const targetId = link.getAttribute('href').substring(1); // elimina el #
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
