// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
let started = new Date().getTime();

// compare this behaviour with https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

function timeout(message, sleep){
    // promise will deliver a response, success or failure, but it will deliver a response
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            let diff = new Date().getTime() - started;
            console.log(message + diff)
            resolve("done");
        }, sleep)
    );
}

// async will tell JavaScript to run a function asynchronously
async function demoSetTimeout() {
    timeout("this is the 4. message ", 4000);

    // await will WAIT until response will be delivered -> in our case from a promise
    await timeout("this is the 1. message ", 3000);
    await timeout("this is the 2. message ", 2000);
    await timeout("this is the 3. message ", 1000);
}

demoSetTimeout();
console.log("Hello World! :) ");