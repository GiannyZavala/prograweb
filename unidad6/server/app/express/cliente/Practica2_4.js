/**
 * Created by Mannlex21 on 11/10/16.
 */
var main=function () {
    "use strict";

    $.getJSON("tareas",function(tareas){
        var $new_comment_json;

       tareas.forEach(function (tarea) {
           console.log(tarea.tarea);
           $new_comment_json=$("<p>").text(tarea.tarea);
           $new_comment_json.hide();
           $(".comments").append($new_comment_json);
           $new_comment_json.fadeIn();
       });
    });



    var addCommentFromInputBox=function(){
        var $new_comment;


        if($(".comment-input input").val()!==""){
            var texto = $(".comment-input input").val();

            $new_comment=$("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");

            var tarea = {tarea:texto};
            $.post("tareas",tarea,function (respuesta) {
                console.log("Se ha publicado");
                console.log(respuesta);
            })
        }
    };
    $(".comment-input button").on("click",function (event) {
      addCommentFromInputBox();
    });
    $(".comment-input input").on("keypress",function (event) {
        if(event.keyCode===13){//tecla enter
            addCommentFromInputBox();
        }
    })
};
$(document).ready(main);
