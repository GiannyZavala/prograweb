var main= function (){
    "use strict";

      var url ="https://api.instagram.com/v1/tags/coffee/media/recent?access_token=ACCESS-TOKEN&callback=callbackFunction";
     $.getJSON(url, function(instagram){
         instagram.items.foreach(function(photo){
             var $img= $("<img>");

             $img.attr("src",photo.media.m);
             $("main .photos").append($img);
         });
     })

}

   console.log("Hello world");

$(document).ready(main);