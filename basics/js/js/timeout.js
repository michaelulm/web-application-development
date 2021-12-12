// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
let started = new Date().getTime();

// compare this behaviour with https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

// setTimeout will wait, but will not block JavaScript Execution
setTimeout(() => {
    let diff = new Date().getTime() - started;
    console.log("this is the 1. message " + diff)
}, 5000);

setTimeout(() => {
    let diff = new Date().getTime() - started;
    console.log("this is the 2. message " + diff)
}, 3000);

setTimeout(() => {
    let diff = new Date().getTime() - started;
    console.log("this is the 3. message " + diff)
}, 1000);


console.log("Hello World! :) ");