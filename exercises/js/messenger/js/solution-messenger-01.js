"use strict"; // use strict mode in this script

var userid = 5;

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");


    // we need a callback function, which will be loaded on ready state changes
    function ajaxSend(){
        console.log(this); // take a look on the readyState property (!)

        if(this.readyState == 4     // fully loaded
            && this.status == 200   // successful request/response
        ){
            // delete message from input field after successful sending
            document.getElementById("message").value = "";
        }
    }

    // load function to create first AJAX Request
    function loadData(){
        var newMsg = document.getElementById("message").value;

        if(newMsg != ""){
            var ajaxObject = new XMLHttpRequest();
            var ajaxURL = "https://www.sandbox.co.at/msd/webappdev/addMessage.php";
            ajaxURL += "?userid=" + userid;
            ajaxURL += "&msg=" + encodeURI(newMsg);

            // trigger function on every change of readystate
            ajaxObject.onreadystatechange = ajaxSend;

            // set true to load asynchronous
            ajaxObject.open("GET", ajaxURL, true);
            ajaxObject.send();
        } else {
            alert("empty message");
        }

    }

    document.getElementById("btnSend").addEventListener("click", loadData);

    // implement following TODO Lists

    // STARTER
    // [x] get new user with createUser.php and store them in your code for later usage
    // [x] send new message with GET params 'userid' and 'msg'
    // [] receive new messages with button click, create a new button "receive new messgaes"
    //      use GET param 'format' with value 'json' to receive json string (easier parsing and handling)


    // EASY
    // [x] check if message is not empty before sending request to webserver
    // [] output latest message id to web ui


    // MEDIUM
    // [] receive new messages every 30 seconds
    //      (!) do not request too often, otherwise the web server will block all other too (!)


    // DIFFICULT
    // [] only receive newer messages, use GET param 'latestid'
    //      take care to only append new messages and keep older messages
    // [] do a refactoring after implementing all your tasks, try to remove duplicated code


    // OPTIONAL / EXTENDED
    // [] add some user experience to your solution, e.g. delete message from input field, ...
    // [] get new userid with GET format=api and store them programmatically
});
