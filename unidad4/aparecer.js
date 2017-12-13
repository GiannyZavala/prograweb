var main = function() {
    "use strict";


    $(function(){
        $("#aparecer").click(function(){
            $("#Nombre").css("display","");
        });
        $("#desaparecer").click(function(){
            $("#Nombre").css("display","none");
        });
    });
};
$(document).ready(main);

