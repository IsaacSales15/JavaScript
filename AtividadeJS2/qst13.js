const readline = require('readline');

function armstrong(a){
    const numStr = a.toString();
    const numDig = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDig; i++) {
        sum += Math.pow(parseInt(numStr[i]), numDig);
    }

    return sum === a;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Coloque um número: ', (a) => {
    const result = armstrong(parseFloat(a));
    console.log('Resultado:', result);
    rl.close();
});
