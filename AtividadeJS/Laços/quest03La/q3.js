document.getElementById('button').addEventListener('click', function() { 
    const value = parseInt(document.getElementById('number').value);
    
        if (value >= 1 && value <= 10) {
            console.log(`Tabuada de ${value}:`);
            for (let i = 1; i <= 10; i++) {
                console.log(`${value} x ${i} = ${value * i}`);
            }
        } else {
            console.log("Por favor, insira um número entre 1 e 10.");
        }
});