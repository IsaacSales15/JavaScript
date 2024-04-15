document.addEventListener('DOMContentLoaded', mostrarMensagem);

function mostrarMensagem(){
    const name = document.getElementById('title').textContent;

    console.log('Acesso à aplicação ' + name);
    alert('Bem vindo à aplicação ' + name);
}