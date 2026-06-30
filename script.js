/* ================================================
   GUÍA FC 26 — script.js
   Programación III - Parte 3: JavaScript + DOM
   ================================================ */

/* ------------------------------------------------
   1. ARRAY de jugadores
   Se usa para alimentar el buscador de jugadores
   ------------------------------------------------ */
const jugadores = [
    { nombre: "Mbappé", club: "Real Madrid" },
    { nombre: "Haaland", club: "Manchester City" },
    { nombre: "Vinicius Jr.", club: "Real Madrid" },
    { nombre: "Bellingham", club: "Real Madrid" }
];

/* ------------------------------------------------
   2. FUNCIÓN: buscarJugadores
   Filtra las cartas de jugadores según lo que el
   usuario escribe en el input de búsqueda.
   Manipula el DOM: oculta/muestra elementos (display)
   y modifica el texto del resultado.
   ------------------------------------------------ */
function buscarJugadores() {
    const input = document.getElementById("buscador-jugadores");
    const texto = input.value.toLowerCase().trim();
    const cartas = document.querySelectorAll("#contenedor-jugadores .player-card-img");
    const resultado = document.getElementById("resultado-busqueda");

    let coincidencias = 0;

    cartas.forEach(function (carta) {
        const nombre = carta.dataset.nombre.toLowerCase();
        const club = carta.dataset.club.toLowerCase();

        if (nombre.includes(texto) || club.includes(texto)) {
            carta.style.display = "flex";
            coincidencias++;
        } else {
            carta.style.display = "none";
        }
    });

    if (texto === "") {
        resultado.textContent = "";
    } else if (coincidencias === 0) {
        resultado.textContent = "No se encontraron jugadores con ese nombre o club.";
    } else {
        resultado.textContent = coincidencias + " jugador(es) encontrado(s).";
    }
}

/* Evento: input — se ejecuta mientras el usuario escribe */
document.getElementById("buscador-jugadores").addEventListener("input", buscarJugadores);
/* ------------------------------------------------
   3. ARRAY de consejos
   Se usa para mostrar un consejo aleatorio
   ------------------------------------------------ */
const consejos = [
    "Practicá tiros desde fuera del área, suman variedad a tu ataque.",
    "Defendé con paciencia, no te tires al piso sin necesidad.",
    "Usá el sprint con cabeza, gastarlo todo te deja sin opciones.",
    "Cambiá el ritmo del partido cuando el rival está cansado.",
    "Practicá los penales en modo entrenamiento antes de un partido importante.",
    "No abuses de los regates, a veces un pase simple es mejor."
];

/* ------------------------------------------------
   4. FUNCIÓN: mostrarConsejoAleatorio
   Elige un consejo random del array y lo muestra
   en pantalla. Manipula el DOM modificando el texto.
   ------------------------------------------------ */
function mostrarConsejoAleatorio() {
    const indiceRandom = Math.floor(Math.random() * consejos.length);
    const consejoElegido = consejos[indiceRandom];

    const parrafo = document.getElementById("consejo-random-texto");
    parrafo.textContent = "💡 " + consejoElegido;
}

/* Evento: click — al presionar el botón se muestra un consejo nuevo */
document.getElementById("btn-consejo-random").addEventListener("click", mostrarConsejoAleatorio);