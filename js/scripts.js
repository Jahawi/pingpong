function pingPongClick() {
  var number = document.getElementById("txt_pp").value;
  var result = "";
  for (var i = 1; i <= number; i++) {
    if (i % 15 == 0) {
      result += "<li>PingPong</li>";
    } else if (i % 5 == 0) {
      result += "<li>Pong</li>";
    } else if (i % 3 == 0) {
      result += "<li>Ping</li>";
    } else {
      result += "<li>" + i + "</li>";
    }

  }
  document.getElementById("ans").innerHTML = result;
}
