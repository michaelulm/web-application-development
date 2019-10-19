"use strict"; // use strict mode in this script

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    // "sleep" and do some action after x milliseconds
    setTimeout(function(){
        alert("2sec after page ready")
    }, 2000);


    var milliseconds = 0;

    // each millisecond this intervall will be called
    var timer = setInterval(function(){
        milliseconds++;

        // implement your code e.g. here

        document.getElementById("milliseconds").innerHTML = milliseconds;
    }, 1);

    var timeout = 1000;
    var timeleft = 55;

    var runningtime =  setInterval(function(){
        timeleft--;
        document.getElementById("results-timer").innerHTML = timeleft;

        // Demo to hide a HTML Element
        document.getElementById("btnStartTime").hidden = "hidden";
    }, timeout);


    setTimeout(function() {
        // Demo to hide a HTML Element
        document.getElementById("btnStartTime").hidden = "";

        // delete runningtime interval demo, e.g. if timer has finished,
        // in this example, delete interval after x seconds of set timeout
        clearInterval(runningtime);
    }, 10000);

    // implement following TODO Lists

    // STARTER
    // [] stop watch: create a stop watch and count milliseconds, seconds, minutes and hours
    //      only use numbers, and do not use date() functions
    // [] stop watch: implement each button, to start, stop and reset the stop watch
    //      start -> starting stop watch
    //      stop  -> stop current running stop watch, if you click start now stop watch starts running again at current time
    //      reset -> reset stop watch to 00:00:00.000
    // [] timer: create a fully running timer, where you input any numbers of seconds, each second will reduce number of seconds until 0 seconds done


    // EASY
    // [] timer: show start button again when time is over


    // MEDIUM
    // [] both: only show buttons which currently needed, e.g. stop button is not needed if stop watch is currently not running
    // [] stop watch: add an additional button "lap time" with program logic
    //      first click  -> adds current time to a history ordered list (1. ..., 2. ..., 3. ...)
    //      second click -> adds time since last click to history
    //      ...
    // [] timer: use different time inputs, e.g. 5sec or 5min which will be interpreted correctly for creating 5sec or 300sec timer


    // OPTIONAL / EXTENDED
    // [] stop watch: create additional input field for "new players" where you able to add e.g. yourself, and other 4 persons
    //      each person will also an additional button with persons name
    //      now after you have clicked start, you are able to click a persons name
    //      the clicked button will disappear and in a history will be added e.g.
    //          "Mario 00:02:12.436"
    //          "Heidi 00:02:23.351"
    //          ...
    //      after the last button click (person click) the stop watch will be stopped
});
