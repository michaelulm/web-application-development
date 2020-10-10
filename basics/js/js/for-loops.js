var obj = {a:1, b:2, c:3};
for (var prop in obj) {
    console.log("o." + prop + " = " + obj[prop]);
}

var array = ["a", "b", "c"];
for (var key in array) {
    console.log("index " + key + " = " + array[key]);
}