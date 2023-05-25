function sumar(num1, num2) {
    return num1+num2;
}

function sumarNumeros(){
    var numero1= parseInt(document.getElementById('idNum1').value);
    var numero2=parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML='Resultado: '+sumar(numero1,numero2);
}

function convertir(idCampo){
    parse = parseInt(document.getElementById(idCampo).value)
    return parse;
}

function restar(){
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + (convertir('idNum1')-convertir('idNum2'));
}

function multiplicar(){
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + (convertir('idNum1')*convertir('idNum2'));
}

function dividir(){
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + (convertir('idNum1')/convertir('idNum2'));
}

function eliminarElemento() {
    document.getElementById('idEliminar').remove;
}

function insertarElemento(){
    document.getElementById('elemento').innerHTML="<strong>Importante</strong>";
}