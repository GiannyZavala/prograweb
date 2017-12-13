/**
 * Created by Mannlex21 on 01/11/16.
 */
var main = function (){
    "use strict";
    var url ="http://api.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json&jsoncallback=?";
    $.getJSON(url,function (flickerResponse) {
        flickerResponse.items.forEach( function (photo) {
            console.log(photo.media.m);
            var $img=$("<img>");
            $img.attr("src",photo.media.m);
            $("main .photos").append($img);
        });
    });
}
$(document).ready(main);