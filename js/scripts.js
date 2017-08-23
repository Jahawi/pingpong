function pingPongClick() {
  var number = document.getElementById("number").value;
  var result = [];
  for (var i = 1; i <= number; i++) {
    if (i % 15 == 0) {
      result += "<li>pingpong</li>";
    }
    else if (i % 5 == 0) {
      result += "<li>pong</li>";
    }
    else if (i % 3 == 0) {
      result += "<li>ping</li>";
    }
    else {
      result += "<li>" + i + "</li>";
   )};


  }
  $document.getElementById("result").innerHTML = result;
)};
