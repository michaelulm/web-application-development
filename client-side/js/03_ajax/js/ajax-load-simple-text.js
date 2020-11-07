"use strict"; // use strict mode in this script

// more details at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// additional information https://www.w3schools.com/js/js_ajax_http_response.asp

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    // ... add additional code here

    // we need a callback function, which will be loaded on ready state changes
    function ajaxCallback(){
        console.log("callback");
        // console.log(this); // take a look on the readyState property (!)

        if(this.readyState == 4     // operation is complete
            && this.status == 200   // successful request/response
        ){
            // directly write response to HTML element
            document.getElementById("demo").innerHTML = this.responseText;

            // replace line breaks with <br> tags
            var output = this.responseText;

            // // replace until no string founded
            // do {
            //     output = output.replace("\n", "<br/>");
            // }while(output.includes("\n"));

            // replace with regex
            output = output.replace(/\n/g, "<br/>");

            document.getElementById("demo").innerHTML = output;

        }


        if(this.readyState == 4     // operation is complete
            && this.status == 404   // successful request/response
        ){
            document.getElementById("demo").innerHTML = "File Not Found";

        }
    }

    // load function to create first AJAX Request
    function loadData(){
        var ajaxObject = new XMLHttpRequest();
        var ajaxURL = "data/simple.txt";

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxCallback;

        // set true to load asynchronous
        ajaxObject.open("GET", ajaxURL, true);
        ajaxObject.send();
        console.log("request sent")
    }

    document.getElementById("btnAjaxLoad").addEventListener("click", loadData);

});