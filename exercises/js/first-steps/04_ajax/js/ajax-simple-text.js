"use strict"; // use strict mode in this script

// ... add global variables

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    // ... add additional code here

    // we need a callback function, which will be loaded on ready state changes
    function ajaxCallback(){
        console.log(this); // take a look on the readyState property (!)

        if(this.readyState == 4     // fully loaded
            && this.status == 200   // successful request/response
        ){
            // directly write response to HTML element
            document.getElementById("demo").innerHTML = this.responseText;
        }
    }

    // load function to create first AJAX Request
    function loadData(){
        var ajaxObject = new XMLHttpRequest();
        var ajaxURL = "https://raw.githubusercontent.com/michaelulm/web-application-development/master/exercises/js/first-steps/04_ajax/data/simple.txt";

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxCallback;

        // set true to load asynchronous
        ajaxObject.open("GET", ajaxURL, true);
        ajaxObject.send();
    }

    document.getElementById("btnAjaxLoad").addEventListener("click", loadData);

});