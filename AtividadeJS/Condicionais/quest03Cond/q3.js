document.getElementById('button').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);    
    const fahrenheit = (celsius * 9/5) + 32;
    const result = document.getElementById('result');

    result.innerHTML = `${celsius} °C é igual a ${fahrenheit.toFixed(2)} °F`;

});