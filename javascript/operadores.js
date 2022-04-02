//Operadores JS
//Asignacion

//Asignacion (=) asignamos informacion a una variable

let numero = 25;
console.log("El numero inical es: "+ numero);

//Incremento + sumarle uno a la variable numerica
//Mucho codigo
let otroNumero = numero + 1;
console.log(otroNumero);
    //otra forma de hacerlo
numero = numero + 1;
//25 = 25 +1;
console.log(numero);
//utilizo el operador (++)

//cada vez que un usuario va entrando a una aplicaicon, pagina (contador)
numero++;
console.log(numero);

//Operador decremento
numero--;
console.log(numero);

console.log('============================');
console.log('============================');


//Operadores Matematicos
let uno = 100;
let dos =80;
console.log(uno);
console.log(dos);

//operador suma
resultado = uno + dos;
console.log("El resultado de la suma es: "+ resultado);
//Resta
resultado = uno - dos;
console.log("El resultado de la resta es: "+ resultado);

//mult
resultado = uno * dos;
console.log("El resultado de la mult es: "+ resultado);

// div
resultado = uno / dos;
console.log("El resultado de la Div es: "+ resultado);

//Modulo Ver. JamBoard para tener una pizarra. 
//100 dividido 12 = 8.33
// El resto que queda 100 menos 96 = 4. ***Depende del resultado para ssaber si es PAR / IMPAR, para eso se usa.
resultado = uno % dos;
console.log("El resultado de la Mod es: "+ resultado);

resultado =(200 + 250) * uno/dos;
console.log("El resultado de la operacion es:" + resultado);

//** Potenciacion
//100 a la 2, 100 * 100
// en JS
resultado = uno ** 1;
console.log("El resultado de la potencia es:" + resultado);

//Operador de Negacion
//Poner un signo de asignacion. (!)
//Negar UNO
// traduccion no uno
//let Negacion = !uno;
!uno;
console.log(uno);

let falso = false;
console.log("Antes de la negacion: "+ falso);

//Operador Logicos &&, es el Y ||

let codigo = 123456;
let usuario = "Berni";
// condicional IF, posibilidad de elegir ciertas cosas: 
//Sintaxis del 'if' if(condicion == true){
//true
//}
// si ponog un solo igual =, lo define como una variable
// si quiero comparar uso el igual ==

// && logico
if(codigo == 12345 && usuario == "Berni"){
    console.log("Bienvenido a la red social de tu preferncia");
}else{
console.log("contraseña o usurios incorrectos");
}

//No se tendriaque usar el o logico, en un acceso. Evalua si una de las dos condiciones es verdadera
// o logico (||), es mas flexible. evaluar una de las dos condiciones es veraddera
//Puerta de escape ELSE. que significa si no.
if(codigo == 12345 || usuario == "Berni"){
    console.log("Bienvenido a la red social de tu preferencia");
}else{
console.log("contraseña o usurios incorrectos");
}

//otro ejemplo con el y logico
// && ambos deben ser true para que me permitan entrar. Es que debo usar en una aplicacion.
let edad = 18;
let dinero = false;

if(edad == 18 && dinero == true){
    console.log('Genial! Podes comprar bebidas !!');
}else{
console.log("Lo siento sera en otra oportunidad");
}

// o logico, evalua que una de las dos variables sea true. verdadera. una de las condiciones sea true deja entrar a la aplicacion.
if(edad == 18 || dinero == true){
    console.log("Genial, Podes comprar bebidas !!");
}else{
console.log("Lo siento sera en otra oportunidad");
}

console.log('============================');
console.log('============================');


//Operadores relacioneales, (>,<,>=,<=,==(igual para comparacion),!>(distinto a))

edad = 18;
if(edad >= 18 ){
    console.log("Genial ! Podes comprar bebidas !!");
}else{
console.log("Lo siento, sera para otra oportunidad");
}


//Incluye 18 hasta  . . .n

edad =15;
if(edad < 18 ){
   console.log("Lo siento, no Podes ingresar a la fiesta");
}

//Distinto a
//contador que va a cambiar de Libre a LLeno.

let lugares = 'lleno'

if(lugares != 'libre'){
    console.log("Lo siento, ya no hay lugar en el cine");
 } else  {
    console.log('compre todas las entradas que necesite');
 }

// if con else if

let comprar = true;
let asientos = false;

if (comprar) {
    console.log('Bienvenido a la empresa de pasajes');
    document.write('Bienvendo a la empresa de pasajes')
}
    if (comprar && asientos) {
        console.log('Lo asintos, este vuelo viaja completo y no tenemos asientos');
        
    } else {
        console.log('Esta inivtado a viajar cuando quiera');
    
}
