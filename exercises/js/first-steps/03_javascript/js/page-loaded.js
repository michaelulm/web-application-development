"use strict"; // use strict mode in this script

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");
    console.log("Current loaded HTML");
    console.log(document.children[0].innerHTML);
});

console.log(" === page is loading === ");
console.log("Current loaded HTML 1");
console.log(document.children[0].innerHTML);
alert('page is loading');