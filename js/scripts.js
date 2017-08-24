$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $("#userOutput").empty();
    var userInput = parseInt($("input#number").val());
    var results = PingPong(userInput);
    results.forEach(function(output) {
    $("#result").append("<li>" + output + "</li>");
    });
  });
});

//business
function PingPong(userInput){
var result = [];
for (var i = 1; i <= userInput; i++){
  console.log(i);
  if ((i % 15) === 0){
    result.push ("pingpong");
  } else if ((i % 5) === 0){
    result.push ("pong");
  } else if ((i % 3) === 0){
    result.push ("ping");
  } else{
    result.push (i);
    }
  }
  console.log(result);
  return result;
}
