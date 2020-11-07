"use strict"; // use strict mode in this script

// more details at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    // we need a callback function, which will be loaded on ready state changes
    function ajaxCallback(){
        console.log("callback");
        // console.log(this); // take a look on the readyState property (!)

        // TODO add other readyStates with meaningful outputs

        if(this.readyState == 4     // operation is complete
            && this.status == 200   // successful request/response
        ){
            // replace line breaks with <br> tags
            var data = this.responseText;

            var lines = data.split("\n");
            // console.log(lines);

            // TODO add information to HTML Structure
            for(var key in lines){
                console.log(lines[key]);
            }

            // https://developer.mozilla.org/de/docs/Web/API/Document/createElement
            var ul = document.createElement("ul");
            var li = document.createElement("li");
            var content = document.createTextNode("demo");

            li.appendChild(content);
            ul.appendChild(li);

            // TODO clean old data
            // TODO remove "inspect with browser ..." text

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