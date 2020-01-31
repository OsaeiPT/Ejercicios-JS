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