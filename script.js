document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const n=document.getElementById('nombre').value.trim();
  const c=document.getElementById('correo').value.trim();
  const m=document.getElementById('mensaje').value.trim();
  if(!n||!c||!m){alert('Por favor, completa todos los campos.');return;}
  alert('Gracias por contactarte, '+n+'. Te responderemos pronto.');
  this.reset();
});
// Mostrar mensaje de agradecimiento al enviar el formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const mensajeGracias = document.getElementById("mensajeGracias");

  form.addEventListener("submit", function () {
    // Pequeña pausa para asegurar envío
    setTimeout(() => {
      mensajeGracias.style.display = "block";
      form.reset();
    }, 500);
  });
});
