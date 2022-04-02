console.log('--------------------');
console.log('--------------------');

console.log('Soy el codigo del archivo externo JS');


var $apellidoempleado;

var _provinciaempleado; //podemos iniciar una variable con _

console.log('==========================');
console.log('Cambio de variables');
nombreempleado = 'Berni';
console.log(nombreempleado);

nombreempleado = 'Pablo';
console.log(nombreempleado);



let continente;
//No podemos hacer esto
//var -pais;    // No iniciamos una variable con -
//var país;     // No inicamos una variable con acentos
//cajita que se llama pais y vale Argentina
let pais = 'Argentina';     //Declaracion y asignacion de una variable
//cajita  que se llama edad y vale 25
let edad = 25;
console.log(edad);

edad = 35;
console.log(edad);

edad = 'Mario';
nombreempleado =150;
console.log(edad);
console.log(nombreempleado);

console.log('==========================');

continente = 'America del sur';

//variable constante. ese valor no cambia
const pi = 3.14;    //variable que no cambia en toda la ejeccion del sistema
const IVA = 21;


console.log(nombreempleado);
console.log(pais);
console.log(edad);
console.log(continente);
console.log(pi);

console.log('==========================');
console.log('==========================');

// 3 maneras de escribir variables
//var, let y const

let verdadero = true;
let falso = false;

//Arrays

//let manzana = 'manzana';
//let pera = 'pera'

// pero tambien puedo hacer esto 

//Que cumplan la misma semejanza
//de preferencia que no combine string y numero
let frutas = ['Manzana','Pera','Ciruela','Pomelo','Sandia'];
let notasalumnos = [10,8,9,7,10];

console.log(frutas);
console.log(notasalumnos);

let decimal = 25.36;

//acceso al DOM

//atributo document
document.write('<p>Esta es nuestra primer clase de JavaScript!!</p>')

const persona = {
    nombre : 'Berni',
    dni: 123456789,
    provincia : 'Mendoza',
    pais: 'Argentina'
}

//Imprimimos la variable del tipo objeto

console.log(persona);

console.log('Quiero los datos de la persona con DNI:' + persona.dni);







