document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const mensajeGracias = document.createElement("p");

  // Crear el mensaje de agradecimiento dinámicamente
  mensajeGracias.id = "mensajeGracias";
  mensajeGracias.innerHTML = "¡Gracias por contactarnos! 💪<br>Tu mensaje fue enviado con éxito.";
  mensajeGracias.style.display = "none";
  mensajeGracias.style.color = "#d4af37";
  mensajeGracias.style.marginTop = "15px";

  // Insertar el mensaje debajo del formulario
  form.insertAdjacentElement("afterend", mensajeGracias);

  // Mostrar mensaje cuando se envía
  form.addEventListener("submit", function () {
    // Mostrar el mensaje después de un breve retraso
    setTimeout(() => {
      mensajeGracias.style.display = "block";
    }, 500);
  });
});
