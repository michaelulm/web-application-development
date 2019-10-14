
function calculateBMI(height, weight) {
    h = height / 100;
    var bmi = weight / (h * h);

    document.getElementById("demo").innerHTML = "Your Body-Mass-Index is " + bmi ;
}