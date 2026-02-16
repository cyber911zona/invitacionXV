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

    // Función para cerrar (Sincronización perfecta)
    if (closeBtn && wrapper) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Iniciamos el cierre del pergamino
            wrapper.classList.remove('open');
            
            // Bloqueamos el scroll para evitar parpadeos blancos
            document.body.style.overflow = 'hidden';
            
            // Regresamos al inicio a los 1.5 segundos (Justo antes de que aparezca la tarjeta)
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'instant' }); 
            }, 1500); 

            // Devolvemos el control del scroll al finalizar todo
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 1800); 
        });
    }
});
