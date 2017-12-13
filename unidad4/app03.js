var main = function(){
    "use sctrict";

    $(".comment-input  button").on("click",function(event) {
        var $new_comment = $("<p>");

        $new_comment.text("This is a new comment");


        $(".comments").append($new_comment);
    });
};
$(document).ready(main);