/*
setTimeout(function() {
    console.log('Hola Mundo!');
}, 0);

setTimeout(() => {
    console.log('Holaaaaaa!!!!!');
}, 0);
*/
let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id //No es necesario poner id: id si tiene el mismo nombre
    }

    if (id === 20) {
        callback(`El usuario con ${id}, no existe`)
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(20, (usuario) => {
    console.log('Usuario de base de datos', usuario);
})

getUsuarioById(1, (err, usuario) => { //para evitar errores el primero se tiene q considerar el error
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
})