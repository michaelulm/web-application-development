"use strict"; // use strict mode in this script

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");
    console.log("window variable");
    console.log(window);
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.location);

    // find more details at https://developer.mozilla.org/de/docs/Web/API/Window

    console.log();
    console.log("document variable");
    console.log(document);
});
