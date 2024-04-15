document.getElementById('button').addEventListener('click', function() {
    const currentYear = new Date().getFullYear();
    const birthYear = document.getElementById('age').value; 

    const age = currentYear - birthYear;

    if (age >= 16) {
        console.log("Pode votar este ano. Você tem " + age + " anos.");
        alert("Pode votar este ano. Você tem " + age + " anos.");
    } else {
        console.log("Não pode votar. Você tem: " + age + " anos.");
        alert("Não pode votar este ano. Você tem " + age + " anos.");
    }
});