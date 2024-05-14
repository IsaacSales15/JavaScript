const readline = require('readline');

function addOrEven(a){
    if(a % 2 === 0){
        return true
    } else {
        return false
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (a) => {
        const result = addOrEven(a);
        console.log(result);
        rl.close();
    });
