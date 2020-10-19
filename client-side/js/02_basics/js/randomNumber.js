// https://www.w3schools.com/js/js_random.asp for more details

function getRndInteger(min, max){
  // take care: Math.random() always returns a number lower than 1.
  
  var rndNumber = Math.random() * (max - min + 1 );// get random number and multiply with defined range of min and max value, including both values
  return Math.floor(rndNumber) + min; // returns random number within defined range
}