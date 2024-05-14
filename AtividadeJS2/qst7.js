const readline = require('readline');

function triangle(b, h){
    return (b * h)/ 2;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Coloque a base do triângulo: ', (b) => {
    rl.question('Coloque a altura do triângulo: ', (h) => {
    const result = triangle(parseFloat(b), parseFloat(h));
    console.log('Resultado:', result);

rl.close();
    });
});