
/* string */
let message = "Hello World!";
console.log(message);

/* numbers */
let year = 2020;
year = new Date().getFullYear();
                        /* will output ... */
console.log(year);      /* current year */
console.log(year + 1);  /* next year */
console.log(year++);    /* this year */
console.log(++year);    /* in two years */

/* numbers */
year = "2020";
console.log(year);
console.log(year + 1); /* concat string with number => 20201 */

/* get current data type */
console.log(typeof year);

/* boolean */
let isDebugMode = true;
/* each output will happen */
if(isDebugMode == true){
    console.log("Debug mode is on!");
}
if(isDebugMode == 1){
    console.log("Debug mode is on!");
}
if(isDebugMode == "1"){
    console.log("Debug mode is on!");
}
if(isDebugMode === "1"){ /* except this one, why?*/
    console.log("Debug mode is on!");
}