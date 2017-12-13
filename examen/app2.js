/**
 * Created by GiannyEduardo on 12/12/16.
 */


var main = function(){
    "use strict";

    window.alert("hola mundo");
};

$(document).ready(main);


var main= function(){
    "use strict";

    $(".entrada button").on("click",function(evento){
        var texto=$(".entrada input").val();
           console.log(texto);
    });
};

$(document).ready(main);

var main=function(){
    "use strict";

    var puertos=["Veracruz","Acapulco","San Blas","Guaymas"];
      puertos.forEach(function(elemento){
         console.log(elemento);
      });
};
$(document).ready(main);


var main=function(){
    "use strict";

    $("body").append("<p>¡Hola Mundo!<p/>");
};

$(document).ready(main);


var main=function(){
    "use strict";

    $(".gianny button").on("click",function(evento){
       var otro= $(".gianny input").val();
        $("body").append(otro+"\n");
    });
};
$(document).ready(main);