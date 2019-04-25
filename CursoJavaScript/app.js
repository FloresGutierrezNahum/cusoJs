//document.getElementById('app').innerHTML = "Hola Mundo";
/*
let nombre = prompt('cual es tu nombre?');
let edad = prompt('cual es tu edad?');
document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`
*/
/*
console.log("Enviando a la consola");
console.log('Hasta aqui todo bien');
console.log(true);
console.log('ID:' + 20);
*/

// *********Strings
//var let const --var es antiguo

/*

//var nombre = 'Juan';
//var nombre = 'Chorri';
//nombre = 'Jhon';

let nombre = 'Juan';
//let nombre = 'Leo'; //Let no permite redeclarar, pero cambia mediante la ejecucion
nombre = 'y lala "a"';
nombre = 'lalala \'aaaa\' ';
//const : son constantes q no camniaran de valor

//Concatenar texto --> Forma antigua
nombre = 'mensaje1' + "Mensaje 2";
console.log(nombre);

let aprendiendo = 'Aprendiendo JavaScript, CSS, HTML para ser Frontend',
    tecnologia = 'Js';

//Concatenar --> JsModerno
console.log(`${aprendiendo} ${tecnologia}`);
console.log(aprendiendo.length);
console.log(tecnologia.concat(' ', 'Es genial')); //Antigua
console.log(tecnologia.toUpperCase());

console.log(aprendiendo.indexOf('CSS'));
console.log(aprendiendo.slice(-1));
console.log(aprendiendo.slice(0, 11));
console.log(aprendiendo.split(' '));
console.log(aprendiendo.split(', '));
console.log(aprendiendo.replace('CSS', 'PHP'));
console.log(aprendiendo.includes('CSS'));
console.log(tecnologia.repeat(10));


*/

/*
//Manejo de Números

const num1 = 30;
const num2 = 20;
const num3 = 20.20;
const num4 = .1020;
const num5 = -3;

let resultado;
resultado = num1 + num2;

//Libreria Math
resultado = Math.PI;

//Min
resultado = Math.min(1, 2, 3, 4, 5, 6, 7, 8);

console.log(resultado);

let puntaje;

console.log(puntaje);

*/

/*

//Las variables pueden tener distintos valores
let valor;
//Variables primitivas

valor = 'cadena de texto'
valor = 20;
valor = true;
valor = null;
//valor = undefined;
//valor = { nombre: 'Juan' }
console.log(valor);

//Variables de referencia

//Symbol
valor = Symbol('Simbolo');
//Arreglo 
valor = [1, 2, 3, 4];
//Objetos
valor = {
        nombre: 'Juan',
        edad: 20
    }
    //Fecha
valor
console.log(typeof valor);

*/
/*
const num1 = "50",
    num2 = 10,
    num3 = 'tres';

//console.log(Number(num1));
//console.log(parseInt(num1));
//parserInt - parseFloat

//toFixed
var dato = 10101.4154545
dato = '12312312.3131'
console.log(parseInt(dato).toFixed(1)); //Lo q va en los parentesis son los decimales

//Comparador == --> comparador mas estricto ===

*/

/*
//Convertir number a string
let cp;

cp = 90210;
cp = String(cp);

console.log(cp.length);

let dato;

dato = true;

dato = String(dato);

//Js moderno
dato = 20;
dato = dato.toString();

console.log(dato);
console.log(dato.length);
console.log(typeof dato);

*/

//Template Literals o String Template
const producto1 = 'Pizza',
    precio1 = 30,
    producto2 = 'Hamburguesa',
    precio2 = 40;

let html;

//Forma antigua de crear un template
/*
html = '<ul>' +
    '<li>Orden: ' + producto1 + '</li>' +
    '<li>Precio: ' + precio1 + '</li>' +
    '<li>Orden: ' + producto2 + '</li>' +
    '<li>Precio: ' + precio2 + '</li>' +
    '<li>Total: ' + (precio1 + precio2) + '</li>' +
    '</ul>';
*/
//Forma moderna

html = `
        <ul>
            <li>Orden: ${producto1} </li>
            <li>Orden: ${precio1} </li>
            <li>Orden: ${producto2} </li>
            <li>Orden: ${precio2} </li>
            <li>Orden: ${total(precio1,precio2)} </li>
        </ul>
       `;

function total(precio1, precio2) {
    return precio1 + precio2;
}

document.getElementById('app').innerHTML = html;