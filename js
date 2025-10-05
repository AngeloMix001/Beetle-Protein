// Simulación de envío de formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !correo || !mensaje) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  alert('Gracias por contactarte, ' + nombre + '. Te responderemos pronto.');
  this.reset();
});
