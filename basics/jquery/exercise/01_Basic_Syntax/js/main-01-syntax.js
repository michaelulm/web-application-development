// document ready event to prevent jQuery code from running before the document is ready
$(document).ready(function () {
  //asign a click event to the button element and pass a funtion to the event to define what should happen
  $("button").click(function () {
    //select all <p> elements and hide them after you have clicked the button
    $("p").hide();
  });
});
