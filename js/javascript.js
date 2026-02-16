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

    // Función para cerrar (Efecto ultra limpio)
    if (closeBtn && wrapper) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // 1. Iniciamos el cierre visual
            wrapper.classList.remove('open');
            
            // 2. Bloqueamos el scroll para que no haya saltos
            document.body.style.overflow = 'hidden';
            
            // 3. Regresamos al inicio un poco ANTES de que termine la animación (1.6s)
            // Esto elimina el parpadeo blanco que ves arriba
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'instant' }); 
            }, 1600); 

            // 4. Devolvemos el control del scroll al finalizar (1.8s)
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 1800); 
        });
    }
});
