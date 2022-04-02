
//A travez del DOM puedo acceder a los documentos y simpre se debe iniciar con (document. getelementById)
//DOM. manejo de documentos de los objetos. 

let titulo = document.getElementById('titulo');
console.log('EL elemnto capturado es: ' + titulo);

titulo.innerText ='Bienvienido a la clase 04';

let otrotitulo =document.getElementById('otrotitulo');

otrotitulo.innerHTML = '<div> Nuevo elemento para el HTML</div>';



/*Este ejemplo tira error
let nombre = document.getelementById('nombre');
if (nombre == 'admin') {
    console.log('Binevenido');    
}else{
    console.log('contraseña incorrecta');
    404
}
*/
/*
¿que ventajas tiene uno sobre otro?
Depende de lo que estamos escribiendo.
atributos(clase.typos, id,datos) que tan cargado nuestro elemento HTML.
Diferentes forma para obtener o capturar datos:

document.getElementById -- trabajar con Datos
document.querySelector  -- trabajar
document.getElementByIdTagName  -- trabajar con etiquetas
*/


/*

//trabaja con datos ById
document.getElementById('carouselExampleControl');
//devuelve el primer elemento con el uno.
let uno = document.querySelector('.uno');
console.log(uno);

//Etiquetas
docuemnt.getElementByIdTagName(h1).length();

titulo.

*/

//Array de Objetos
//variables especificas donde podemos guardar datos
//Empleados de una empresa. Datos importantes que estamos cargando

let empleados = [
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

//Metodo que ordena los arreglos
empleados.sort();
console.log('accedemos a todo el Array'); //Acceso al Array de empleados
console.log(empleados);

console.log('Accedemos a un elemnto del Array');
console.log(empleados[1]);  //Acceso a uno de los elementos del arreglo de empleados

console.log('Accedemos a una de las variables');
console.log(empleados[1].cargo);    //como acccedemosa una de las variables

let ultimo = empleados[empleados.length - 1];
console.log(ultimo)
//Sin usar la concatenacion
//Usando los tamplate stirng
console.log(`EL ultimo empleado es: ${ultimo.nombre}, su cargo es ${ultimo.cargo} y su contacto es ${ultimo.telefono}`);
//Usando los concatenacion
console.log('EL ultimo empleado es:'+ ultimo.nombre + ',' + 'su cargo es:' + ultimo.cargo + ',' + 'y su contacto es:' + ultimo.telefono);
