const readline = require('readline');

function sumNumbers(a, b){
    return (a + b);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        const result = sumNumbers(parseFloat(num1), parseFloat(num2));
        console.log('A soma é:', result);
        rl.close();
    });
});