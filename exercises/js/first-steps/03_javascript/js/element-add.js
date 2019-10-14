"use strict"; // use strict mode in this script

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    function createAppendNewElement(counter){

        let demo = document.getElementById("demo");
        // create new element
        let newElement = document.createElement("p");
        newElement.innerHTML = "Content of new Element " + counter;

        // append element to existing element
        demo.append(newElement);
    }

    var i = 0;
    createAppendNewElement(i++);
    createAppendNewElement(i++);
    createAppendNewElement(i++);



});
