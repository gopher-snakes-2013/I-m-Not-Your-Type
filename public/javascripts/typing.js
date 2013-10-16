function keyPressed(keycode) {
  return String.fromCharCode(keycode);
};

var correctChars = '';

function concatenatingString(event) {
  console.log(event);
  var letter = keyPressed(event.keyCode);
  console.log("You just pressed " + letter);
  correctChars = correctChars.concat(letter);
  document.getElementById("text").innerText = correctChars;
}