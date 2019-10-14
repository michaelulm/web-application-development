"use strict"; // use strict mode in this script

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    var i = 0;
    // array with standard color names and color hex codes, feel free to add other colors
    var colors = ["red", "orange", "blue", "yellow", "green", "#E54D26", "#FDDA3E"];

    function changeBackgroundColorOfElement(colorName){
        let demo = document.getElementById("demo");
        demo.innerHTML = "Changed Text to color " + colorName;
        demo.style = "background:" + colorName +";";
        console.log(i + " change to " + colorName);
    }

    // every 2 seconds change color to next color
    setInterval(function(){

        changeBackgroundColorOfElement(colors[i++]);

        if(colors.length <= i) {
            i = 0;
        }

    }, 2000);

});
