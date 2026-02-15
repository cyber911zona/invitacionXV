document.addEventListener('DOMContentLoaded', () => {
    const sealBtn = document.getElementById('bowBtn');
    const closeBtn = document.getElementById('closeBtn');
    const wrapper = document.getElementById('wrapper');

    // Función para abrir
    if (sealBtn && wrapper) {
        sealBtn.addEventListener('click', () => {
            wrapper.classList.add('open');
            // Quitamos el scroll del cuerpo para que se enfoque en la invitación
            document.body.style.overflow = 'auto'; 
        });
    }

    // Función para cerrar (Retroceso)
    if (closeBtn && wrapper) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita conflictos con otros clics
            wrapper.classList.remove('open');
            
            // Opcional: regresa al inicio de la página al cerrar
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
