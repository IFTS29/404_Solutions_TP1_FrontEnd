// * ------------ CARRUSEL DE DISCOS ------------ *

document.addEventListener("DOMContentLoaded", function () {
    const carruselContainer = document.querySelector('.carrusel-container');
    if (!carruselContainer) return; // Si no hay carrusel, salir

    const discosFavoritos = carruselContainer.querySelector('.discos-favoritos');
    const prevBtn = carruselContainer.querySelector('.prev');
    const nextBtn = carruselContainer.querySelector('.next');
    const discoItems = discosFavoritos.querySelectorAll('.disco-item');

    let currentIndex = 0;
    let itemsPerView = getItemsPerView(); // Mostrar 3 discos a la vez
    const totalItems = discoItems.length;

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalItems - itemsPerView;
    }

    // Función para actualizar la posición del carrusel
    function updateCarrusel() {
        const itemWidth = discoItems[0].getBoundingClientRect().width;
        const gap = 15; // el gap del CSS en px
        discosFavoritos.style.transform = `translateX(-${currentIndex * (itemWidth + gap)}px)`;
        updateButtons();
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        if (currentIndex < totalItems - getItemsPerView()) {
            currentIndex++;
            updateCarrusel();
        }
    }

    // Función para ir al slide anterior
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrusel();
        }
    }

    // Agregar event listeners a los botones
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    function getItemsPerView() {
        if (window.innerWidth < 600) return 1;
        if (window.innerWidth < 900) return 2;
        return 3;
    }

    // actualizar cuando cambia el tamaño de la ventana:
    window.addEventListener('resize', () => {
        itemsPerView = getItemsPerView();
        // Ajustar currentIndex si quedó fuera de rango:
        if (currentIndex > totalItems - itemsPerView) {
            currentIndex = Math.max(0, totalItems - itemsPerView);
        }
        updateCarrusel();
    });


    // Inicializar el carrusel
    updateCarrusel();
});

