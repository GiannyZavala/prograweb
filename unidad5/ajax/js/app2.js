var main= function () {
    "use strict";

    $.getJSON("escuela/alumnos.json", function(alumno){
        $.each(alumno.alumnos,function() {
            $("ul").append("<li>Nombre:"+this['nombre']+"</li><li>Semestre:"+this['semestre']+"</li><br />");
        });
    });

    console.log("Hello world!");
};

$(document).ready(main);