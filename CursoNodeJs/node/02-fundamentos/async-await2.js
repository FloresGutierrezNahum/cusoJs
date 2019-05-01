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
*/

let getEmpleado = async(id) => {


        let empledoDB = empleados.find((empleado) => empleado.id === id);

        if (!empledoDB) {
            throw new Error(`No existe un empleado con el ID ${id}`);
        } else {
            return (empledoDB);
            //callback(null, empledoDB); evitar el error de llamar al callback mas de una vez
        }



    }
    /*

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

    */


let getSalario = async(empleado) => {

    let salarioBD = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioBD) {
        throw new error(`No existe el salario del empledo con ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        };
    }


}


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));