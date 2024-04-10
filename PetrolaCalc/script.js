const display = document.getElementById('display');
const buttons = document.querySelectorAll('.teclado input[type="button"]');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = this.value;

        if (value === '=') {
            try {
                expression = eval(expression);
                display.value = expression;
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'C') {
            expression = '';
            display.value = '';
        } else {
            expression += value;
            display.value = expression;
        }
    });
});
