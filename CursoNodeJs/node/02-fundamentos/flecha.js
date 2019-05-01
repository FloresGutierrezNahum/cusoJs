function sumar(a, b) {
    return a + b;
}
console.log(sumar(1, 4));


let sumarFlecha = (a, b) => {
    return a + b;
}
console.log(sumarFlecha(2, 7));


let sumarFlecha2 = (a, b) => a + b;

console.log(sumarFlecha2(21, 7));


let saludar = () => 'Hola Mundo';

console.log((saludar()));

let saludar2 = (nombre) => {
    return `Hola ${nombre}`
}

console.log((saludar2('Na')));


let deadpool = {
    nombre: 'wade',
    apellido: 'Winston',
    poder: 'Regeneración',

    getNombre: function() {
        return `${this.nombre } ${this.apellido} - poder: ${this.poder}`
    }
};


let deadpool2 = {
    nombre: 'wade',
    apellido: 'Winston',
    poder: 'Regeneración',

    getNombre() {
        return `${this.nombre } ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool2.getNombre());