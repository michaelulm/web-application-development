$(document).ready(function(){
  $("#btn1").click(function(){
    //load()-Method loads data from a server an puts the returned data into the selected element
    $("#div1").load("data/demo_text.html");
  });

  $("#btn2").click(function(){
    $("#div2").load("data/demo_text.html", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
      alert("External content loaded successfully!");
      if (statusTxt == "error")
      alert ("Error: " + xhr.status + ": " + xhr.statusText);
    })
  })
});