"use strict"; // use strict mode in this script

var userid = 5;
var latestid = 0;

var messageInput    = document.getElementById("message");
var messagesOutput  = document.getElementById("output");
var btnSend         = document.getElementById("btnSend");
var btnReceive      = document.getElementById("btnReceive")
var currentStatus   = document.getElementById("currentstatus");
var latestidOutput  = document.getElementById("latestid");

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");
    messagesOutput.value = "";

    // callback at sending message, do some action AFTER successful response
    function ajaxSend(){
        if(this.readyState == 4     // fully loaded
            && this.status == 200   // successful request/response
        ){
            // delete message from input field after successful sending
            messageInput.value = "";
            btnSend.disabled = true;

            // trigger receiving messages after send message
            receiveMessages();
        }
    }

    // callback at receiving messages, do some action AFTER successful response
    function ajaxReceive(){
        if(this.readyState == 4     // fully loaded
            && this.status == 200   // successful request/response
        ){
            currentStatus.innerHTML = "loaded new messages";
            // more details at https://www.w3schools.com/js/js_json_parse.asp
            var jsonResponse = JSON.parse(this.responseText);

            // debug output
            console.log(jsonResponse);

            // iterate over all messages
            for(var i in jsonResponse){
                console.log(jsonResponse[i]);
                // add current message
                messageOutput.value += " > " + jsonResponse[i].msg + "\n";
                // output latest message id
                latestidOutput.innerHTML = jsonResponse[i].id;
                latestid = jsonResponse[i].id;

                // scroll action
                messageOutput.scrollTop = messageOutput.scrollHeight;
            }

            setTimeout(function(){
                currentStatus.innerHTML = "finished";
            }, 500)
            setTimeout(function(){
                currentStatus.innerHTML = "";
            }, 1000)
        }
    }

    // trigger ajax request to send new message
    function sendMessage(){
        var ajaxURL = "https://www.sandbox.co.at/msd/webappdev/addMessage.php";
        ajaxURL += "?userid=" + userid;
        ajaxURL += "&msg=" + encodeURI(messageInput.value);

        doAJAXRequest(ajaxURL, "GET", ajaxSend);
    }

    // trigger ajax request to send receive all message
    function receiveMessages() {
        currentStatus.innerHTML = "loading new messages";

        var ajaxURL = "https://www.sandbox.co.at/msd/webappdev/readMessages.php";
        ajaxURL += "?userid=" + userid;
        ajaxURL += "&format=json";
        ajaxURL += "&latestid=" + latestid; // only receive newest messages, which were added after this message id

        doAJAXRequest(ajaxURL, "GET", ajaxReceive);
    }

    function doAJAXRequest(url, httpMethod, callbackMethod){
        console.log("doAJAXReuqest with " + ajaxURL);
        // init new AJAX Object
        var ajaxObject = new XMLHttpRequest();
        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = callbackMethod;
        // set true to load asynchronous
        ajaxObject.open(httpMethod, url, true);
        ajaxObject.send();
    }

    btnSend.addEventListener("click", sendMessage);
    btnReceive.addEventListener("click", receiveMessages);

    // receive every x seconds currently new messages
    receiveMessages();
    setInterval(function(){
        receiveMessages();
    }, 10000);

    // deactivate receive message button
    btnReceive.disabled = true;
    btnSend.disabled = true;

    // only activate send button if there is a message
    messageInput.addEventListener("input", function(){
       if(messageInput.value == ""){
           btnSend.disabled = true;
       } else{
           btnSend.disabled = false;
       }
    });


    // implement following TODO Lists

    // STARTER
    // [x] get new user with createUser.php and store them in your code for later usage
    // [x] send new message with GET params 'userid' and 'msg'
    // [x] receive new messages with button click, create a new button "receive new messgaes"
    //      use GET param 'format' with value 'json' to receive json string (easier parsing and handling)


    // EASY
    // [x] check if message is not empty before sending request to webserver
    // [x] output latest message id to web ui


    // MEDIUM
    // [x] receive new messages every 30 seconds -> currently configured with 10 seconds
    //      (!) do not request too often, otherwise the web server will block all other too (!)


    // DIFFICULT
    // [x] only receive newer messages, use GET param 'latestid'
    //      take care to only append new messages and keep older messages
    // [x] do a refactoring after implementing all your tasks, try to remove duplicated code


    // OPTIONAL / EXTENDED
    // [x] add some user experience to your solution, e.g. delete message from input field, ...
    // [] get new userid with GET format=api and store them programmatically
    // [x] scroll to bottom of textarea field (output of all messages) automatically
});
