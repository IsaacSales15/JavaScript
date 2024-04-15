document.getElementById('button').addEventListener('click', function() { 
    console.log('Ordem crescente:');
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }

        console.log('Ordem decrescente:');
        for (let i = 10; i >= 1; i--) {
            console.log(i);
        }
});