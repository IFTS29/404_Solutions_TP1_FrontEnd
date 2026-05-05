<h1 align="center">💻 404 Solutions - TP1 FrontEnd</h1>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/IFTS29/404_Solutions_TP1_FrontEnd?style=flat-square&color=purple&label=ULTIMA_ACTUALIZACION" alt="GitHub last commit">
  <img src="https://img.shields.io/badge/STATUS-ENTREGADO-green?style=flat-square">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">  
</p>

<p align="center">
  🔗 <b><a href="https://404-solutions.vercel.app/index.html" target="_blank">Ver Proyecto Desplegado en Vercel</a></b>
</p>

<p align="center">
  🔗 <b><a href="https://ifts29.github.io/404_Solutions_TP1_FrontEnd" target="_blank">Ver Proyecto en GitHub Pages</a></b>
</p>

## 📚 Sobre el Proyecto

**Materia:** Desarrollo de Sistemas Web (Front End)   
**Curso:** 2° D - Turno Noche (1er Cuatrimestre 2026)  
**Institución:** IFTS N.°29 - Tecnicatura en Desarrollo de Software

Este proyecto corresponde a un trabajo práctico grupal de la asignatura Desarrollo de Sistemas Web (Front End). Consiste en el desarrollo de un sitio web estático que funciona como portafolio colaborativo. La aplicación incluye una portada grupal, tarjetas de presentación individuales para cada integrante y una bitácora del proceso de trabajo. Su implementación se basa en HTML5, CSS3 y JavaScript, aplicando conceptos de maquetación avanzada (Flexbox y Grid), diseño adaptable con enfoque Mobile First e interactividad mediante manipulación del DOM.

---

## 👥 Integrantes del Equipo

