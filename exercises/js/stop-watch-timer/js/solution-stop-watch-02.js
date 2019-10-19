"use strict"; // use strict mode in this script

console.log(" === init values ===");
// will be timer interval, to set with start Button and clear with stop Button
var timer;

// counter values
var minutes = 0;
var milliseconds = 0;
var seconds = 0;
var hours = 0;

console.log(" === init functions ===");
// initial values -> created after first refactoring, because of duplicated code
function setInitialValues(){
    // set default start values
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "000";

    // reset values to starting values
    minutes = 0;
    milliseconds = 0;
    seconds = 0;
    hours = 0;
}

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    // set default values at starting stop-watch
    setInitialValues();

    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    var btnReset = document.getElementById("btnReset");

    // start timer = create interval
    btnStart.addEventListener("click", function(){
        btnStart.disabled = true;
        btnStop.disabled = false;
        btnReset.disabled = false;

        // each millisecond this intervall will be called
        timer = setInterval(function(){
            milliseconds+=10;

            // set milliseconds to 0
            if(milliseconds>=1000){
                milliseconds=0;
                seconds++;
            }

            if(seconds>=60){
                seconds = 0;
                minutes++;
            }

            if(minutes>=60){
                minutes = 0;
                hours++;
            }

            // padStart Method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
            document.getElementById("hours").innerHTML = (""+hours).padStart(2, '0');;
            document.getElementById("minutes").innerHTML = (""+minutes).padStart(2, '0');
            document.getElementById("seconds").innerHTML = (""+seconds).padStart(2, '0');
            document.getElementById("milliseconds").innerHTML = (""+milliseconds).padStart(3, '0');

            // change to 10 milliseconds, because of better performance, otherwise it would be too slow
        }, 10);
    });

    // stop timer = clear interval
    btnStop.addEventListener("click", function(){
        btnStart.disabled = false;
        btnStop.disabled = true;
        clearInterval(timer);
    });

    // reset timer
    btnReset.addEventListener("click", function(){
        // ! kept anonymous function at refactoring
        setInitialValues();
    });



    // implement following TODO Lists

    // STARTER
    // [x] stop watch: create a stop watch and count milliseconds, seconds, minutes and hours
    //      only use numbers, and do not use date() functions
    // [x] stop watch: implement each button, to start, stop and reset the stop watch
    //      start -> starting stop watch
    //      stop  -> stop current running stop watch, if you click start now stop watch starts running again at current time
    //      reset -> reset stop watch to 00:00:00.000
    // [] timer: create a fully running timer, where you input any numbers of seconds, each second will reduce number of seconds until 0 seconds done


    // EASY
    // [] timer: show start button again when time is over


    // MEDIUM
    // [x] stop watch: only show buttons which currently needed, e.g. stop button is not needed if stop watch is currently not running
    // [] timer: only show buttons which currently needed, e.g. stop button is not needed if stop watch is currently not running
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
    // [x] stop watch: do a refactoring after some experience
});
