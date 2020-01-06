"use strict"; // use strict mode in this script

// ... add global variables

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    // ... add additional code here

    // we need a callback function, which will be loaded on ready state changes
    function ajaxCallback(){

        if(this.readyState == 4     // fully loaded
            && this.status == 200   // successful request/response
        ){
            var newsitems = this.response;
            console.log(newsitems);
        }
    }

    // load function to create first AJAX Request
    function loadData(){
        var ajaxObject = new XMLHttpRequest();
        var ajaxURL = "https://rss.orf.at/news.xml";

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxCallback;

        // set true to load asynchronous
        ajaxObject.open("GET", ajaxURL, true);
        ajaxObject.send();
    }

    document.getElementById("btnAjaxLoad").addEventListener("click", loadData);

});