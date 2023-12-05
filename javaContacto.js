function validar() {
    // Obtener valores de los campos
    var correoElectronico = document.getElementsByName('usario')[0].value;
    var fechaNacimiento = document.getElementsByName('usario')[1].value;
    var telefono = document.getElementsByName('usario')[2].value;

    // Expresiones regulares
    var expresionCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var expresionTelefono = /^\d{10}$/;

    // Validar campos y mostrar mensajes de error
    var mensajeError = '';

    if (!expresionCorreo.test(correoElectronico)) {
        mensajeError += 'Ingrese un correo electrónico válido.\n';
    }

    if (fechaNacimiento === '') {
        mensajeError += 'Seleccione una fecha de nacimiento.\n';
    }

    if (!expresionTelefono.test(telefono)) {
        mensajeError += 'Ingrese un número de teléfono válido (10 dígitos y solo números).\n';
    }

    // Mostrar mensajes de error o enviar formulario
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    } else {
        alert('Formulario enviado correctamente.'); 
        return true;
    }
}