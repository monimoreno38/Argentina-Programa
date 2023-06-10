let num1 = 8;
let num2 = 12;
let num3 = 6;
let num4 = 2;
let suma = num1 + num2;
let resta = num4 - num3;
let resultadoFinal = suma * resta;
let esPar = (resultadoFinal % 2) == 0;
let mensaje = "Mis variables de entrada fueron: " + num1 + ", " + num2 + ", " + num3 + ", " 
+ num4 + ". La respuesta a verificar si el resultado final es par es: " + esPar;
console.log(mensaje);