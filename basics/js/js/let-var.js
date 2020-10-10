function varTest() {
    var x = 47;
    if(true){
        var x = 11;  // it's the same variable
        console.log(x);  // 11
    }
    console.log(x);  // 11
}

function letTest() {
    let x = 47;
    if(true){
        let x = 11;  // other variable
        console.log(x);  // 11
    }
    console.log(x);  // 47
}

console.log("testing defining variables with var");
varTest();
console.log("testing defining variables with let");
letTest();


var a = 'global';
let b = 'global';
console.log(this.a); // "global"
console.log(this.b); // undefined