console.log("Hola a todos");

// Variables: var y let

var mes = "Octubre";
mes = 10;

console.log(typeof(mes));
// typeof te dice el tipo del que estas poniendo
// Javascript te cambia el tipo

var hola;
hola = null;
console.log(hola);
// Se nos pone como undefined si no le pones nada
// El null se utiliza cuando la variable no tiene ningun valor
// dir me trae un objeto

console.dir(document); // Me trae todo el documento html
console.log(document); // Me trae todo el documento html como yo lo escribí
document.title = "Prueba Javascript";

function suma (a, b) {
    // debugger;
    alert("mi mensaje");
    document.getElementById("resultado").innerHTML = a + b; // innerHTML establece una sintaxis de html
}

var imprimir = function (dato) {
     document.getElementById("valor").innerHTML = dato;
}

var aumentar = function () {
    localStorage.cuenta++;
    imprimir(localStorage.cuenta);
}

var reiniciar = function () {
    localStorage.cuenta = 0;
    imprimir(localStorage.cuenta);
}

var eliminar = function () {
    localStorage.removeItem("cuenta");
    imprimir(localStorage.cuenta);
}

if (typeof(Object) != "undefined") {
    if (localStorage.cuenta) {

    } else {
        localStorage.cuenta = 0;
    }
}