const readline = require('readline');

function backwardStr(a){
    return a.split('').reverse().join('');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('escreva uma palavra: ', (a) => {
    const result = backwardStr(a);
    console.log('Resultado:', result);

rl.close();
});
