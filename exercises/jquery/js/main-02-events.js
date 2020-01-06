
jQuery(document).ready(function($){
    $("#demo").css("color", "green");
    $("#demo").html("jQuery successfully loaded!");
    
    // handle Events with jQuery
    // https://api.jquery.com/mouseenter/
    $(".demo").mouseenter(function(){
        $(this).css("color", "red");
    });
    $(".demo").mouseleave(function(){
        $(this).css("color", "black");
    });
});
