const readline = require('readline');

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let f = 1;
        for (let i = 2; i <= n; i++) {
            f *= i;
        }
        return f;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (n) => {
    n = parseInt(n);
    if (Number.isNaN(n) || n < 0 || !Number.isInteger(n)) {
        console.log('Por favor, digite um número inteiro positivo.');
    } else {
        const result = factorial(n);
        console.log('O fatorial é:', result);
    }
    rl.close();
});
