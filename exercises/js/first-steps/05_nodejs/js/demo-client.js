// this JavaScript will be included to HTML Page, and it's NOT running on Node.js
// CLIENT SIDE usage

let counter = 0;

window.addEventListener("load", function() {
    console.log(" === page ready ===");

    setInterval(function(){
        counter++;
        document.getElementById("output-client").innerHTML = "Client Counter: " + counter;
    }, 1000);
});