console.log('inicio del programa');

setTimeout(function() {
    console.log('primer TimeOut');
}, 3000);

setTimeout(function() {
    console.log('Segundo TimeOut');
}, 0);

setTimeout(function() {
    console.log('Tercer TimeOut');
}, 0);

console.log('Fin del programa');