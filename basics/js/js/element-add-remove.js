
// https://developer.mozilla.org/en-US/docs/Web/API/Element/append
let div = document.getElementById("parentdiv");

let p1 = document.createElement("p");
p1.innerHTML = "First dynamic added Element" ;
div.append(p1);

let p2 = document.createElement("p");
p2.innerHTML = "Second dynamic added Element" ;
div.append(p2);

div = document.getElementById("parentdiv");
//var pstatic = div.firstChild;
div.removeChild(div.firstChild);

let ulist = document.getElementById("demolist");
console.log(ulist);