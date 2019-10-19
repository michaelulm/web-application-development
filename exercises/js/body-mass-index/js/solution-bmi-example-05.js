"use strict"; // use strict mode in this script

alert('=== demo page ready (reloaded) ===');

// var minBMI = 19.5;  // variable
const minBMI = 19.5;
const maxBMI = 24.5;

// loads after window / page is fully loaded
window.addEventListener("load", function(){

    console.log(" === page ready ===");
    document.getElementById("results").innerHTML = "Input your body height and weight, then click calculate!";

    // add BMI Calculation, add function to event = (event) listener, and will run if btnCalculate will be clicked
    document.getElementById("btnCalculate").addEventListener("click", function(){

        // get input values with DOM operations
        var height = document.getElementById("height").value;
        var weight = document.getElementById("weight").value;

        // for first debugging
        console.log(height);
        console.log(weight);

        // calculate BMI -> copied from previous examples
        var h = height / 100;       // height in m, weight in kg
        var bmi = weight / (h * h);


        var checkResult = "";
        // check if BMI is in range of min and max
        if(bmi > minBMI && bmi < maxBMI){
            checkResult = "Yeah Great! Your BMI is in range!";
        } else {
            checkResult = "Oh no :( take care about your body!";
        }


        // "write" output into different HTML elements
        document.getElementById("results").innerHTML = "Your BMI is " + bmi + ". " + checkResult; // div   => innerHTML
        document.getElementById("results-output").value = bmi;               // input => value
    });

});


// Overview of Body-Mass-Index TODO Lists

// STARTER
// [x] BMI Calculation
// [x] output result to results div
// [x] compare current value to min, max value of 19,5 and 24,5, add output :) if value is between min, max
// [] add color to current results div in relation to current value -> use matching colors https://de.wikipedia.org/wiki/Body-Mass-Index#Bei_Erwachsenen


// EASY
// [] add another input field to ask user for his/her gender
// [] do not overwrite latest value, extend existing values with current values, create a history of your calculations


// MEDIUM
// [] accept following inputs e.g. 1,82 or 1.82 or 1,82m
//      use replace, parseFloat, parseInt, ... methods to improve easy handling of BMI calculator
// [] replace current results div with e.g. <ul> and add new list items to this list when you calculate BMI
//      add current time to new list item https://www.w3schools.com/js/js_date_methods.as


// OPTIONAL / EXTENDED
// [] replace current results div with e.g. a table and add rows and columns (height, weight, bmi)
// [] accept different inputs and do a correct calculation
//		e.g. 1,82m or 182cm will be the same height
// [] coming soon ...