| Integrante | Rol en el Equipo | Perfil GitHub |
| :--- | :--- | :--- |
| **Aiello, Mariana** | Software Dev & Data Science | [🔗 Ver Perfil](https://github.com/Aiello-M) |
| **Flores, Miguel Ángel** | Full Stack Developer | [🔗 Ver Perfil](https://github.com/mikefink22) |
| **González, Mario** | Full Stack Developer | [🔗 Ver Perfil](https://github.com/elavincho) |
| **Rodríguez, Raquel** | Frontend Developer | [🔗 Ver Perfil](https://github.com/raquerh) |
| **Thomas, Valeria** | DevOps Engineer | [🔗 Ver Perfil](https://github.com/Irinath) |

---

## 🗂️ Estructura de Archivos

La organización del proyecto cumple con las buenas prácticas de separación de responsabilidades:

```text
404_Solutions_TP1_FrontEnd/
│
├── index.html              # Portada principal en el directorio raíz
├── bitacora.html           # Registro del proceso de desarrollo y decisiones de diseño
├── mariana.html            # Perfil individual Mariana
├── mario.html              # Perfil individual Mario
├── mike.html               # Perfil individual Mike
├── raquel.html             # Perfil individual Raquel
├── valeriat.html           # Perfil individual Valeria
│
├── css/                    # Carpeta con los archivos de estilos
│   ├── styles.css          # Estilos globales (Header, Footer, Nav, Animaciones)
│   ├── styles-mariana.css  # Estilos específicos del perfil
│   ├── styles-mario.css    # Estilos específicos del perfil
│   ├── styles-mike.css     # Estilos específicos del perfil
│   └── styles-raq.css      # Estilos específicos del perfil
│   └── styles-valeriat.css  # Estilos específicos del perfil
│
├── js/                     # Carpeta con los scripts de interactividad
│   ├── main.js             # Funciones globales (Año dinámico, Diagnóstico, Menú Móvil)
│   ├── carrusel.js         # Lógica de slider horizontal (Perfil Valeria)
│   ├── mike-ds.js          # Lógica de consola interactiva (Perfil Mike)
│   ├── peliculas.js        # Lógica de galería dinámica (Perfil Mariana - sección películas)
│   └── script-mario.js     # Lógica de lectura expansible (Perfiles Mario, Mike, Valeria)
│   └── script-raquel.js     # Lógica de ScrollSpy y copiado de URL (Perfil Raquel)
│
└── img/                    # Carpeta que almacena avatares, iconos e ilustraciones
```

## 🛠️ Tecnologías y Recursos Utilizados

* **Lenguajes:** HTML5, CSS3, JavaScript.
* **Fuentes:** Google Fonts (Tipografías: JetBrains Mono, Fira Code, Syne).
* **Íconos:** FontAwesome (redes sociales e UI) y DevIcons (stack tecnológico).
* **Multimedia:** Iframes de YouTube (Visualización de tráilers nativos).
* **Imágenes:** Unsplash (Banco de imágenes).
* **Despliegue:** Vercel (Hosting).
* **Control de Versiones:** Git & GitHub.

## 🎨 Guía de Estilos

El equipo adoptó una estética unificada de **Terminal / Retro-Computing** para la interfaz general, manteniendo coherencia visual en todo el sitio. Se permitieron variaciones controladas en las tarjetas individuales para aportar identidad propia sin perder consistencia.

* ### Paleta de Colores

La paleta principal (aplicada en portada, navegación y pie de página) es:

* ⬛ **Fondo Base:** `#0a0a0a` (Terminal Black)
* 🟩 **Color Primario (Textos/Bordes):** `#00ff41` (Neon Green)
* 🟢 **Color Secundario (Hover/Fondos):** `#003b00` (Dark Green)
* ⬜ **Acentos (Títulos):** `#ffffff` (White)

*Nota: En los perfiles individuales se utilizaron variaciones de color para acentos visuales, manteniendo el fondo oscuro como base común.*

### Tipografías

* **General (títulos y cuerpo):** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) para emular un entorno de consola.

* **Excepción (perfil de Raquel - identidad personalizada):**  
  * Títulos: [Syne](https://fonts.google.com/specimen/Syne)  
  * Cuerpo y navegación: [Fira Code](https://fonts.google.com/specimen/Fira+Code)

### Iconografía

* **Librerías:** Se empleó **FontAwesome** (iconos generales de la interfaz y redes sociales) y **DevIcons** (representación del stack tecnológico).
* **Privacidad:** Se utilizaron avatares generados con IA, imágenes intervenidas digitalmente e ilustraciones en lugar de fotografías personales sin editar, con el objetivo de resguardar la identidad de los integrantes.
  
---

<br/>

## ⚙️ JavaScript: Interactividad Dinámica

Se implementaron distintas funcionalidades con JavaScript para mejorar la interactividad y la experiencia de usuario, tanto en la portada como en las páginas individuales.

### 1. Portada y Funciones Globales (`main.js`)

Aplicadas en la portada principal (`index.html`) y compartidas en todas las páginas del sitio:

* **Simulador de Diagnóstico (Sección Hero - Portada):**  
  Al hacer clic en el botón "Ejecutar Diagnóstico" se ejecuta una animación que simula comandos de terminal. El contenido se muestra progresivamente utilizando `setTimeout`, generando un efecto de escritura en pantalla. Durante la ejecución, el botón se desactiva temporalmente.

  <p align="center">
    <img src="./img/readme-img/func-diagnostico.gif" alt="Diagnóstico" width="550">
  </p>

* **Menú Móvil (Header - Global):**  
  Se implementa un menú hamburguesa para pantallas con resoluciones menores a 768px. Al interactuar, se alternan clases CSS para mostrar u ocultar la navegación.

  <p align="center">
    <img src="./img/readme-img/func-menu-hamburguesa.gif" alt="Menú móvil" width="550">
  </p>

* **Copyright Dinámico (Footer - Global):**  
  El año del pie de página se calcula y actualiza automáticamente en tiempo real mediante el uso de `Date().getFullYear()`, evitando modificaciones manuales.

  <p align="center">
    <img src="./img/readme-img/func-año.png" alt="Copyright Dinámico" width="550">
  </p>

---

### 2. Páginas Individuales

#### Perfil Mariana (`peliculas.js`)

* **Galería Dinámica (Sección: Películas Favoritas):**  
  Al hacer clic en un póster, se actualiza dinámicamente un contenedor principal con información de la película (título, director, sinopsis y tráiler). Los datos se obtienen desde atributos `data-*`, evitando la carga simultánea de múltiples iframes de YouTube y mejorando el rendimiento.

  <p align="center">
    <img src="./img/readme-img/func-galeria.gif" alt="Galería Mariana" width="550">
  </p>

---

#### Perfiles Mario, Mike y Valeria (`script-mario.js`)

*(Funcionalidad reutilizada en múltiples perfiles)*

* **Texto Expandible (Sección: Películas favoritas):**  
  Cada tarjeta de película permite mostrar u ocultar contenido adicional mediante botones "Leer más" / "Leer menos". La funcionalidad alterna clases CSS (`parrafo-resumido` / `parrafo-completo`) para expandir o contraer el texto, manteniendo una interfaz ordenada y clara.

  <p align="center">
    <img src="./img/readme-img/func-expandible-mario.gif" alt="Párrafos Expandibles" width="550">
  </p>

---

#### Perfil Valeria (`carrusel.js`)

* **Carrusel de contenido (Sección: Discos favoritos):**  
  Se implementa un slider horizontal que permite navegar entre elementos. El desplazamiento se realiza mediante `translateX`, y el script ajusta automáticamente la cantidad de elementos visibles según el tamaño de la pantalla (`window.innerWidth`).

  <p align="center">
    <img src="./img/readme-img/func-carrousel.gif" alt="Carrusel Valeria" width="550">
  </p>

---

#### Perfil Mike (`mike-ds.js`)

* **Simulación interactiva (Sección: Habilidades):**  
  Al interactuar con el contenedor, se ejecuta una animación que simula una consulta a una base de datos, reforzando la temática del perfil mediante contenido dinámico.

  <p align="center">
    <img src="./img/readme-img/func-consulta-mike.gif" alt="Consola Mike" width="550">
  </p>

---

#### Perfil Raquel (`script-raquel.js`)

* **ScrollSpy (Navegación interna):**  
  A medida que el usuario hace scroll por la página, el menú de navegación secundario se actualiza, resaltando automáticamente la sección que está visible en pantalla. Esto se logra utilizando `IntersectionObserver`, que detecta qué bloque del contenido está activo en cada momento.

  <p align="center">
    <img src="./img/readme-img/func-scroll.gif" alt="ScrollSpy Raquel" width="550">
  </p>

* **Botón de copiar URL (Sección: Sobre mí):**  
  Se incluye un botón que permite copiar el enlace del perfil al portapapeles usando `navigator.clipboard`. Al hacer clic, el botón muestra un mensaje temporal ("¡Enlace copiado!") para indicar que la acción se realizó correctamente.

  <p align="center">
    <img src="./img/readme-img/func-copiar-url.gif" alt="Copiar URL Raquel" width="550">
  </p>

---

<br/>

## 🤖 Uso de Inteligencia Artificial

Se utilizaron herramientas de Inteligencia Artificial como apoyo técnico y creativo durante el desarrollo del proyecto, manteniendo siempre la autoría, decisiones de diseño y lógica del lado del equipo.

### 1. Herramientas Utilizadas

* **Modelos de Lenguaje:** Claude 4.6, Gemini 3.1 Pro, ChatGPT
* **Generación y Edición de Imágenes:** Gemini 3 Flash Image.

### 2. Uso en Contenido y Código

* **Generación de textos:**  
  Se utilizó IA para redactar descripciones iniciales (por ejemplo, sinopsis de películas y textos de prueba), que luego fueron adaptadas manualmente.

* **Asistencia en JavaScript:**  
  Se consultó a la IA para resolver problemas puntuales de lógica, como: manejo de eventos (`addEventListener`), uso de `querySelectorAll` y recorridos con `forEach`, y organización del código para manipular atributos `data-*` en la galería dinámica.

* **Debugging y CSS:**  
  Se utilizó la IA para detectar errores de maquetación, como: problemas de alineación en CSS Grid, superposición de elementos (z-index) y ajustes en el menú responsive para resolver conflictos de superposición (z-index).

### 3. Generación e Intervención de Imágenes

Para preservar la privacidad, se utilizaron imágenes generadas o modificadas con IA en lugar de fotos personales sin editar. Algunos integrantes decidieron modificar fotos reales para crear avatares consistentes con la temática del sitio (tecnología, terminal, retro/futurismo), mientras otros generaron imágenes desde cero.

#### Ejemplos de prompts utilizados

* **Perfil Mariana (foto intervenida):**  
  > "Editar esta foto para que parezca un personaje estilo cyberpunk, con traje tipo Gatúbela, iluminación futurista y nocturna en tonos violeta y azul, y fondo oscuro con luces de neón."

* **Perfil Raquel (foto intervenida):**  
  > "Modificar esta imagen agregando un efecto mitad humano mitad robot estilo Terminator, con detalles mecánicos en una parte del rostro, un ojo rojo brillante y fondo oscuro con código digital verde estilo Matrix cayendoestilo tecnológico."

* **Perfil Mike (imagen generada):**  
  > "Generar una avatar de la tortuga Ninja Miguel Angel con un estilo 3D similar a la imagen de perfil de Mario (se pasa imagen), y colores acordes al estilo consola."

* **Perfil Mario (imagen generada):**  
  > "Generar una avatar de perfil 3D basado en Mario Bros, con alas"

* **Perfil Vale (foto intervenida):**  
  > "Modificar esta imagen transformando a la persona en un habitante del yermo estilo steampunk, con un fondo de refugio industrial subterráneo y tuberías"

---

*Nota: Este README será ampliado y actualizado en los TP2 y TP3 para documentar la evolución del proyecto.*
