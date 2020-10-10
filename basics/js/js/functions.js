/* will not be triggered automatically, we need to bind and click the button in html */
function myFirstFunction(){
    console.log("Hello Function :) !");
}

/* another function with one required argument*/
function welcomeMessage(name){
    console.log("Welcome, " + name);
}

/* multiple usage of the previous defined function*/
welcomeMessage("Michael Ulm");
welcomeMessage("Elmar Krainz");
welcomeMessage("Jasmin Koller");
welcomeMessage("Harald Schwab");