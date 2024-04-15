document.getElementById('button').addEventListener('click', function() { 
    const price = parseFloat(document.getElementById('price').value);
    const installments = parseInt(document.getElementById('installments').value);
    let totalPrice;
    let installmentValue;

    if (installments === 1) {
        totalPrice = price * 0.975; 
        } else if (installments >= 2 && installments <= 5) {
            totalPrice = price; 
        } else if (installments >= 6 && installments <= 10) {
            totalPrice = price * 1.06;
        } else if (installments >= 11 && installments <= 15) {    
            totalPrice = price * 1.13;
        } else {
            console.log('Número de parcelas inválido.');
            return;
        }

        installmentValue = totalPrice / installments;
        console.log(`O preço total da compra é R$ ${totalPrice.toFixed(2)}. Cada parcela será de R$ ${installmentValue.toFixed(2)}.`);
});