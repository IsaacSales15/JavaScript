const readline = require('readline');

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Coloque um número: ', (n) => {
    const result = fibonacci(parseFloat(n));
    console.log('Resultado:', result);
    rl.close();
});
