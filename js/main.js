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


