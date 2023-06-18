let personas = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
let rechazados = [];
let admitidos = [];
let i = 0;

while(i <= personas.length - 1){
    if((personas[i] == 'Jose') || (personas[i] == 'Sofia')){
        rechazados.push(personas[i]);
    } else{
        admitidos.push(personas[i]);
    }
    i++
}

console.log("La lista de invitados admitidos es:");
for(let i = 0; i < admitidos.length; i++){
    console.log(admitidos[i]);
}
console.log("La lista de invitados rechazados es:");
for(let i = 0; i < rechazados.length; i++){
    console.log(rechazados[i]);
}

admitidos = admitidos.sort()
console.log("La lista ordenada de invitados admitidos es:");
for(let i = 0; i < admitidos.length; i++){
    console.log(admitidos[i]);
}

rechazados = rechazados.sort()
console.log("La lista  ordenada de invitados rechazados es:");
for(let i = 0; i < rechazados.length; i++){
    console.log(rechazados[i]);
};