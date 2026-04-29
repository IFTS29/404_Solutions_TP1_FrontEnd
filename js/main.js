// Función para párrafo expandible
// Esta función tiene que ir arriba de todo, sino se rompe el parrafo expandible

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM cargado correctamente");

  // Seleccionar todos los botones
  const botones = document.querySelectorAll(".btn-leer");
  console.log("Número de botones encontrados:", botones.length);

  // Verificar si hay botones
  if (botones.length === 0) {
    console.error("No se encontraron botones con la clase .btn-leer");
    return;
  }

  // Agregar evento a cada botón
  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      console.log("Botón clickeado");

      // Buscar el contenedor más cercano con clase 'contenedor'
      const contenedor = this.closest(".contenedor");
      if (!contenedor) {
        console.error("No se encontró el contenedor padre");
        return;
      }

      // Buscar el párrafo dentro del contenedor
      const parrafo = contenedor.querySelector(".parrafo-expandible");
      if (!parrafo) {
        console.error("No se encontró el párrafo con clase parrafo-expandible");
        return;
      }

      // Alternar entre expandido y contraído
      if (parrafo.classList.contains("parrafo-resumido")) {
        // Expandir
        parrafo.classList.remove("parrafo-resumido");
        parrafo.classList.add("parrafo-completo");
        this.textContent = "Leer menos";
        console.log("Párrafo expandido");
      } else {
        // Contraer
        parrafo.classList.remove("parrafo-completo");
        parrafo.classList.add("parrafo-resumido");
        this.textContent = "Leer más";
        console.log("Párrafo contraído");
      }
    });
  });
});

// * ------------  * ------------ * ------------ * ------------ * ------------ *

document.getElementById("btn-interact").addEventListener("click", function () {
  alert("Sistema 404 Solutions: Inicializando entorno de desarrollo...");
  console.log("Interacción de portada ejecutada correctamente.");
});

// Función para actualizar el año del copyright de forma dinámica
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
