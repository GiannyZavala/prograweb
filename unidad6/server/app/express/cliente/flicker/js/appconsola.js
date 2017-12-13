/**
 * Created by Mannlex21 on 01/11/16.
 */
var main = function (){
    "use strict";
    var url ="http://api.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json&jsoncallback=?";
    $.getJSON(url,function (flickerResponse) {
        $.forEach()
        console.log(flickerResponse);
    });
}
$(document).ready(main);