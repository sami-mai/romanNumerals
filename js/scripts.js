// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;
var romNum = ["I", "V", "X", "L", "C", "D", "M"];

$('#submit-button').click(function(e) {
  e.preventDefault();
  var input = document.getElementById('number').value;
  var userInput = input.split("");
  for (i = 0; i < userInput.length; i++) {
    console.log(i);

  }
  $(".number").text(input);
  $(".roman").text(result);

  $("#result").show();
});
