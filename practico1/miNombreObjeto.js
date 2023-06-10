let objeto = {nombre: "Monica", apellido:"Moreno", edad: 38};
let jsonString = JSON.stringify(objeto);
let mensaje = "Mi objeto persona es el siguiente ";
let objetoPersona = mensaje + jsonString;

console.log(objetoPersona);