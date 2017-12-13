var main= function () {
    "use strict";

    $.getJSON("escuela/alumnos.json", function(alumno){
        var $parrafoAlumno=$("<p>");
        $parrafoAlumno.text(alumno.nombre + " " + alumno.semestre)
        $("main").append($parrafoAlumno);
        console.log(alumno);
    });

    console.log("Hello world!");
};

$(document).ready(main);
