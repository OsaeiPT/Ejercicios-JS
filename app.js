// Primer Script
{
    var numero = Math.floor((Math.random() * 99) + 1);
    document.write(numero);
}
// Segundo Script
{

    var texto = prompt("Introduce el texto");
    document.write("INFORMACION: " + texto.toUpperCase + ".");
}
// Tercer Script
{
    var cadena = prompt("Introduce un Texto:");
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    for (j = 0; j < numchar; j++) {
        car = cadena.charAt(j);
        salida = car + salida;
    }
    document.write(salida);
}

// Cuarto Script
{
    var cadena = prompt("Introduce una cadena de texto:");
    var numchar = cadena.length;
    cadena = cadena.toUpperCase();
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");
}

// Quinto Script

var edad = prompt("Introduce tu edad");

if (Number(edad) == edad) {
    if (edad > 18) {
        document.write("Puedes conducir");
    }
}

else {

    alert("Introduce un numero válido");
}



// Sexto Script 





// Septimo Script



// Octavo Script

do {

    var nota = prompt("Introduce tu nota");

    if (Number(nota) == nota) {

        if (nota > 0 && nota <= 10) {
            if (nota < 3) {
                alert("Muy deficiente");
            }
            else if (nota < 5) {
                alert("Insuficiete");
            }
            else if (nota < 6) {
                alert("Suficiente");
            }
            else if (nota < 7) {
                alert("Bien");
            }
            else if (nota < 9) {
                alert("Notable"); 5
            }
            else if (nota >= 9) {
                alert("Sobresaliente");
            }
        }

        else {
            alert("Nota erronea");
        }
    }

    else {

        if (nota != undefined) {
            alert("Introduce un numero valido");
        }
    }

} while (nota != undefined);

// Noveno Script

var nombre1 = prompt("Nombre 1:");
var edad1 = Number(prompt("Edad 1:"));

var nombre2 = prompt("Nombre 2:");
var edad2 = Number(prompt("Edad 2:"));

var nombre3 = prompt("Nombre 3:");
var edad3 = Number(prompt("Edad 3:"));

var maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
}

// Decimo Script

var i, rep;
for (i = 1; i <= 30; i++) {
    for (rep = 0; rep < i; rep++) {
        document.write(i);
    }
    document.write("<br>");
}

// Onceavo Script

var i, rep;
for (i = 1; i <= 50; i++) {
    for (rep = 0; rep < i; rep++) {
        document.write(i);
    }
    document.write("<br>");
}

var numrep = prompt("Introduce numero de repeticiones");
if (Number(numrep) == numrep) {
    if (numrep > 0 && numrep <= 50) {
        var rep, i;
        for (i = 0; i <= numrep; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    }
    else {
        alert("El número introducido no es válido");
    }
}

// Doceavo Script 

document.write("<hr>");
var i;
var j = 100;
var rep = 0;
for (i = 1; i <= j; i++) {
    document.write(i);
    if (i % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    if (i % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    document.write("<br>");
    document.write("<hr>");
}

// Diesiseisavo Script

function aleatorio(min, max) {
    var numero = Math.round((Math.random() * (max - min)) + min);
    return numero;
}
var minimo = Number(prompt("Introduce el mínimo"));
var maximo = Number(prompt("Introduce el máximo"));
var resultado = aleatorio(minimo, maximo);
document.write(resultado);

// Diesisieteavo Script

function devuelvePi() {
    var devolver = (Math.PI).toFixed(2);
    return devolver;
}

document.write(devuelvePi());

// Diecinueveavo Script 

var i, j;
var filas = Number(prompt("Introduce numero de filas"));
var colum = Number(prompt("Introduce numero de columnas"));
var res = filas * colum;
document.write("<table border>");
for (i = 0; i < filas; i++) {
    document.write("<tr>");
    for (j = 0; j < colum; j++) {
        document.write("<td>");
        document.write(res);
        res--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
