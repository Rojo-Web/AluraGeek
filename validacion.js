function validateForm() {
    var nombre = document.forms["form"]["nombre"].value;
    var nombreError = document.getElementById("nombreError");
    var email = document.forms["form"]["email"].value;
    var emailError = document.getElementById("emailError");
    var asunto = document.forms["form"]["asunto"].value;
    var asuntoError = document.getElementById("asuntoError");
    var mensaje = document.forms["form"]["mensaje"].value;
    var mensajeError = document.getElementById("mensajeError");

    if (nombre.length == 0) {
        nombreError.textContent = "El campo Nombre no debe estar en blanco.\n";
        return false;
    } else if (nombre.length > 50) {
        nombreError.textContent = "El campo Nombre no debe contener más de 50 caracteres.\n";
        return false;
    } else {
        nombreError.textContent = "";
    }

    if (email.length == 0) {
        emailError.textContent = "Campo e-mail no debe estar en blanco o vacío.\n";
        return false;
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.textContent = "El formato de e-mail no es válido. Debe contener el caracter especial @ seguido de un dominio o proveedor seguido de un punto (.).\n";
        return false;
    } else {
        emailError.textContent = "";
    }

    if (asunto.length == 0) {
        asuntoError.textContent = "Campo Asunto no debe estar en blanco o vacío.\n";
        return false;
    } else if (asunto.length > 50) {
        asuntoError.textContent = "Campo Asunto no debe contener más de 50 caracteres.\n";
        return false;
    } else {
        asuntoError.textContent = "";
    }

    if (mensaje.length == 0) {
        mensajeError.textContent = "Campo Mensaje no debe estar en blanco o vacío.\n";
        return false;
    } else if (mensaje.length > 300) {
        mensajeError.textContent = "Campo Mensaje no debe contener más de 300 caracteres.\n";
        return false;
    } else {
        mensajeError.textContent = "";
    }

    return true;
}

document.forms["form"].addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});