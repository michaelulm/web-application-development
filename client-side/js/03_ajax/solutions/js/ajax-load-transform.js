"use strict"; // use strict mode in this script

// more details at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

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
            // replace line breaks with <br> tags
            var data = this.responseText;

            // split txt file and get each line
            var lines = data.split("\n");

            // https://developer.mozilla.org/de/docs/Web/API/Document/createElement
            var ul = document.createElement("ul");
            ul.id = "simple-list";

            for(var key in lines){
                // create list item and add this child to list
                var li = document.createElement("li");
                var content = document.createTextNode(lines[key]);
                li.appendChild(content);
                ul.appendChild(li);
            }

            // error handling, if element not exists
            try {
                document.getElementById("simple-list").remove();
            } catch(e){
                // currently nothing to do
            }

            document.getElementById("demo").appendChild(ul);

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