document.addEventListener('DOMContentLoaded', function() {
    calcularMedia(5,8,10,"Pedro");
});

function calcularMedia(n1, n2, n3, name){
    let average = (n1 + n2 + n3)/3
    console.log('1° nota: ' + n1 + ', 2° nota: ' + n2 + ', 3° nota: ' + n3 + ', nome: ' + name);
    alert(name + ', sua média é ' + Math.round(average));
}
