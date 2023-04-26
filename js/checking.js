//Para acceder al valor de los campos vamos a utilizar la función .getElementById
let p1 = document.getElementById("password").value;
let p2 = document.getElementById("password2").value;

let espacios = false;
let cont = 0;

while (!espacios && (cont < p1.length)) {
  if (p1.charAt(cont) == " ")
    espacios = true;
  cont++;
}
   
if (espacios) {
  alert ("La contraseña no puede contener espacios en blanco");
  return false;
}

if (p1.length == 0 || p2.length == 0) {
  alert("Los campos de la password no pueden quedar vacios");
  return false;
}

if (p1 != p2) {
  alert("Las passwords deben de coincidir");
  return false;
} else {
  alert("Todo esta correcto");
  return true; 
}

if (p1 != p2) {
  alert("Las passwords deben de coincidir");
  return false;
} else {
  alert("Contraseña generada");
  return true; 
}