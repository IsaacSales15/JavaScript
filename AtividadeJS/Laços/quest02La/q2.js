document.getElementById('button').addEventListener('click', function() {     
    const n = parseInt(document.getElementById('numberInput').value);

    if (n > 0) {
        for (let i = 1; i < n; i++) {
        console.log(i); 
    }
    } else {
        console.log("Por favor, insira um número maior que zero.");
    }
});