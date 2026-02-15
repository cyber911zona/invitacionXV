document.addEventListener('DOMContentLoaded', () => {
    const sealBtn = document.getElementById('bowBtn');
    const wrapper = document.getElementById('wrapper');

    if (sealBtn && wrapper) {
        sealBtn.addEventListener('click', () => {
            wrapper.classList.add('open');
            console.log("Invitación Real desplegada.");
        }, { once: true });
    }
});