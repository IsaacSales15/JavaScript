let value = 5000;
console.log('Start');

while (value < 10000) {
    value += value * 0.30; 
    console.log("Valor atual: " + value.toFixed(2)); 
}

