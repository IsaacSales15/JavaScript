const readline = require('readline');

function MDC(a, b){
    let mdc = 1
    for(let i = 1; i <= Math.min(a, b); i++){
        if(a % i === a && b % i === 0){
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
    const result = MDC(parseFloat(a), parseFloat(b));
    console.log('Resultado:', result);

rl.close();
    });
});
