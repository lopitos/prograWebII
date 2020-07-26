$(document).ready(function() {
    $("#subirBajar4").click(function() {
        $("#galeria").slideToggle(2000);
    });

    // mostrar y ocultar un parrafo
    $("#ocultar").click(function() {
        var valor = $('#ocultar').val();
        if (valor == "Ocultar") {
            $("#uno").hide(2000);
            $('#ocultar').val("Mostrar");
        }
        if (valor == "Mostrar") {
            $("#uno").show(2000);
            $('#ocultar').val("Ocultar");
        }
    })

    // RESALTAMOS LOS TÍTULOS CON EVENTOS del MOUSE
    $(".titulo").mouseover(function() {
        $(".titulo").css({ 'color': 'yellow' });
    });

    $(".titulo").mouseout(function() {
        $(".titulo").css({ 'color': 'black' });
    });

    // RESALTAMOS EL PÁRRAFO AL COLOCAR EL RATON ENCIMA Y ALRETIRAR VUELVE A SU ESTADO NATURAL
    $("#parrafo1").mouseover(function() {
        $("#parrafo1").addClass("rojo negrita");
    });

    $("#parrafo1").mouseout(function() {
        $("#parrafo1").removeClass("negrita");
    });

    /*
    
    $("#ultimo").click(function() {
            $('#lista').append($('#lista li:first'));
        })
        // agregar un nuevo elmento a la lista
    $("#agregar").click(function() {
        if ($("#nombre").val() == "") {
            alert("El campo nombre no puede estar vacio");
        } else {
            //alert($("#nombre").val());
            $("#lista").append("<li>" + $("#nombre").val() + "</li>");
            $("#nombre").val(null);
        }
    })

    // Eliminar un elemento de la lista
    $("#eliminar").click(function() {
        $("#lista li:last").remove();
    })
    */
})