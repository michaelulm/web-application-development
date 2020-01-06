
jQuery(document).ready(function($){
    $("#demo").css("color", "green");
    $("#demo").html("jQuery successfully loaded!");


    // Method Chaining
    $(".demo")
        .css("border", "1px black solid")
        .css("width", "50%")
    ;


    $(".demo").mouseenter(function(){
        $(this).css("color", "red");

        // https://api.jquery.com/fadein/
        $(this).find(".hidden")
            .fadeIn()
            .fadeIn("slow")
            .fadeIn(3000)
            .css("display", "grid");
    });

    $(".demo").mouseleave(function(){
        $(this).css("color", "black");

        $(this).find(".hidden")
            .fadeOut()
            .fadeOut("fast")
            .fadeOut(1000)
            .css("display", "hidden");
    });

    // trigger event with jQuery
    $(".demo").mouseleave();

});
