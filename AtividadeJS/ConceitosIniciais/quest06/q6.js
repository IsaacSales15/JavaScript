document.getElementById('button').addEventListener('click', function(){
    const age = document.getElementById('age').value;
    const license = document.getElementById('licensed').value === 'true'; 

    if (age >= 18 && license){
        console.log('Pode dirigir');
        alert('Pode dirigir');
    }
    else {
        console.log('Não pode dirigir');
        alert('Não pode dirigir');
    }
});
