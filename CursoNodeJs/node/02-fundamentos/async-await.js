/**
 * Async Await
 */


/* 
let getNombre = async() => {

    //throw new Error('No eciste nombre para el usuario');

    return 'Fernando';
};
*/


//Al poner asyc se esta haciendo

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Fernando');
        }, 3000);

        resolve('Fernando');
    });
}


let saludo = async() => {
    let nombre = await getNombre(); //Hace que se siga el mismo hilo

    return `Hola ${nombre}`;
}


/*
getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    })
*/

saludo().then(mensaje => {
    console.log(mensaje);
})