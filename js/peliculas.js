document.addEventListener("DOMContentLoaded", () => {
  // seleccionar los posters y y las cajas de texto html
  const posters = document.querySelectorAll(".poster-item");
  const iframe = document.getElementById("pelicula-iframe");
  const titulo = document.getElementById("pelicula-titulo");
  const director = document.getElementById("pelicula-director");
  const anio = document.getElementById("pelicula-anio");
  const desc = document.getElementById("pelicula-desc");

  posters.forEach((poster) => {
    poster.addEventListener("click", () => {
      // eliminar borde verde (clase 'activo') de todas las películas
      posters.forEach((p) => p.classList.remove("activo"));

      // agregar el borde verde (clase 'activo') a la pelicula seleccionadaa
      poster.classList.add("activo");

      // extraer la info de los atributos 'data-' y actualizar el HTML
      iframe.src = poster.getAttribute("data-trailer");
      titulo.textContent = poster.getAttribute("data-title");
      director.textContent = poster.getAttribute("data-director");
      anio.textContent = "- " + poster.getAttribute("data-year");
      desc.textContent = poster.getAttribute("data-desc");
    });
  });
});
