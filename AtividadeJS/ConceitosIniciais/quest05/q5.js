document.getElementById('button').addEventListener('click', function(){
    const age = document.getElementById('age').value;

    if (age >= 18){
        console.log('Pode dirigir');
        alert('Pode dirigir');
    }
    else {
        console.log('Não pode dirigir');
        alert('Não pode dirigir');
    }
});