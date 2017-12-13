var main= function () {
    "use strict";


    $.getJSON('http://www.vimeo.com/api/v2/video/31894179.json?callback=?', {format: "json"}, function (data) {
        $("h1").html(data[0].title);
        $("p").html(data[0].description);
    });

}
    $(document).ready(main);