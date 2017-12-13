var main = function(){
    "use sctrict";

   $(".comment-input button").on("click", function (event){
       var $texto =$(".comment-input input").val();


       if($texto!== ""){
            var $new_comment = $("<p>").text($texto);
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
       }


});

   $(".comment-input input").on("keypress",function(event){
       console.log(event.keyCode);
       if(event.keyCode==13){
           var $texto=$(".comment-input input").val();
           if($texto !== "") {
               var $new_comment = $("<p>").text($texto);
               $(".comments").append($new_comment);
               $(".comment-input input").val("");
           }
       }
   });
};
$(document).ready(main);
