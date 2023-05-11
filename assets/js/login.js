const btnEnviar = document.getElementByClassName('btn btn-primary');
const validación = (e) => {
  e.preventDefault();

  const direcciónEmail = document.getElementById('exampleInputEmail1');  
  if (direcciónEmail.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    direcciónEmail.focus();
    return false;
  }
  if (!emailVálido(direcciónEmail.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    direcciónEmail.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}
const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
btnEnviar.addEventListener('click', validación);