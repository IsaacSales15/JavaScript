document.addEventListener('DOMContentLoaded', function () {
    const openPopBtn = document.getElementById('openPopBtn');
    const pop = document.getElementById('pop');
    const closeBtn = document.querySelector('.close-btn');
    const numberInput = document.getElementById('itemQuantity');

    openPopBtn.addEventListener('click', function () {
        pop.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        pop.style.display = 'none';
    });

    numberInput.addEventListener('keydown', function (e) {
        if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Tab')) {
            e.preventDefault();
        }
    });
});