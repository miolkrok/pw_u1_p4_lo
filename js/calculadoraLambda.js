const convertir = (idCampo) => {
    console.log('Convertir' + idCampo)
    return parseInt(document.getElementById(idCampo).value);
}
const sumarNumeros = () => document.getElementById('labelResultado').innerHTML = 'Resultado: ' + (convertir('idNum1') + convertir('idNum2'));

const restar = () => document.getElementById('labelResultado').innerHTML = 'Resultado: ' + (convertir('idNum1') - convertir('idNum2'));

const multiplicar = () => document.getElementById('labelResultado').innerHTML = 'Resultado: ' + (convertir('idNum1') * convertir('idNum2'));


const dividir = () => document.getElementById('labelResultado').innerHTML = 'Resultado: ' + (convertir('idNum1') / convertir('idNum2'));


const eliminarElemento = () => document.getElementById('idEliminar').remove();


const insertarElemento = () => document.getElementById('elemento').innerHTML = "<strong>Importante</strong>";

const conceptosJS = () => {
    //Declaracion de variable
    //var (ya no es comunmente utilizada)
    //let es mucho mas eficiente
    //const para constantes

    var variable1 = 'Luis';
    var variable2 = 1;
    let variable3 = 'Luis';
    let variable4 = 19;
    const variable5 = 'Luis';
    const variable6 = 19;

    console.log(variable6);

    //Declaracion de Arreglos 
    const diasSemana = ['Lunes', 'Martes', 'Miercoles'];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    diasSemana.push('Jueves', 'Viernes');
    console.log(diasSemana);
    const diasFinSemana = ['Sabado', 'Domingo'];
    console.log(diasSemana.concat(diasFinSemana));
    console.log(diasSemana);
    const diasCompleto = diasSemana.concat(diasFinSemana);
    console.log(diasCompleto);
    console.log(diasSemana);
    for (const dia of diasCompleto) {
        console.log(dia);
    }



    //Declaracion de Objetos
    const persona = {
        nombre: "Luis",
        apellido: "Ortiz",
        edad: 26,
        ciudad: "Quito"
    }
    console.log(persona);

    const persona2 = {
        nombre: "Alexander",
        apellido: "Ortiz",
        edad: 19,
        ciudad: "Quito",
        vehiculo: {
            marca: "Suzuki",
            modelo: "Scross",
            anio: 2020
        }
    }
    console.log(persona2);

    const luis = "luis";
    const arreglo = ['Luis', 'Ortiz']
    arreglo[0] = 'chido';
    console.log(arreglo);

    //Desestructuracion de arreglos
    const dias2 = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    const [dia1, dia2, dia3, dia4, dia5] = dias2;
    console.log(dia2);
    console.log(dia4);
    console.log(dia5);

    const [d1, d2, d3, d4, d5] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(d3);
    console.log(d5);


    //Desestructuracion de objetos
    const persona3 = {
        nombre: "Luis",
        apellido: "Ortiz",
        edad: 26,
        ciudad: "Quito"
    }

    const { apellido, edad } = persona3;
    console.log(apellido);
    console.log(edad);

    const persona4 = {
        nombre: "Alexander",
        apellido: "Ortiz",
        edad: 19,
        ciudad: "Quito",
        vehiculo: {
            marca: "Suzuki",
            modelo: "Scross",
            anio: 2020
        }
    }

    const { nombre, vehiculo } = persona4;
    console.log(vehiculo);
    const { marca, anio } = vehiculo;
    console.log(marca);
    console.log(anio);

}
