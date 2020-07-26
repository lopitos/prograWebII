function desapareceForm() {
    $("#registrar").fadeOut();
    $("#oscurecer").fadeOut();
}

function mostrarForm() {
    $("#registrar").fadeIn(1000);

    // Al hacer click fuera del formulario la ventana de login desaparece
    $("#oscurecer").click(desapareceForm);
    $("#cerrar").click(desapareceForm);
}

function mostrarLogin() {
    $("#inicio").click(function() {
        event.preventDefault();
        $("#oscurecer").fadeIn(600, mostrarForm);

    });
}
$(document).ready(mostrarLogin);