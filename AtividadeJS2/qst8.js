const readline = require('readline');

function number(a){
    if(a <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(a); i++){
        if(a % i === 0){
            return false;
        }
    }
    return true;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('escreva um número: ', (a) => {
    const result = number(a);
    console.log('Número primo:', result);

rl.close();
});