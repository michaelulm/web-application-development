"use strict"; // use strict mode in this script


setInterval(function(){
    console.log("wait 0.5 seconds ");
}, 500);


// will appear after 5 seconds
setTimeout(function(){

    console.log("wait 5 seconds");

}, 5000);

// will appear after 2 seconds
setTimeout(function(){

    console.log("wait 2 seconds");

}, 2000);

// will appear now
console.log("ready to go!");
