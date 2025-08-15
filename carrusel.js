document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carrusel').forEach(function(carrusel) {
        const imagenes = JSON.parse(carrusel.getAttribute('data-imagenes'));
        let indice = 0;
        const img = carrusel.querySelector('.carrusel-img');
        const prevBtn = carrusel.querySelector('.carrusel-btn.prev');
        const nextBtn = carrusel.querySelector('.carrusel-btn.next');

        function mostrarImagen(i) {
            img.src = imagenes[i];
        }

        prevBtn.addEventListener('click', function() {
            indice = (indice - 1 + imagenes.length) % imagenes.length;
            mostrarImagen(indice);
        });
        nextBtn.addEventListener('click', function() {
            indice = (indice + 1) % imagenes.length;
            mostrarImagen(indice);
        });
    });
}); 