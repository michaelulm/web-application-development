console.log("Hello Test");

// get elements by their IDs red and orange
let red = document.getElementById("red");
let orange = document.getElementById("orange");

// add to red and orange two separate event listeners
red.addEventListener("click", event => {
    console.log("Click Event Red triggered!");
});
orange.addEventListener("click", function(){
    console.log("Click Event Orange triggered!");
});

// get all h2 headlines and ...
let headlines = document.getElementsByTagName("h2");

// ... add an event Listener to them
for(var i=0; i < headlines.length; i++){
    headlines[i].addEventListener("click", function(){
        var information = this.nextElementSibling;
        if(information.style.display === "none"
            || information.style.display === ""){
            information.style.display = "block";
        } else {
            information.style.display = "none";
        }
    });
}