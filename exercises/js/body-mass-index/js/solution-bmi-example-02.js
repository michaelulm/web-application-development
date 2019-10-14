alert("Hello");

function inputData(){

    // split input of birthday -> "safe" solution
    var year = prompt("Year of Birthday:");
    var month = prompt("Month of Birthday:");
    var day = prompt("Day of Birthday:");
    birthday = new Date(year, month, day);
    console.log(birthday);

    // split input and insert variables to Date Function
    var birthdayString = prompt("Your birthday (dd.mm.YYYY):");
    console.log(birthdayString);
    var birthdayArray = birthdayString.split(".");
    birthday = new Date(birthdayArray[2],birthdayArray[1],birthdayArray[0])
    console.log(birthdayArray);
    console.log(birthday);

    // easiert and simplest way, but no input validation, but no good user experience
    var birthday = new Date(prompt("your birthday (YYYY-mm-dd)"));
    console.log(birthday);

    alert(birthday);
}