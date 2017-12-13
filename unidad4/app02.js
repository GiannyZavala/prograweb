var main = function () {
    "use sctrict";

    $(".comment-input button").on("click",function (event) {
        $(".comments").append("<p>Este es un nuevo comentario</p>");
    });

};
$(document).ready(main);

