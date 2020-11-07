"use strict"; // use strict mode in this script

// more details at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    // we need a callback function, which will be loaded on ready state changes
    function ajaxCallback(){

        if(this.readyState == 4     // operation is complete
            && this.status == 200   // successful request/response
        ){
            // replace line breaks with <br> tags
            var data = this.responseText;
            document.getElementById("demo").innerHTML = data;
        }


        if(this.readyState == 4     // operation is complete
            && this.status == 404   // successful request/response
        ){
            document.getElementById("demo").innerHTML = "Server is not available";
        }
    }

    // load function to create first AJAX Request
    function loadData(){
        var ajaxObject = new XMLHttpRequest();
        // TODO replace URL by your needs
        var ajaxURL = "../../../server-side/php/ajax-datetime.php";

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxCallback;

        // set true to load asynchronous
        ajaxObject.open("GET", ajaxURL, true);
        ajaxObject.send();
    }

    setInterval(function(){ loadData(); }, 1000);

});