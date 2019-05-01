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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        //Resolve -> si la promesa es exitosa
        //Reject  -> 

        let empledoDB = empleados.find((empleado) => empleado.id === id);

        if (!empledoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empledoDB);
            //callback(null, empledoDB); evitar el error de llamar al callback mas de una vez
        }

    });


}

/*

getEmpleado(12).then(empleado => {
    console.log('Empleado de BD', empleado);
}, (err) => {
    console.log(err);
});
*/

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioBD = salarios.find((salario) => salario.id === empleado.id);

        if (!salarioBD) {
            reject(`No existe el salario del empledo con ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            });
        }
    });


}

/*
getEmpleado(2).then(empleado => {
    console.log('Empleado de BD', empleado);

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    }, err => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});
*/

//Encadenar promesas
getEmpleado(12).then(empleado => {
    return getSalario(empleado);

}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
}).catch(err => {
    console.log(err);
})