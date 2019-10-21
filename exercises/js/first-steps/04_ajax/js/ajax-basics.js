"use strict"; // use strict mode in this script

// more details at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// loads after window / page is fully loaded
window.addEventListener("load", function(){

    // we need a callback function, which will be loaded on ready state changes
    function ajaxCallback(){
        console.log(this);
        if(this.readyState == 4     // operation is complete
            && this.status == 200   // successful request/response
        ){
            // directly write response to HTML element
            document.getElementById("demo").innerHTML = this.responseText;
        }
    }

    // load function to create first AJAX Request
    function loadData(){
        // init XMLHttpRequest and define resource for asynchronous loading
        var ajaxObject = new XMLHttpRequest();
        var ajaxURL = "data/simple.txt";

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxCallback;

        // set true to load asynchronous, otherwise send will block and will return after receiving response
        ajaxObject.open("GET", ajaxURL, true);
        ajaxObject.send();
    }

    document.getElementById("btnAjaxLoad").addEventListener("click", loadData);

});