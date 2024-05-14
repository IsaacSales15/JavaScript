const readline = require('readline');

function palindrome(a){
    p = a.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for (let i = 0; i < p.length; i++){
        if(p[i] !== p[p.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('escreva uma palavra: ', (a) => {
        const result = palindrome(a);
        console.log('Resultado:', result);

    rl.close();
});
