function cadastrar() {
    var novoUsuario = document.getElementById('cadastroUser').value;
    var novaSenha = document.getElementById('cadastroPassword').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: novoUsuario, password: novaSenha });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso!');
}

document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var users = JSON.parse(localStorage.getItem('users')) || [];

        var foundUser = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (foundUser) {
            alert('Login bem-sucedido!');
            window.location.href = 'index.html';
        } else {
            alert('Usuário ou senha inválidos. Por favor, cadastre-se primeiro.');
        }
    });
});