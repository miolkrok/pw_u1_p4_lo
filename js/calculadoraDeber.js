let operadorSeleccionado = '';
let num1 = '';
let num2 = '';

function numero(valor) {
    document.getElementById('resultado').value += valor;
}

function operador(operador) {
    operadorSeleccionado = operador;
    num1 = document.getElementById('resultado').value;
    limpiarResultado();
}

function limpiarResultado() {
    document.getElementById('resultado').value = '';
}

function calcular(){
    num2 = document.getElementById('resultado').value;
    let resultado = '';

    switch (operadorSeleccionado) {
        case '+':
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return;
    }

    document.getElementById('resultado').value = resultado;
    operadorSeleccionado = '';
}

