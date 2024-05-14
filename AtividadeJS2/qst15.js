const readline = require('readline');

function pangrama(a) {
    const b = "abcdefghijklmnopqrstuvwxyz";
    const ls = a.toLowerCase().replace(/[^a-z]/g, "");

    for(let l of b) {
        if (!ls.includes(l)) {
            return false;
        }
    }
    return true;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Coloque uma frase: ', (a) => {
    const result = pangrama(a);
    console.log('Resultado', result);
    rl.close();
});
