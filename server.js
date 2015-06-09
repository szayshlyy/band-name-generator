var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server started on port" + port);
});

var messages = ["Good!", "Great!", "Awesome!", "Super!", "Nice!"];

app.get("/", function(req, res) {
  function getMessage() {
   return messages[Math.floor(Math.random() * messages.length)];
  }
  res.send(
    getMessage()
  );
});

var words = ["one", "two", "three"];

app.get("/words", function(req, res) {
  var randomIndex = Math.floor(Math.random() * words.length);
  res.json(words[randomIndex]);
});
