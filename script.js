// Contraseña predefinida
const CONTRASENA = "0101";

// Variable para almacenar la contraseña ingresada
let contrasenaIngresada = "";

// Función para agregar números al display
function agregarNumero(numero) {
    const textoCodigo = document.getElementById('texto-codigo');
    const display = document.querySelector('.display');

    if (textoCodigo.textContent === 'Contraseña') {
        textoCodigo.textContent = '';
    }

    textoCodigo.textContent += '*';
    contrasenaIngresada += numero;
    display.classList.add('modo-password');

    if (contrasenaIngresada.length === CONTRASENA.length) {
        if (contrasenaIngresada === CONTRASENA) {
            alertIngreso();
            mostrarGaleria();
        } else {
            contraseñaInconrrecta();
            textoCodigo.textContent = 'Contraseña';
            display.classList.remove('modo-password');
            contrasenaIngresada = "";
        }
    }
}
function alertIngreso(){
    Swal.fire({
        title: "ACCESO CONCEDIDO! 🔓",
        text: "Felicidades! has ingresado correctamente. 🥳 \n Disfruta de nuestros recuerdos mi amor. 💖",
        icon: "success",
        confirmButtonText: "Okissss",    
      });
}
function alertPrueba(){
    Swal.fire({
        title: "PISTA! 🔎",
        text: "La contraseña puede ser una fecha especial. 🤔 \n Concentrate, tu puedes! 🥳",
        icon: "question",
        confirmButtonText: "Vaaaaaaa",    
      });
}
function contraseñaInconrrecta(){
    Swal.fire({
        title: "ERROR!",
        text: "La contraseña ingresada es incorrecta. 😢 \n Inténtalo de nuevo. 🤔",
        icon: "warning",
        confirmButtonText: "Okis",    
      });
}
// Función para ocultar todas las secciones
function ocultarTodasLasSecciones() {
    const secciones = [
        document.querySelector('.container'),
        document.getElementById('seccion-contador'),
        document.getElementById('seccion-galeria'),
        document.getElementById('seccion-carta')
    ];
    
    secciones.forEach(seccion => {
        if (seccion) {
            seccion.style.display = 'none';
        }
    });
}

// Función para mostrar la galería de fotos
function mostrarCaja() {
    ocultarTodasLasSecciones();
    const seccionCaja = document.getElementById('caja-fuerte');
    seccionCaja.style.display = 'block';
}
// Función para mostrar la galería de fotos
function mostrarGaleria() {
    ocultarTodasLasSecciones();
    const seccionGaleria = document.getElementById('seccion-galeria');
    seccionGaleria.style.display = 'block';
}

// Función para mostrar la carta
function mostrarCarta() {
    ocultarTodasLasSecciones();
    const seccionCarta = document.getElementById('seccion-carta');
    seccionCarta.style.display = 'block';
}
