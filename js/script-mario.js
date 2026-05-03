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

// Menu Hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = document.querySelectorAll(".nav .nav-list a");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        nav.classList.remove("visible");
    });
});


// Fin Menu Hamburguesa

// * ------------  * ------------ * ------------ * ------------ * ------------ *
