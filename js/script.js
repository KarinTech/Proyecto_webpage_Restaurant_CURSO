// Recuerda que le archivo js debe e ir en una carpeta aparte al igual que todos los archivos js

// Recibimos lo que el usuario esta colocando dentro de los campos mediante el ElementById
const enviar = document.getElementById('boton')
const usuario = document.getElementById('nombre')
const password = document.getElementById('password')

// Iniciamos una funcion que efectuara ciertas operaciones al cargar la apgina
inicio_v()
function inicio_v() {
    // Iniciamos un evento el cual nos permite ejecutar o preparar el fomrularioo cuando la pagina se carga
    document.addEventListener('DOMContentLoaded',inicio)
}
// Esta funcion es la que controlara el inicio de dicho formulario
function inicio() {
    enviar.disabled = true;
    console.log('Cargando')

    usuario.addEventListener('blur',validacion)
    password.addEventListener('blur',validacion)


}
// Validamos los datos que se envian y damos al usuario una respuesta
// Dependiendo si los datos estan bien se efectuara la sentencia
function validacion(e) {
    if (e.target.value.length > 0) {
        console.log('informacion valida')
    } else {
       window.alert('Ingresa correctamente tus datos')
    }
}
