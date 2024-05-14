const readline = require('readline');

function cosseno(r) {
    return Math.cos(r);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor de PI: ', (pi) => {
    rl.question('Digite o ângulo em radianos: ', (a) => {
        const result = cosseno(parseFloat(a));
        console.log('Resultado: ', result);
        rl.close();
    });
});
