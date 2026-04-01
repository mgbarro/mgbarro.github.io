const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Guardar preferencia en localStorage para que se mantenga al recargar
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.classList.replace('fa-moon', 'fa-sun')
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.classList.replace('fa-sun', 'fa-moon')
  }
});

// Al cargar la página, aplicar el tema guardado
document.addEventListener('DOMContentLoaded', () => {
 
});
