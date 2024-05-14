const readline = require('readline');

function MMC(a, b) {
    let mdc = calcMDC(a, b);
    let mmc = (a * b) / mdc;
    return mmc;
}

function calcMDC(a, b) {
    let mdc = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            mdc = i;
        }
    }
    return mdc;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('O primeiro número: ', (a) => {
    rl.question('O segundo número: ', (b) => {
        const result = MMC(parseFloat(a), parseFloat(b));
        console.log('Resultado:', result);
        rl.close();
    });
});
