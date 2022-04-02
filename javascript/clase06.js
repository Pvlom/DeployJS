let empleados = ['Juan','Roberto','Maria','Alejandro','Federico'];
console.log(empleados[0]);
console.log(empleados[1]);
console.log(empleados[2]);
console.log(empleados[3]);
console.log(empleados[4]);
console.log(empleados[5]);
//tendriamos que estar imprimiendo para cada una de las listas

let caja = document.getElementById('caja');
let mensaje;

caja.innerHTML = empleados[0];
caja.innerHTML = empleados[1];
caja.innerHTML = empleados[2];
caja.innerHTML = empleados[3];
caja.innerHTML = empleados[4];
caja.innerHTML = empleados[5];

console.log(empleados.length);

console.log('==============================');
console.log('==============================');

for (let i = 0; i < empleados.length; i++) {
    mensaje = empleados[0] + '<br>'
    document.getElementById('caja').innerHTML = mensaje
};

console.log('==============================');

//sobre escribiendo en el mismo elemento el mismo elemento
//como hago para que no me borre todos los empleados?
// para eso estan los BUCLES. FOR - - -PALABRA RESERVADA para los condicionales (se usa para repeticiones)
// sintaxis. indice = donde va arrancar. index = hasta donde quiero que llegue Index ++ = al paso
//Array.legth = me pasa el numero de datos o la cantidad de elemntos del array
// que significa el i++ = incrementar de a uno.
// que signifa BUCLE = que va girando

console.log(empleados.length);

//let mensaje = '';


/*
for (let i = 0; i < empleados.length; i++){
    mensaje += empleados[i] + '<br>'
    alert(empleados[i])
    document.getElementById('caja').innerHTML = mensaje
};
*/

//Simpre los '</li>' y '</ol>'. deben ir entre comillas. de lo contrario tira error.
for (let i = 0; i < empleados.length; i++) {
    mensaje += '<ul>' + '<li>' + empleados[i] + '</li>' + '</ul>' +  '<br>'; 
    document.getElementById('caja').innerHTML = mensaje;   
}

//Bucle while
//ol = order list
//li = lista de empleados


console.log('==============================');
console.log('==============================');
console.log('Impresion del bucle while');


let a = 0;
let otromensaje = '';
while ( a < empleados.length) {

    console.log(empleados[a]);

        otromensaje += '<li>' + empleados[a] + '</li>'
        document.getElementById('lista').innerHTML = otromensaje;
        a++;    
}

//Funciones. Algon parecido al bucle while. bucle. repite instrucciones. funciones. pequeñas porciones de codigo que yo reservo guardo para realizar siertas tareas, se ponen en accion cuando las llame. tiene la caracteristica de ser llamadas. bloque de codigo 

//Funciones en JavaScript
//nombre
function mifuncion() {
    alert('Buenas soy la funcion mifuncion()');
    console.log('me llamaste, soy mifuncion');
}
//cuatro veces estoy llamando a mifuncion.
mifuncion();
//mifuncion();
//mifuncion();
//mifuncion();

//Las funciones tambien pueden recibir parametros
//NaN = not a number
let numero1 = 2500;
let numero2 = 150;
let resultado

//no le puese nada en los parentes, porque tenia los datos. no necesito que el usuario introduzca los datos.
function suma(){
    resultado = numero1 + numero2
    console.log('El resultado de la suma es:' + resultado);
    console.log('==============================');
}
//No recibe valores
suma();
resta(numero1, numero2);
multiplicacion();
division(numero1,numero2);

//recibe valores
function resta(a, b){
    resultado = a-b
    console.log('El resultado de la Resta es:' + resultado);
    console.log('==============================');
}
//No recibe valores
 function multiplicacion(){
    resultado = numero1*numero2
    console.log('El resultado de la Multiplicacion es:' + resultado);
    console.log('==============================');
 }

 //Recibe valores
 //num1 y num2 estan dentro de la funcion
function division(num1,num2){
    resultado = num1/num2
    console.log('El resultado de la Division es:' + resultado);
    console.log('==============================');
}

//Num1. no esta definida. SU alcance es netamente local. No existe num1. porque no la he declarado como una variable de alcance GLOBAL.
//num1 y num2. son variables de alcance LOCAL
//console.log(num1);

// let a = 0 . variable de alcance GLOBAL

//