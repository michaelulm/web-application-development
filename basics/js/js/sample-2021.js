console.log("Hello World!");

// alert('Hello MSD');

var demoText = "Hello Kapfenberg!";
console.log(demoText);
console.error('Demo Error');
console.warn('Demo Warning');

a = 20;
var result = "---";
if(a>5){
    var result = "yes";
    console.log(result);
} else {
    let result = "no";
}

console.log("result is " + result);

var demoArray = ["a", "b", "c", "d"];
for(var i in demoArray){
    console.log("index " + i + " = " + demoArray[i]);
}

function myFunction(){
    console.log("Hello Button");
    var name = prompt("What's your name?");
    console.log(name);
    var number = prompt("Tell me any number?");
    for(let i = 0; i <= number; i++){
        console.log(i);
    }
}

function increaseCounter(textColor){
    counter++;
    var myCounter = document.getElementById("countDiv");
    myCounter.innerHTML = counter;
    myCounter.style.color = textColor;
    console.log("counter: " + counter);
}

var counter = 0;
var button = document.getElementById("countButton");
button.addEventListener('click', event => increaseCounter("red"));
var btn2 = document.getElementById("countButton2");
btn2.addEventListener('click', event => increaseCounter("green"));

