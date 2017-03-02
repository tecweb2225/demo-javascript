
function saludar()   {
    alert('Hola JavaScript')
}

function escribir(numero) {
    document.write('Hola Documento ' + numero)
}
/*
var btnSaludar = document.getElementById('btn-saluda')

btnSaludar.addEventListener('click', saluda)*/


var elemsaluda = document.getElementById('saluda')
/*
elemsaluda.onclick = saludar
elemsaluda.onclick = escribir
*/

elemsaluda.addEventListener('click', saludar)
elemsaluda.addEventListener('click', function() { 
    escribir(3)
    })
