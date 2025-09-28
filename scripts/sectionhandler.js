document.addEventListener("DOMContentLoaded", () => {

  // Dark Mode
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }


  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const navLinksMenu = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinksMenu.classList.toggle("active");
  });


  // TimeLine Animation
  const timeItems = document.querySelectorAll(".timeline-content");

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });
  timeItems.forEach(item => timelineObserver.observe(item));


  // Navbar Header
  const reveals = document.querySelectorAll(".reveal");
  const navLinks = document.querySelectorAll('.nav-links a');

  const options = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.id;

      // Animación de la sección
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }

      // Actualizar navbar solo si la sección está visible
      if (entry.isIntersecting && sectionId) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, options);

  reveals.forEach(reveal => observer.observe(reveal));

  // Manejo del click en navbar (scroll suave + active)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Actualizar active al hacer click
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

