"use strict"; // use strict mode in this script
console.log("script is loading");

// more details at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// loads after window / page is fully loaded
window.addEventListener("load", function(){
   console.log("JSON");

   var jsonString = '{ "name":"Michael Ulm", "age":35, "city":"Kapfenberg"}';
   console.log(jsonString);

   var obj = JSON.parse(jsonString);
   console.log(obj);
   console.log(obj.name + " is " + obj.age + " years old, works in " + obj.city + "!");

});