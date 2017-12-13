/**
 * Created by Mannlex21 on 10/10/16.
 */
var main=function () {
    "use strict";
    $(".comment-input button").on("click",function (event) {
        $(".comments").append("<p>Este es un nuevo comentario</p>");
    });
};
$(document).ready(main);
