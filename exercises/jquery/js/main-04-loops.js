
jQuery(document).ready(function($){
    $("#demo").css("color", "green");
    $("#demo").html("jQuery successfully loaded!");


    // foreach loop with jQuery
    // https://api.jquery.com/each/
    $("ul#fruits li").each(function(i, element){
        // counter value of each loop
        console.log(i);
        // each element
        console.log(element);

        if(i % 2 == 0){
            $( element ).css("background-color", "lightgrey");
        }
        $( element )
            .css("padding", "10px")
            .css("list-style-type", "none")
            .css("max-width", "200px");
    });

    // for other loops use standard JS


});
