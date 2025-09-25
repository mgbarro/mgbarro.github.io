document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const options = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");   // entra en pantalla → anima
      } else {
        entry.target.classList.remove("active"); // sale de pantalla → vuelve al estado inicial
      }
    });
  }, options);

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
});
