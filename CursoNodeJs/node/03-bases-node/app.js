//const multiplicar = require('./multiplicar/multiplicar');
//con destructuración

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}



// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]


//let base = '5';

//console.log(process.argv);
/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
*/

//let argv2 = process.argv;

//console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
*/
//npm ini