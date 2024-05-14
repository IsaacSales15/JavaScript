const readline = require('readline');

function wordCounter(a){
    const b = a.split(' ');
    return b.length;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('escreva uma frase: ', (a) => {
        const result = wordCounter(a);
        console.log('Número de palavras:', result);

    rl.close();
});
