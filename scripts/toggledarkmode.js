const toggleBtn = document.getElementById('toggle-theme');
var darkicon = toggleBtn.getElementsByClassName("darkthemeicon")[0];

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Guardar preferencia en localStorage para que se mantenga al recargar
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    darkicon.classList.replace('fa-moon', 'fa-sun');
  } else {
    localStorage.setItem('theme', 'light');
    darkicon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Nota: la sincronización del icono al cargar la página (según el tema
// guardado en localStorage) se realiza en sectionhandler.js, ya que es
// ahí donde se lee y aplica la preferencia guardada al body.