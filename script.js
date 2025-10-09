document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const mensajeGracias = document.createElement("p");

  mensajeGracias.id = "mensajeGracias";
  mensajeGracias.innerHTML = "¡Gracias por contactarnos! 💪<br>Tu mensaje fue enviado con éxito.";
  mensajeGracias.style.display = "none";
  mensajeGracias.style.color = "#d4af37";
  mensajeGracias.style.marginTop = "15px";

  form.insertAdjacentElement("afterend", mensajeGracias);

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita recargar la página

    const formData = new FormData(form);

    try {
      // Envía los datos a FormSubmit sin recargar
      const response = await fetch(form.action, {
        method: form.method,
        body: formData
      });

      if (response.ok) {
        mensajeGracias.style.display = "block";
        form.reset();
      } else {
        alert("Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.");
      }
    } catch (error) {
      alert("Error de conexión. Verifica tu red e inténtalo de nuevo.");
    }
  });
});
