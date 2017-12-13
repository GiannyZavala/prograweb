var main= function () {
    "use strict";


    var url = "http://api.flickr.com/services/" + "feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";

    $.getJSON(url, function (flickerResponse) {

        flickerResponse.items.forEach(function (photo) {

             //Mandar a la consola
            console.log(photo.media.m);
        });
    });

}

$(document).ready(main);
