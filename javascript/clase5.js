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
    telefono: 12345678
});

//Introducir datos al Array


console.log(trabajadores);

//Imprimimos a los trabajadores en el html

let imprimir = document.getElementById('caja');
imprimir.innerHTML = trabajadores[4].nombre;



imprimir.innerHTML = `La nueva trabajadora de la empresa es: ${trabajadores[4].nombre} y su cargo es Gerente de ${trabajadores[4].cargo} y su telefono de contacto para consultas es ${trabajadores[4].telefono}`;
//El metodo: 
//PUSH. simpre va a introducir datos al FINAL
//UNSHIFT. simpre va a introducir datos al INICIO
//SPLICE. Elimina datos / Inserta datos
//SLICE. Corta el Array - directamente, NO elimina el resto.

//Agregar datos al inicio del Array
//Metodo UNSHIFT
trabajadores.unshift({
    nombre: 'Mario',
    cargo: 'Cajero',
    telefono: 12345678
});


//Eliminar datos con 
trabajadores.splice(4);
console.log(trabajadores);

//Agregar datos
//4.indice
//1. elemento que qiero agrgar
trabajadores.splice(4,1,{ 
nombre: 'Pablo',
Cargo: 'Transporte',
telefono: 12345678
});

console.log(trabajadores);

let empresa = trabajadores.concat(inversionistas);

//No se ven en la consola porque son objetos. tenemos que acceder a ellos con .nombre

console.log(`Los integrantes de la empresa son: ${empresa}`);

let mayores = inversionistas.slice(2);
console.log(mayores);

