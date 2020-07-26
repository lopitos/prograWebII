$(document).ready(function() {
    // mover el primer elemento al ultimo
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

})