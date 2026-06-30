# Guía FC 26 🎮⚽

Una guía interactiva sobre EA Sports FC 26, desarrollada como proyecto cuatrimestral para la materia Programación III - 2° Año UTN.

## Descripción del proyecto

Sitio web interactivo que funciona como guía para jugadores de FC 26. Incluye información sobre los modos de juego, consejos para mejorar, jugadores destacados con buscador en tiempo real, y un formulario de contacto validado con JavaScript.

## Capturas

![Captura del sitio](img/captura1.png)
![Captura del sitio](img/captura2.png)

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Google Fonts (Rajdhani, Exo 2)
- Git y GitHub

## Funcionalidades implementadas

### Diseño (CSS)
- Diseño responsive adaptado a tablet (768px) y celular (480px)
- Paleta de colores inspirada en FC 26 con fondo oscuro y acentos en verde neón y celeste
- Layout con Flexbox en header, navegación, hero y formulario
- Layout con CSS Grid en sección de modos de juego y jugadores destacados
- Modales con CSS :target para mostrar información de cada modo de juego y consejo
- Animaciones con @keyframes y transiciones suaves en botones, cards y cartas

### Interactividad (JavaScript)
- **Buscador de jugadores en tiempo real**: filtra las cartas de jugadores por nombre o club mientras el usuario escribe (evento `input`)
- **Consejo aleatorio**: muestra un consejo random tomado de un array al presionar un botón (evento `click`)
- **Validación de formulario**: verifica que los campos no estén vacíos y que el email tenga formato válido, mostrando mensajes de error en pantalla (evento `submit`)
- Manejo de errores con `try/catch` en la validación del formulario
- Manipulación del DOM: mostrar/ocultar cartas, modificar textos, crear mensajes de error dinámicamente
- Uso de arrays (`jugadores`, `consejos`) para almacenar y mostrar información

## Enlace al repositorio

https://github.com/valentinoserafini9/mi-primer-tp