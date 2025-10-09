document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const mensajeGracias = document.getElementById("mensajeGracias");

  form.addEventListener("submit", function () {
    // Mostrar mensaje de agradecimiento
    setTimeout(() => {
      mensajeGracias.style.display = "block";
    }, 500);
  });
});

