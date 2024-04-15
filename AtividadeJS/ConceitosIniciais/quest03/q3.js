document.getElementById('button').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value); 
    const view = document.getElementById('view');

        const bmi = weight / (height * height);
        view.innerHTML = `IMC: ${bmi.toFixed(2)}`;
});

