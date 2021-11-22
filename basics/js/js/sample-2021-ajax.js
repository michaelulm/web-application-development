console.log("test");

let button = document.getElementById("loadBtn");

function ajaxCallback(){
    // for more details please use course slides for readyState and status
    console.log("ajaxCallback " + this.readyState);
    console.log("responseText " + this.responseText);

    if(this.status == 200){
        var response = this.responseText;
        var json = JSON.parse(response);

        console.log(response);
        console.log(json);

        // use json[i].name -> users.txt
        // use json.name    -> user.txt

        // iterate through users list
        for(var i in json){
            console.log(json[i].name);

            // try to replace e.g. table or ul instead of div element
            // extend table or ul with matching items / elements
            document.getElementById("container").innerHTML +=
                "<br/><strong>" + json[i].name + "</strong>";
        }
    }
}

// onclick event
button.addEventListener("click", () => {
    console.log("click");
    var xhr = new XMLHttpRequest();

    // old method -> take care about readystate and status
    //xhr.onreadystatechange = ajaxCallback;

    // new / modern method, will be called only after complete loaded response
    xhr.onload = ajaxCallback;

    // text only
    // xhr.open("GET", "data/simple.txt", true);

    // first simple json object
    // xhr.open("GET", "data/user.txt", true);

    // list of users
    xhr.open("GET", "data/users.txt", true);
    
    xhr.send();
});