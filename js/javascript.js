document.addEventListener('DOMContentLoaded', () => {
    const sealBtn = document.getElementById('bowBtn');
    const closeBtn = document.getElementById('closeBtn');
    const wrapper = document.getElementById('wrapper');

    // Función para abrir
    if (sealBtn && wrapper) {
        sealBtn.addEventListener('click', () => {
            wrapper.classList.add('open');
            document.body.style.overflow = 'auto'; 
        });
    }

    // Función para cerrar (Efecto limpio)
    if (closeBtn && wrapper) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Eliminamos el scrollTo para evitar el salto visual
            wrapper.classList.remove('open');
            
            // Bloqueamos el scroll brevemente para que la animación se vea limpia
            document.body.style.overflow = 'hidden';
            
            // Devolvemos el scroll después de que termine la animación (1.8s)
            setTimeout(() => {
                window.scrollTo(0, 0); // Regresa al inicio instantáneamente una vez oculto
                document.body.style.overflow = 'auto';
            }, 1800); 
        });
    }
});
