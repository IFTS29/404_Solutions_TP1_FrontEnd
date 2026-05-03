<h1 align="center">💻 404 Solutions - TP1 FrontEnd</h1>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-ENTREGADO-brightgreen?style=flat-square">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
</p>

<p align="center">
  🔗 <b><a href="https://404-solutions.vercel.app/index.html" target="_blank">Ver Proyecto Desplegado en Vercel</a></b>
</p>

---

## 📚 Sobre el Proyecto

**Materia:** Desarrollo de Sistemas Web (Front End)   
**Curso:** 2° D - Turno Noche (1er Cuatrimestre 2026)  
**Institución:** IFTS N.°29 - Ministerio de Educación  

Este proyecto corresponde a un trabajo práctico grupal de la asignatura del IFTS N.°29. Consiste en el desarrollo de un sitio web estático que funciona como portafolio colaborativo. La aplicación incluye una portada grupal, tarjetas de presentación individuales para cada integrante y una bitácora del proceso de trabajo. Su implementación se basa en HTML5, CSS3 y JavaScript, aplicando conceptos de maquetación avanzada (Flexbox y Grid), diseño adaptable con enfoque Mobile First e interactividad mediante manipulación del DOM.

---

## 👥 Integrantes del Equipo

| Integrante | Rol en el Equipo | Perfil GitHub |
| :--- | :--- | :--- |
| **Aiello, Mariana** | Software Dev & Data Science | [🔗 Ver Perfil](https://github.com/Aiello-M) |
| **Flores, Miguel Ángel** | Full Stack Developer | [🔗 Ver Perfil](https://github.com/mikefink22) |
| **González, Mario** | Full Stack Developer | [🔗 Ver Perfil](https://github.com/elavincho) |
| **Rodríguez, Raquel** | Frontend Developer | [🔗 Ver Perfil](https://github.com/raquerh) |
| **Thomas, Valeria** | DevOps Engineer | [🔗 Ver Perfil](https://github.com/INSERTAR-GITHUB-AQUI) |

---

## 🗂️ Estructura de Archivos

La organización del proyecto sigue estrictamente las buenas prácticas de separación de responsabilidades:

```text
404_Solutions_TP1_FrontEnd/
│
├── index.html              # Portada principal del sitio (Landing)
├── bitacora.html           # Registro del proceso y decisiones de diseño
├── mariana.html            # Perfil individual 
├── mario.html              # Perfil individual
├── mike.html               # Perfil individual
├── raquel.html             # Perfil individual
├── valeria.html             # Perfil individual
│
├── css/                    # Hojas de estilo
│   ├── styles.css          # Estilos globales (Header, Footer, Nav, Animaciones)
│   ├── styles-mariana.css  # Estilos específicos del perfil
│   ├── styles-mario.css    # Estilos específicos del perfil
│   ├── styles-mike.css     # Estilos específicos del perfil
│   └── styles-raq.css      # Estilos específicos del perfil
│   └── styles-valeria.css      # Estilos específicos del perfil
│
├── js/                     # Scripts de interactividad
│   ├── main.js             # Funciones globales (Año dinámico, Diagnóstico, Menú Móvil)
│   ├── peliculas.js        # Lógica de galería dinámica (Perfil Mariana)
│   └── script-mario.js     # Lógica de lectura expansible (Perfil Mario)
│
└── img/                    # Activos gráficos, avatares y portadas
```

---

## 🛠️ Tecnologías y Recursos Utilizados

* **Lenguajes:** HTML5, CSS3, JavaScript.
* **Fuentes:** Google Fonts (Tipografías, como JetBrains Mono).
* **Íconos:** FontAwesome (Redes e UI) y DevIcons (Stack tecnológico).
* **Despliegue:** Vercel (Hosting).
* **Control de Versiones:** Git & GitHub.

---

## 🎨 Guía de Estilos

El equipo adoptó una estética unificada de **Terminal / Retro-Computing** para la interfaz general, permitiendo variaciones en las tarjetas individuales sin perder la cohesión.

### Paleta de Colores
* ⬛ **Fondo Base:** `#0a0a0a` (Terminal Black)
* 🟩 **Color Primario (Textos/Bordes):** `#00ff41` (Neon Green)
* 🌲 **Color Secundario (Hover/Fondos):** `#003b00` (Dark Green)
* ⬜ **Acentos (Títulos):** `#ffffff` (White)

### Tipografía
Se utilizó exclusivamente **JetBrains Mono** para emular un entorno de desarrollo integrado y consola de comandos, garantizando una excelente legibilidad.

### Iconografía y Privacidad
Para respetar privacidad, se evitaron fotografías reales y se implementaron avatares generados por IA, así como ilustraciones e íconos vectoriales para representar a cada integrante.

---

## ⚙️ JavaScript: Interactividad Dinámica

Se implementaron ciertas funciones para mejorar la experiencia de usuario y optimizar la carga del sitio.

### 1. Portada y Globales (`main.js`)
* **Simulador de Diagnóstico:** En el `index.html`, un botón dispara una animación asíncrona que simula la ejecución de comandos en una terminal utilizando `setTimeout` para generar un efecto *typing*.
* **Footer Dinámico:** El año del copyright se calcula en tiempo real usando el objeto `Date()`.
* **Menú Móvil:** Implementación de un menú hamburguesa desplegable para resoluciones `< 768px`.

*(Agregar aquí captura de pantalla del index / diagnóstico)*  
`![Diagnóstico Terminal](./ruta/a/tu/captura-diagnostico.png)`

### 2. Páginas Individuales
* **Galería Dinámica de Tráilers (`peliculas.js` - Perfil Mariana):** Para evitar la carga simultánea de múltiples *iframes* de YouTube (optimizando la performance), se utilizó un sistema de Event Listeners. Al hacer clic en un póster, el script extrae la información de atributos `data-*` (título, director, sinopsis y URL del video) y la inyecta dinámicamente en un contenedor principal sin recargar la página.
* **Párrafos Expandibles (`script-mario.js` - Perfil Mario):** Sistema de *accordion* o lectura condicional que alterna clases CSS mediante botones ("Leer más" / "Leer menos") para expandir o contraer las sinopsis de las películas, manteniendo limpia la interfaz visual.

*(Agregar FOTOS !!! )*  
`![Galería Mariana](./ruta/a/captura-galeria.png)`  
`![Texto Expandible Mario](./ruta/a/captura-expandible.png)`

---

## 🤖 Uso de Inteligencia Artificial

Las herramientas de IA fueron utilizadas como asistentes técnicos y creativos, manteniendo el equipo la autoría y el control total de la lógica del proyecto.

* **Herramientas:** Gemini 3.1 Pro, Claude.
* **Uso en Código y Estructura:**
  * Generación de textos de relleno y redacción de narrativas para descripciones.
  * Asistencia en *debugging* de maquetación compleja (alineación de CSS Grid) y optimización de selectores.
  * Refactorización y limpieza de bloques de código JavaScript para hacerlos más eficientes (ej. uso de `forEach`).
* **Generación de Imágenes:**
  * **Modelo:** Gemini 3 Flash Image.
  * **Criterio de Prompt:** *"Ilustración de avatar de estilo terminal, cabeza de dragón cibernético mecánico formado por caracteres ASCII y líneas de código verde neón, estética de mapa de bits pixelado"* (Aplicado en perfil Mariana).

---

*Nota: Este README será ampliado y actualizado en los TP2 y TP3 para documentar la evolución del proyecto.*

[Vista Previa de la Página](https://ifts29.github.io/404_Solutions_TP1_FrontEnd/)

---
![GitHub last commit](https://img.shields.io/github/last-commit/IFTS29/404_Solutions_TP1_FrontEnd?style=flat-square&color=00ff41&label=ULTIMA_ACTUALIZACION)
