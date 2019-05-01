let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

/*
let getEmpleado = (id, callback) => {

    let empledoDB = empleados.find((empleado) => empleado.id === id);

    if (!empledoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empledoDB);
        //callback(null, empledoDB); evitar el error de llamar al callback mas de una vez
    }



}
*/

/*
getEmpleado(10, (err, empleado) => {
    console.log(empleado);
});

//Retorna undefined --> porque no existe el id 10 y tampoco se está manejado el error
*/

/*
getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    console.log(empleado);
});
*/
/*
let getSalario = (empleado, callback) => {

    let salarioBD = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioBD) {
        callback(`No existe el salario del empledo con ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
    })


    console.log(`El salario de ${ resp.nombre} es de ${resp.salario}`);
});
*/

//Correccion del get empleado

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`)
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el usuario ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}



getEmpleado(2, (err, empleado) => {

    if (err) {
        return console.log(err);
    }


    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        };

        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);

    });


});