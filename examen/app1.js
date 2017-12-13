/**
 * Created by GiannyEduardo on 11/12/16.
 */

//1

var main=function(){
    "use strict"
    window.alert("hola mundo");
};
   $(document).ready(main);

//2

var main=function() {
    "use strict";

    $(".entrada button").on("click",function(evento){
    var texto = $(".entrada input").val();

           console.log(texto);
        });

};

$(document).ready(main);


//3

var main=function(){
    "use strict";
    var puerto=["Veracruz","Acapulco","San Blas","Guaymas"];

    puerto.forEach(function(elemento){
       console.log(elemento);
    });
};
$(document).ready(main);

//4

var main=function(){
  "use strict";
    $("body").append("<p>¡Hola Mundo!</p>");
};
$(document).ready(main);


//5
var main=function(){
    "use strict";

    $(".entrada button").on("click",function(evento){
      var otro = $(".entrada input").val();
        $(".hola").append(otro+"\n");
    });
};
$(document).ready(main);

