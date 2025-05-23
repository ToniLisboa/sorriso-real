// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  