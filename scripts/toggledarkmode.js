const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Guardar preferencia en localStorage para que se mantenga al recargar
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Al cargar la página, aplicar el tema guardado
document.addEventListener('DOMContentLoaded', () => {
 
});
