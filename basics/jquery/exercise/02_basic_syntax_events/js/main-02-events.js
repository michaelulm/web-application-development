// document ready event to prevent jQuery code from running before the document is ready
$(document).ready(function () {
  //asign a click event to the button with the "id="hide" and pass a function to the event to define what should happen
  $("#hide").click(function () {
    //select all <p> elements and hide them after you have clicked the button
    $("p").hide();
  });
  //asign a click event to the button with the "id="show" and pass a function to the event to define what should happen
  $("#show").click(function () {
    //select all <p> elements and show them after you have clicked the button
    $("p").show();
  });

  //focus() method attaches an event handler funtion to an HTML form field and gets executed when the form field is focused
  $("input").focus(function(){
    $("#name").css("background-color", "yellow");
  });
  $("input").blur(function(){
    $("#email").css("background-color", "green");
  });

});
