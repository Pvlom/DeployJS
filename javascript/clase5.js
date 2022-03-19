let trabajadores = [
    {
nombre: 'Juan',
cargo: 'Administrador',
telefono: '123456789'

    },

    {
nombre: 'Pepe',
cargo: 'Auxiliar',
telefono:'123456789'
    },

    {
nombre:'Laura',
cargo:'Contador',
telefono:'123456789'
    },

    {
nombre:'Pablo',
cargo:'Abogado',
telefono:'123456789'
    }
];

let inversionistas = [
    {
nombre: 'Juan',
cargo: 'Administrador',
telefono: '123456789'

    },

    {
nombre: 'Pepe',
cargo: 'Auxiliar',
telefono:'123456789'
    },

    {
nombre:'Laura',
cargo:'Contador',
telefono:'123456789'
    },

    {
nombre:'Pablo',
cargo:'Abogado',
telefono:'123456789'
    }
];

//metodo Array
//agregar datos - objetos
//metodo PUSH es una funcion

console.log(trabajadores);
trabajadores.push({
    nombre: 'Maria',
    cargo: 'Recursos Humanos',
    Telefono: 12345678

});

//Introducir datos al Array


console.log(trabajadores);

//Imprimimos a los trabajadores en el html
imprimir.innerHTML = `La nueva trabajadora de la empresa es: ${trabajadores[4].nombre} y su cargo es Gerente de $(trabajadores[4].cargo} y su telefono de contacto para consultas es ${trabajadores[4].telefono}`;

trabajadores.unshift({
    nombre: 'Mario',
    cargo: 'Cajero',
    telefono: 12345678
});

//Eliminar Objetos
//trabajadores.splice(4);
//console.log(trabajadores);

//Agregar
trabajadores.splice(4,1,{ 
nombre: 'Pablo',
Cargo: 'Transporte',
telefono: 12345678
});

console.log(trabajadores);

let empresa = trabajadores.concat(inversionistas);

console.log(`Los integrantes de la empresa son: ${empresa}`);

let mayores = inversionistas.slice(2);
console.log(mayores);