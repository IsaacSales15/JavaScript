document.getElementById('button').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value); 
    const view = document.getElementById('view');

    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        let category = getCategory(bmi);

        view.innerHTML = `IMC: ${bmi.toFixed(2)} - Categoria: ${category}`;
    } else {
        view.innerHTML = 'Por favor, insira dados válidos.';
    }
});

function getCategory(bmi) {
    switch (true) {
        case (bmi < 18.5):
            return 'Abaixo do peso';
        case (bmi >= 18.5 && bmi <= 24.9):
            return 'Peso normal';
        case (bmi >= 25 && bmi <= 29.9):
            return 'Sobrepeso';
        case (bmi >= 30):
            return 'Obesidade';
        default:
            return 'Dados não válidos';
    }
}
