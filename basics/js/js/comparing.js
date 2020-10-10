console.log("Compare primitive data types");
console.log(1    ==  1);     // true
console.log('1'  ==  1);     // true
console.log(1    == '1');    // true
console.log(0    == false);  // true
console.log(0    == null);   // false

console.log("Compare objects");
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
console.log(object1 == object2); // false
function isObjectEqual(o1, o2){
    if(o1.key == o2.key)
        return true;
    else
        return false;
}
console.log(isObjectEqual(object1, object2)); // true

console.log("Compare 0, null and undefined");
console.log(0    == undefined);  // false
console.log(null == undefined);  // true

console.log("Compare numbers");
console.log(4 >= 3); // true
console.log(3 >= 3); // true