var main= function () {
    "use strict";

    $.getJSON("escuela/alumnos.json", function(alumno){

            $(ul).val(alumno.nombre);
            $(ul).val(alumno.semestre);
        });


    console.log("Hello world!");
};

$(document).ready(main);