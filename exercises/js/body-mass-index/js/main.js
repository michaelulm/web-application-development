"use strict"; // use strict mode in this script

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");
    document.getElementById("results").innerHTML = "Input your body height and weight, then click calculate!";

    // implement following TODO Lists

    // minimum
    // [] BMI Calculation
    // [] output result to results div
    // [] compare current value to min, max value of 19,5 and 24,5, add output :) if value is between min, max
    // [] add color to current results div in relation to current value -> use matching colors https://de.wikipedia.org/wiki/Body-Mass-Index#Bei_Erwachsenen

    // easy
    // [] add another input field to ask user for his/her gender
    // [] do not overwrite latest value, extend existing values with current values, create a history of your calculations

    // medium
    // [] accept following inputs e.g. 1,82 or 1.82 or 1,82m
    //      use replace, parseFloat, parseInt, ... methods to improve easy handling of BMI calculator
    // [] replace current results div with e.g. <ul> and add new list items to this list when you calculate BMI
    //      add current time to new list item https://www.w3schools.com/js/js_date_methods.as
    // [] replace current results div with e.g. a table and add rows and columns (height, weight, bmi)

    // extended
    // [] coming soon ...
});
