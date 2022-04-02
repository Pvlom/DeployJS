
console.log('Bienvenidos a la clase 03');

console.log('============================');

//Anidamiento
// prompt = funcion de ventana 

let edad = prompt("introduzca su edad:");

if (edad >=20) {
    let nombre = prompt("Ingrese su nombre: ");    
if (nombre == "Pedro") {
    alert("Bienvienido a la aplicacion" + nombre);
}else{
    alert('usted tiene 20 años o mas , pero no es pedro')
    }
}

console.log('============================');

//Usar el SWITCH. evaluar una sola cosa y darle multiples condiciones
// convertir todos los if anidados a switch
// Me sinplifica mi codigo suplantando los IF, if anidados.
let pais = prompt("Ingresa la prime letra de tu pais");
console.log(pais);

pais.toLowerCase();
console.log(pais);

let minuscula = pais.toLowerCase(pais);
console.log(minuscula);
// el a es un string. de lo contrario lo toma como numero.
// si ppones una letra imprime todo. Lo que quiero es que muetsre solo el pais que estoy escribiendo
//Que hace el breake. cuando encuentra la respuesta que esta buscando salta.
//Default. si no encuentra, me tira otra respuesta para que no quede vacio.
//Si ponemos una B mayuscula. no tiene registros y pone el mesnaje del DEFAUL.
//Usar . (agrega un metodo) lowerCase. agrega todo en minusculas.
//creamos otra variale

switch (pais.toLowerCase()) {
    case "a":
        console.log("Tu pais es Argentina");
        break;
    case "u":
        console.log("Tu pais es Uruguay");
        break;
    case "c":
        console.log("Tu pais es Chile");
        break;
    case "b":
        console.log("Tu pais es Brasil");
        break;
    default:
    console.log("No tenemos ninguna respuesta");
         break;   
}

/*
//Ejercicio trabajado en GRUPO:

let  nombre = prompt ('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad = prompt("introduzca su edad:");
alert('Hola ' + nombre + ' '+ apellido + ' ' + 'tu edad es :' + edad);

console.log('============================');
*/


//Objeto Fecha. 
// que son los objetos. instancias de alguna clase/categoria
// software para control de empleados (dni, empleado, nombre, etc.)
// 1,000 datos que necesito guardar. 
//dia va a hacer un objet fecha.
//Date en mayuscula la primera letra.
//Objeto fecha completo. Sat Mar 05 2022 09:33:08 GMT-0600 (Central Standard Time)
let dia = new Date();
console.log(dia);

//solo el año
//cuando pongo punto (.) aparecen todos los metodos que tiene el objeto dia: hrs, min. seg.
//despues del metodo abrir y cerrar parentesis
  console.log(dia.getFullYear());
//El mes / dia

//Otros datos que obtengo del objeto fecha
//Le sume uno al valor para que coincida. Enero = 0, febrero = 1.
console.log(dia.getMonth()+1);
console.log(dia.getDay());
console.log(dia.getHours());

//siempre hay que sumarle un 1 para obtner el dia. por que es un arreglo. inicia en CERO indice = [0]

//Herramienta (BOOTSTRAP) cosas especificas de JS.
//Framework o Libreria. que podemos usar desntro de nuestros proyectos
//Estilos CSS y JS
