const readlineSync = require('readline-sync');

const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

let cantidadDeJugadas = parseInt(readlineSync.question("Seleccione la cantidad de Rondas que desea Jugar (1, 2 o 3): ",
  {
    limit: ["1", "2", "3"],
    limitMessage: "El numero de Rondas debe ser 1, 2 o 3, por favor ",
  },
));

const JUGADAS_POSIBLES = [PIEDRA, PAPEL, TIJERAS];

function obtenerJugadaComputadora() {
  let generarRandom = Math.floor(Math.random() * 3);
  return JUGADAS_POSIBLES[generarRandom];
}

function obtenerJugadaUsuario() {
  let jugadaUsuario = readlineSync.question("Ingrese su eleccion (piedra, papel o tijeras): ",
    {
      limit: [JUGADAS_POSIBLES],
      limitMessage: "Ha ingresado un valor incorrecto, por favor ",
    },
  );
  return jugadaUsuario.toLowerCase();
}

function determinarGanador(seleccionComputadora, seleccionUsuario) {
  if (seleccionComputadora === seleccionUsuario) {
    return "Hubo un Empate";
  } else if (
    seleccionComputadora === PIEDRA && seleccionUsuario === TIJERAS ||
    seleccionComputadora === PAPEL && seleccionUsuario === PIEDRA ||
    seleccionComputadora === TIJERAS && seleccionUsuario === PAPEL
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

let puntajeComputadora = 0;
let puntajeUsuario = 0;
let numeroDeJugada = 1;

while (cantidadDeJugadas > 0) {
  console.log( "JUGADA N°: %i", numeroDeJugada);

  const jugadaComputadora = obtenerJugadaComputadora();
  const jugadaUsuario = obtenerJugadaUsuario();
  const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

  console.log("La computadora eligió: %s", jugadaComputadora);
  console.log("El usuario eligió: %s", jugadaUsuario);
  console.log("El resultado fue: %s", resultado);

  numeroDeJugada++;
  cantidadDeJugadas--;
  resultado === "Gana la computadora" && puntajeComputadora++;
  resultado === "Gana el usuario" && puntajeUsuario++;
};

console.log("RESULTADO: ");
console.log("Computadora: %i", puntajeComputadora);
console.log("Usuario: %i", puntajeUsuario);

if (puntajeComputadora > puntajeUsuario) {
  console.log("Y el Ganador es.... COMPUTADORA!!");
} else if (puntajeComputadora < puntajeUsuario) {
  console.log("Y el Ganador es.... USUARIO!!!");
} else {
  console.log("E M P A T E!!");
}