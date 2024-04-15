document.getElementById('button').addEventListener('click', function() {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const num3 = parseFloat(document.getElementById('num3').value);

if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert("Você repeƟu algum número na digitação");
    return;
}

const sum = num1 + num2 + num3;
const average = sum / 3;
const product = num1 * num2 * num3;
const smallest = Math.min(num1, num2, num3);
const largest = Math.max(num1, num2, num3);

console.log(`Soma: ${sum}`);
console.log(`Média: ${average.toFixed(2)}`);
console.log(`Produto: ${product}`);
console.log(`Menor: ${smallest}`);
console.log(`Maior: ${largest}`);

});
