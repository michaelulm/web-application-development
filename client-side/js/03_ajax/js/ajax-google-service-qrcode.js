"use strict"; // use strict mode in this script

// more details at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// loads after window / page is fully loaded
window.addEventListener("load", function(){
    console.log(" === page ready ===");

    let serveraddress = "";

    // we need a callback function, which will be loaded on ready state changes
    function ajaxCallback(){

        // console.log(this);

        if(this.readyState == 4     // operation is complete
            && this.status == 200   // successful request/response
        ){
            // create object and fill in raw data blob
            var data = window.URL.createObjectURL(this.response);
            var i =  document.createElement('img');
            i.src = data;

            var a = document.createElement("a");
            a.href = serveraddress;
            a.innerText = serveraddress;
            a.target = "_blank";

            document.getElementById("result").innerHTML = "";
            document.getElementById("result").appendChild(i);
            document.getElementById("result").appendChild(a);
        }


        if(this.readyState == 4     // operation is complete
            && this.status == 404   // successful request/response
        ){
            document.getElementById("result").innerHTML = "Server is not available";
        }
    }

    // load function to create first AJAX Request
    function loadData(){
        console.log("requesting google service");
        var ajaxObject = new XMLHttpRequest();
        // TODO replace URL by your needs
        serveraddress = document.getElementById("serveraddress").value;
        var imageURL = "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=" + encodeURI(serveraddress) + "&choe=UTF-8";

        console.log(imageURL);

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxCallback;

        // set true to load asynchronous
        ajaxObject.open("GET", imageURL, true);
        // request blob - raw data
        ajaxObject.responseType = "blob";
        ajaxObject.send();
        console.log("TEST");
    }

    document.getElementById("btnSubmit").addEventListener("click", loadData);



});