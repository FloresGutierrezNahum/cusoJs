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