// Función para actualizar el año del copyright de forma dinámica
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

// * ------------  * ------------ * ------------ * ------------ * ------------ *

// Menu Hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = document.querySelectorAll(".nav .nav-list a");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    nav.classList.remove("visible");
  });
});

// Fin Menu Hamburguesa

// * ------------  * ------------ * ------------ * ------------ * ------------ *

// Dejar este código siempre al final, sino no carga correctamente el DOM

// Función para el diagnóstico con efecto de typing
document.getElementById("btn-interact").addEventListener("click", function () {
  const codeLines = document.getElementById("codeLines");
  const button = document.getElementById("btn-interact");

  // Deshabilitar el botón durante la ejecución
  button.disabled = true;
  button.style.opacity = "0.5";
  button.style.cursor = "not-allowed";

  // Limpiar contenido previo (mantener solo el prompt)
  codeLines.innerHTML = '<span class="terminal-prompt">$</span>';

  // Líneas de código a mostrar
  const lines = [
    "// Inicializando sistema...",
    "// Verificando dependencias...",
    "// Cargando módulos...",
    "// Conectando con servidor...",
    "// Compilando componentes...",
    "// Estado: <span class='status-ok'>OK</span>",
    "// Sistema listo para desarrollo.",
  ];

  // Función para agregar líneas con delay
  function addLine(index) {
    if (index < lines.length) {
      const span = document.createElement("span");
      span.className = "code-line";
      span.style.opacity = "0";
      span.innerHTML = lines[index];
      codeLines.appendChild(span);

      // Animar la aparición
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transition = "opacity 0.3s ease";

        // Auto-scroll al final
        codeLines.scrollTop = codeLines.scrollHeight;
      }, 50);

      // Agregar siguiente línea
      setTimeout(() => addLine(index + 1), 500);
    } else {
      // Rehabilitar el botón al terminar
      setTimeout(() => {
        button.disabled = false;
        button.style.opacity = "1";
        button.style.cursor = "pointer";
      }, 500);
    }
  }

  // Iniciar la animación
  addLine(0);

  console.log("Diagnóstico ejecutado correctamente.");
});
