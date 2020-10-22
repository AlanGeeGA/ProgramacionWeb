/* VARIABLES */
// var, let y const

// var - puede ser utilizada en cualquier punto del documento.
// Incluso antes de ser definida.

console.log(uno);
var uno = "cualquiera";
console.log(uno);

var x = 1;
if (true) {
    var x = "verdadero";
}
console.log(x);

// let - Definición de bloque, es variable y no se puede utilizar
// antes de ser declarada

console.log(dos);
let dos = "otro valor";
console.log(dos);

let y = "falso";
if (true) {
    let y = "verdadero";
    console.log(y);
}
console.log(y);

var var1 = 1;
var var1 = 2;

let let1 = 1; // No puedes repetir nombres, osea volver a declararlo

const tres = "igual";

// VALORES DE VERDADERO Y FALSO

// valor falso: undefined, null, 0, ""
// valor verdadero: valor diferente a los falsos

let mes;
mes = 10;

if (mes) {
    console.log("es verdadero");
} else {
    console.log("es falso");
}

// OPERADORES DE IGUALDAD

// doble igual - Devuelve verdadero si los dos operando son iguales
mes == "10" ? console.log("Si") : console.log("No");
// triple igual - Devuelve verdadero si los operandos osn iguales y mismo tipo
mes === "10" ? console.log("Si") : console.log("No");

// condición ? true : false;
// ? es entonces y el : es como el else

// TEMPLATE DE STRING

let nombre = "Juan";
let apellido = "Lopez";
const nacimiento = 1990;
function calculaEdad(nac) {
    return 2020 - nac;
}

console.log(nombre + " " + apellido + ", su edad: " + calculaEdad(nacimiento));

console.log(`${nombre} ${apellido}, su edad: ${calculaEdad(nacimiento)}`);

// FUNCIONES DE FECHA

const anios = [2000, 2005, 2010, 2020];

// El map sirve para recorrer todo mi arreglo como si fuera un for each, sin embargo va  regresar un array con los resultados de las operaciones que hagamos
var edad = anios.map(function(el){
    return 2020 - el;
});
console.log(edad);

let edadNueva = anios.map(el => 2020 - el);
console.log(edadNueva);

edadNueva = anios.map((el, index) => `Edad ${index + 1}: ${2020 - el}`);
console.log(edadNueva);

edadNueva = anios.map(
    (el, index) => {
        const actual = new Date().getFullYear();
        const edad = actual - el;
        return `Edad ${index + 1}: ${edad}`;
    }
);
console.log(edadNueva);

const cuadrado = function (num) {
    return num * num;
}
console.log(cuadrado(2));

const cuadrado2 = (num) => {
    return num * num;
}
console.log(cuadrado2(2));

const cuadrado3 = (num) => num * num;
console.log(cuadrado3(2));

const frutas = [
    {
        nombre: "Manzana",
        cantidad: 2
    },
    {
        nombre: "Fresa",
        cantidad: 5
    },
    {
        nombre: "Mora azul",
        cantidad: 8
    },
    {
        nombre: "Naranja",
        cantidad: 12
    }
];

const menores10 = frutas.filter(fruta => fruta.cantidad < 10 && fruta.nombre.startsWith("M"));
console.log(menores10);
