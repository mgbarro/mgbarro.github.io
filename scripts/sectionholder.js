// Obtener todos los enlaces de la navbar
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Evitar el salto instantáneo

      const targetId = link.getAttribute('href').substring(1); // elimina el #
      
      // Ocultar todas las secciones
      //sections.forEach(sec => sec.style.display = 'none');
      
      // Mostrar la sección seleccionada
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'flex';
      }

      // Actualizar clase "active" en la navbar
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
