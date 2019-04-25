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

/*
const producto1 = 'Pizza',
    precio1 = 30,
    producto2 = 'Hamburguesa',
    precio2 = 40;

let html;

//Forma antigua de crear un template

html = '<ul>' +
    '<li>Orden: ' + producto1 + '</li>' +
    '<li>Precio: ' + precio1 + '</li>' +
    '<li>Orden: ' + producto2 + '</li>' +
    '<li>Precio: ' + precio2 + '</li>' +
    '<li>Total: ' + (precio1 + precio2) + '</li>' +
    '</ul>';

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
*/

/*
//Forma antigua
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

//Forma moderna
const meses = new Array('enero', 'febrero', 'marzo', 'Abril');
console.log(meses);

const mezclado = ['Hola', 20, true, null, false, undefined];
console.log(mezclado);
console.log(meses.length);
console.log(Array.isArray(meses));

meses[4] = 'Mayo';
meses.push('Junio');

console.log(meses[5]);

//Encontrar un elemento en el arreglo
console.log(meses.indexOf('Abril'));

//Añadir al inicio del arreglo
meses.unshift('Mes 0');

//Eliminar un elemento de un arreglo
meses.pop();

//Eliminar un elemento del arreglo (el primero)
meses.shift();

//Quitar un rango
meses.splice(2, 1); //quitar del segundo a mas

//Invertir el orden
meses.reverse();

console.log(meses);

let arreglo1 = [1, 2, 3],
    arreglo2 = [9, 8, 7];

console.log(arreglo1.concat(arreglo2));

//Ordenar un arreglo
const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja', 'Zanaoria'];

frutas.sort();
console.log(frutas);

arreglo1 = [3, 9, 12, 43, 5, 656, 767, 898, 65, 776, 8];
//arreglo1.sort();

arreglo1.sort(function(x, y) {
    return x - y; //y-x --> decreciente
})


console.log(arreglo1);
*/
/*
const numeros = [1, 2, 3];

numeros[0] = 4;
numeros.push(5);

console.log(numeros);
*/

/*
//Crear Objetos
const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Disen',
    email: 'Correo@correo.com',
    edad: 20,
    musica: ['Trance', 'Rock', 'Grunge'],

    hogar: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    //Una funcion dentro de un arreglo se le llama metodo
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}


const persona2 = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Disen',
    email: 'Correo@correo.com',
    edad: 19,
    musica: ['Trance', 'Rock', 'Grunge'],

    hogar: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    //Una funcion dentro de un arreglo se le llama metodo
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}
persona.musica.push('Alternativo');
console.log(persona.musica);
console.log(persona.hogar.ciudad);
console.log(persona2.nacimiento());
*/
/*
//Arreglo de objetos
const autos = [
    { modelo: 'Munstang', motor: 6.2 },
    { modelo: 'Camaro', motor: 6.1 },
    { modelo: 'Challenger', motor: 6.3 },
];

for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} ${autos[i].motor}`);
}
*/

//Funciones de JavaScript

/*
//Function declaration
function saludar(nombre) {
    console.log('Hola');
    console.log(`Hola ${nombre}`);
}

saludar('Alma');

function sumar(a, b) {
    return a + b;
}

let suma;

suma = sumar(1, 2);
console.log(suma);

//Forma antigua
function saludar2(nombre) {
    if (typeof nombre === 'undefined') {
        nombre = 'Visitante';
    }
    return `hola ${nombre}`;
}

let saludo;
saludo = saludar2("Alia");
console.log(saludo);

//Forma nueva
function saludar3(nombre = 'Visitante') {
    return `holasss ${nombre}`;
}
let saludo3;
saludo3 = saludar3();

console.log(saludo3);

//Function expression
const sumaExp = function(a = 3, b = 4) {
    return a + b;
}

console.log(sumaExp(1, 2));
console.log(sumaExp(5));

const saludar4 = function(nombre = `Visitante`) {
    return `hola ${nombre}`
}

console.log(saludar4());

const saludar5 = function(nombre = `Visitante`, edad = 20, trabajo = 'des') {
    return `hola, tienes ${edad}, profesion ${trabajo} y te llamas ${nombre}`
}

console.log(saludar5('Juan'));

//Funciones IIFE
(function(tecnologia) {
    console.log(`Creando un IIFE --> Aprendiendo ${tecnologia}`);
})('JavaScript');

//Metodos de propiedad
//Cuando una función se pone dentro de un objeto
const musica = {
    reproducir: function(id) {
        console.log(`Reproducir musica ${id}`);
    },
    pausar: function() {
        console.log(`Pausar musica`);
    }
}

//Los metodos tambien pueden agregarse/crearse fuera del objeto
musica.borrar = function(id) {
    console.log(`Borrando la cacion con id:  ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);
*/

//Manejo de errores con TryCatch
/*
obtenerClientes();

try {
    algo();
} catch (error) {
    console.log(error);
} finally {
    console.log('Se ejecuta de todos modos');
}

obtenerClientes();

function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function() {
        console.log('Completo');
    }, 3000);
}
*/
/*
//Manejo de fechas Js
const diaHoy = new Date();

let navidad2017 = new Date('12-25-2017');

console.log(diaHoy);
console.log(navidad2017);

//ver metodos para obtener datos de un date
//getF... set --> ver get y set de fechas
*/

//Condicional en una sola linea
/*
const logueado = true;

console.log(logueado === true ? 'Si logueado' : 'No logueado');
*/


/*
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender Js'];

for (let i = 0; i < pendientes.length; i++) {
    //console.log(pendientes[i]);

}

pendientes.forEach(function(pendiente, index) {
    console.log(`${index} : ${pendiente}`);
});

console.log(pendientes);

//Map para recorrer un arreglo de objetos

const carrito = [
    { id: 1, producto: 'libro1' },
    { id: 2, producto: 'libro2' },
    { id: 3, producto: 'libro3' },
    { id: 4, producto: 'libro4' },
];

const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;
});

console.log(nombreProducto);

//Imprimir un objeto con ubn for

const automovil = {
    modelo: 'camaro',
    motor: 6.1,
    anio: 1969,
    marca: 'Chevrolet',
}

for (let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}
*/

//Ver metodos de windowObject

//Scopes