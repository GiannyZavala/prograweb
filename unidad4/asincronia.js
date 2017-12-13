var main = function(){
    "use strict";



   var $contenido = $("<div>Hola Mundo!").hide();


   $("body").append($contenido);

    $contenido.slideDown(300);
};

$(document).ready(main);