$(document).ready(function () {
  //add class attributes to different elements
  $("#add").click(function () {
    $("h1, h2, p").addClass("blue");
    $("div").addClass("important");
  });
  
  //remove class attributes to different elements
  $("#remove").click(function(){
    $("h1, h2").removeClass("blue");
  })

  //Change css with .css(name, value)
  $("#color").css("background", "yellow");

  //change css when you roll the mouse over the <p> element with id="mouseover"
  $("#mouseover").mouseover(function(){
    $(this).css("color", "red");
  });


  //get the content of selected element (including markup)
    $("#btn").click(function(){
      alert("HTML: " + $("#color").html());
    });

  //change html with .html()
  $("#text").html("I'm the new text of this < p > element");
});
