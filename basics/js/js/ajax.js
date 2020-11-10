"use strict"; // use strict mode in this script
console.log("script is loading");

// more details at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log("run script after fully loaded");
    // we need a callback function, which will be loaded on "ready state"-changes
    function ajaxCallback(e){
        console.log(this);  // XMLHttpRequest -> inspect Browser - > Developer Tools for more information after click
        console.log(e);     // Event
        if(this.readyState == 4     // operation is complete
            && this.status == 200   // successful request/response
        ){
            console.log("Response successful");
            // directly write response to HTML element
            document.getElementById("demo").innerHTML = this.responseText;
        }
    }

    // load function to create first AJAX Request
    function loadData(){
        console.log(this); // what is "this"? -> take a look at the console
        console.log("load Data after click button");
        // init XMLHttpRequest and define resource for asynchronous loading
        var ajaxObject = new XMLHttpRequest();
        var ajaxURL = "data/simple.txt";

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxCallback;

        // set true to load asynchronous, otherwise send will block and will return after receiving response
        ajaxObject.open("GET", ajaxURL, true);
        ajaxObject.send();
        console.log("Request sent");
    }

    document.getElementById("btnAjaxLoad").addEventListener("click", loadData);

});