"use strict"; // use strict mode in this script

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    // first steps described with AJAX process steps 1-3

    // AJAX process step 3
    function callback(){
        console.log("=== AJAX callback ===");
        // check response

        // handle response

        // do something, e.g. clear input field
    }

    // AJAX process step 2
    function loadData(){
        console.log("=== AJAX request data ===");

        // load value from textarea -> userInput

        // XHR Object init

        // set URL with parameter 'userid' and 'msg'

        // set callback function to XHR -> callback()

        // send XHR

    }

    // AJAX process step 1
    // add eventlister for button click -> loadData



    // implement following TODO Lists

    // STARTER
    // [] get new user with createUser.php and store them in your code for later usage
    // [] send new message with GET params 'userid' and 'msg'
    // [] receive new messages with button click, create a new button "receive new messgaes"
    //      use GET param 'format' with value 'json' to receive json string (easier parsing and handling)


    // EASY
    // [] check if message is not empty before sending request to webserver
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
    // [] scroll to bottom of textarea field (output of all messages) automatically
    // [] try to add some formatting of messages, e.g. prefix to clearly show "start" and "end" of messages
    //      add some message, also add multi-line-messages, see example below
    /*
           without prefix:
           -------------------------------------------------
            Mobile Software Development
            Hello MSD
            two line
            Text haha
            simple Messenger Demo


            with prefix:
           -------------------------------------------------
             > Mobile Software Development
             > Hello MSD
             > two line
            Text haha
             > simple Messenger Demo
     */

    // [] try to create a simple chat for two users
    //      add an input field where you add another userid
    //      receive every 15 seconds new messages from other user(s)
    //      if receiving other user messages works fine, extend your add user function to store more than one user
});
