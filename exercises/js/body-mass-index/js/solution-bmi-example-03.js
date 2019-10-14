
function calculateBMI(height, weight) {
    h = height / 100;
    var bmi = weight / (h * h);

    // will output current BMI to HTML element with ID "demo"
    document.getElementById("demo").innerHTML = "Your Body-Mass-Index is " + bmi ;
}