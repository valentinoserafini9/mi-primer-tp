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
/* ------------------------------------------------
   5. FUNCIÓN: validarFormulario
   Verifica que los campos obligatorios no estén
   vacíos y que el email tenga formato correcto.
   Muestra mensajes de error visibles para el usuario.
   Usa try/catch para controlar errores inesperados.
   ------------------------------------------------ */
function validarFormulario(evento) {
    evento.preventDefault(); // evita que el formulario se envíe y recargue la página

    // Limpiar mensajes de error anteriores
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-mensaje").textContent = "";
    document.getElementById("confirmacion-envio").textContent = "";

    try {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        let hayErrores = false;

        // Validar nombre vacío
        if (nombre === "") {
            document.getElementById("error-nombre").textContent = "El nombre es obligatorio.";
            hayErrores = true;
        }

        // Validar email vacío y formato básico
        if (email === "") {
            document.getElementById("error-email").textContent = "El email es obligatorio.";
            hayErrores = true;
        } else if (!email.includes("@") || !email.includes(".")) {
            document.getElementById("error-email").textContent = "Ingresá un email válido.";
            hayErrores = true;
        }

        // Validar mensaje vacío
        if (mensaje === "") {
            document.getElementById("error-mensaje").textContent = "El mensaje es obligatorio.";
            hayErrores = true;
        }

        // Si hay errores, se lanza una excepción manual
        if (hayErrores) {
            throw new Error("El formulario tiene campos inválidos.");
        }

        // Si todo está bien, se muestra la confirmación
        document.getElementById("confirmacion-envio").textContent =
            "✅ ¡Gracias " + nombre + "! Tu mensaje fue enviado correctamente.";

        // Limpiar el formulario
        document.getElementById("form-contacto").reset();

    } catch (error) {
        console.log("Error de validación: " + error.message);
    }
}

/* Evento: submit — se ejecuta al enviar el formulario */
document.getElementById("form-contacto").addEventListener("submit", validarFormulario);