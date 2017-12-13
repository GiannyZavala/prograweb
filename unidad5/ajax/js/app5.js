$(document).ready(function () {
    $("#boton1").click(function () {
        var cad = "Los libros en el archivo JSON son:<br />";
        var cadena = $.getJSON("hola.json", function (data) {
            for (l in data.libros.lib) {
                cad += ("<br />" + data.libros.lib[l].libro + " de " +
                data.libros.lib[l].autores[0] + ", " +
                data.libros.lib[l].autores[1] + " y " +
                data.libros.lib[l].autores[2] + "<br />Editorial: " +
                data.libros.lib[l].editorial +
                "<br />").replace("y undefined", "").replace(", undefined", "");
            }
            $("#texto").html(cad);
        })
    })
});