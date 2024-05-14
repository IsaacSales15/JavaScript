const readline = require('readline');

function vowel(a){
    const vowelMap = new Set(['a', 'e', 'i', 'o','u']);

    a = a.toLowerCase();
    let v = 0;

    for(let i of a){
        if(vowelMap.has(i)){
            v++;
        }
    }
    return v;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('escreva uma palavra: ', (a) => {
    const result = vowel(a);
    console.log('O número de vogais é:', result);

rl.close();
});

