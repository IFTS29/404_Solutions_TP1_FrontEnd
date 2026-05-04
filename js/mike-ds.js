(function() {
    document.addEventListener("DOMContentLoaded", () => {
        const cajaDS = document.getElementById("ds-container");
        const textoDS = document.getElementById("ds-terminal-text");

        // Solo se ejecuta si los elementos existen (evita errores en otras páginas)
        if (cajaDS && textoDS) {
            const lineas = [
                "$ query --tags 'data-science'",
                "> PANDAS: Procesamiento de datos.",
                "> LOOKER STUDIO: Dashboards.",
                "> STATS: Estadística descriptiva.",
                "// Cursado en Codo a Codo."
            ];

            cajaDS.addEventListener("click", () => {
                cajaDS.style.pointerEvents = "none"; 
                textoDS.innerHTML = ""; 
                
                let i = 0;
                function escribir() {
                    if (i < lineas.length) {
                        let p = document.createElement("p");
                        // Estilo basado en tus variables globales
                        p.style.color = (i === 0) ? "var(--terminal-green)" : "white";
                        p.style.margin = "4px 0";
                        p.textContent = lineas[i];
                        textoDS.appendChild(p);
                        i++;
                        setTimeout(escribir, 400);
                    }
                }
                escribir();
            });
        }
    });
})();