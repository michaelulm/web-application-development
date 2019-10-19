"use strict"; // use strict mode in this script

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    var minutes = 0;
    var milliseconds = 0;
    var seconds = 0;
    var hours = 0;

    // will be timer interval, to set with start Button and clear with stop Button
    var timer;

    // set default start values
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "000";

    // start timer = create interval
    document.getElementById("btnStart").addEventListener("click", function(){

        // each millisecond this intervall will be called
        timer = setInterval(function(){
            milliseconds++;

            // set milliseconds to 0
            if(milliseconds>=100){
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

            var hoursText = hours;
            if(hoursText<10)
                hoursText = "0" + hours;
            document.getElementById("hours").innerHTML = hoursText;

            var minutesText = minutes;
            if(minutesText<10)
                minutesText = "0" + minutes;
            document.getElementById("minutes").innerHTML = minutesText;

            var secondsText = seconds;
            if(secondsText<10)
                secondsText = "0" + seconds;
            document.getElementById("seconds").innerHTML = secondsText;

            var millisecondsText = milliseconds;
            if(milliseconds<100)
                millisecondsText = milliseconds + "0";
            if(milliseconds<10)
                millisecondsText = "0"+ millisecondsText ;

            document.getElementById("milliseconds").innerHTML = millisecondsText;

            // change to 10 milliseconds, because of better performance
        }, 10);
    });

    // stop timer = clear interval
    document.getElementById("btnStop").addEventListener("click", function(){
        clearInterval(timer);
    });

    // reset timer =
    document.getElementById("btnReset").addEventListener("click", function(){
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        document.getElementById("milliseconds").innerHTML = "000";

        minutes = 0;
        milliseconds = 0;
        seconds = 0;
        hours = 0;

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
