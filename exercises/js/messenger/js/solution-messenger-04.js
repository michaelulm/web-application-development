"use strict"; // use strict mode in this script

var userid = 5;
var latestid = 0;

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");
    document.getElementById("output").value = "";

    // callback at sending message, do some action AFTER successful response
    function ajaxSend(){
        if(this.readyState == 4     // fully loaded
            && this.status == 200   // successful request/response
        ){
            // delete message from input field after successful sending
            document.getElementById("message").value = "";
            document.getElementById("btnSend").disabled = true;

            // trigger receiving messages after send message
            receiveMessages();
        }
    }

    // callback at receiving messages, do some action AFTER successful response
    function ajaxReceive(){
        if(this.readyState == 4     // fully loaded
            && this.status == 200   // successful request/response
        ){
            document.getElementById("currentstatus").innerHTML = "loaded new messages";
            // // quick solution without any formatting or filtering
            // document.getElementById("output").value = this.responseText;

            // more details at https://www.w3schools.com/js/js_json_parse.asp
            var jsonResponse = JSON.parse(this.responseText);
            var output = document.getElementById("output");
            var latestidHTML = document.getElementById("latestid");

            // debug output
            console.log(jsonResponse);

            // iterate over all messages
            for(var i in jsonResponse){
                console.log(jsonResponse[i]);
                // add current message
                output.value += " > " + jsonResponse[i].msg + "\n";
                // output latest message id
                latestidHTML.innerHTML = jsonResponse[i].id;
                latestid = jsonResponse[i].id;

                // scroll action
                output.scrollTop = output.scrollHeight;
            }


            setTimeout(function(){
                document.getElementById("currentstatus").innerHTML = "finished";
            }, 500)
            setTimeout(function(){
                document.getElementById("currentstatus").innerHTML = "";
            }, 1000)
        }
    }

    // trigger ajax request to send new message
    function sendMessage(){
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

    // trigger ajax request to send receive all message
    function receiveMessages() {
        document.getElementById("currentstatus").innerHTML = "loading new messages";
        var newMsg = document.getElementById("message").value;

        var ajaxObject = new XMLHttpRequest();
        var ajaxURL = "https://www.sandbox.co.at/msd/webappdev/readMessages.php";
        ajaxURL += "?userid=" + userid;
        ajaxURL += "&format=json";
        ajaxURL += "&latestid=" + latestid;
        console.log(ajaxURL);

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxReceive;

        // set true to load asynchronous
        ajaxObject.open("GET", ajaxURL, true);
        ajaxObject.send();
    }

    document.getElementById("btnSend").addEventListener("click", sendMessage);
    document.getElementById("btnReceive").addEventListener("click", receiveMessages);


    receiveMessages();
    setInterval(function(){
        receiveMessages();
    }, 10000);

    // deactivate receive message button
    document.getElementById("btnReceive").disabled = true;
    document.getElementById("btnSend").disabled = true;

    // only activate send button if there is a message
    document.getElementById("message").addEventListener("input", function(){
       if(document.getElementById("message").value == ""){
           document.getElementById("btnSend").disabled = true;
       } else{
           document.getElementById("btnSend").disabled = false;
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
    // [] do a refactoring after implementing all your tasks, try to remove duplicated code


    // OPTIONAL / EXTENDED
    // [x] add some user experience to your solution, e.g. delete message from input field, ...
    // [] get new userid with GET format=api and store them programmatically
    // [x] scroll to bottom of textarea field (output of all messages) automatically
});
