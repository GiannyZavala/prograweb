var main = function(){
    "use sctrict";


  var $contenido = $("<div> Hola mundo</div>").hide();
  var $mascontenido= $("<div>Adios mundo</div>").hide();




    $("body").append($contenido);

    $contenido.slideDown(2000,function(){

    $("body").append($mascontenido);

    $mascontenido.fadeIn();
});

};


$(document).ready(main);