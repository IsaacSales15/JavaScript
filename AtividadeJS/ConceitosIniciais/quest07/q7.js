document.getElementById('button').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value); 
    const view = document.getElementById('view');

    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        let category;
        if (bmi < 18.5) {
            category = 'Abaixo do peso';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Peso normal';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Sobrepeso';
        } else if (bmi >= 30) {
            category = 'Obseidade';
        }
        view.innerHTML = `IMC: ${bmi.toFixed(2)} - Categoria: ${category}`;
    } else {
        view.innerHTML = 'Por favor, insira dados válidos.';
    }

});

