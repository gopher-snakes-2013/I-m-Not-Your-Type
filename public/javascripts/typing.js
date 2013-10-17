function keyPressed(keycode) {
  return String.fromCharCode(keycode);
};

var timer = {
  startTime: 0,
  endTime: 0,
  start: function() {
    this.startTime += new Date().getTime();
  },
  end: function() {
    this.endTime += new Date().getTime(); 
  }
}

function setTimer() {

}

function numberOfWords(string) {
  var length = string.split(' ').length;
  return length;
}

function wordsPerMinute(time, string) {
  var numberWordsInPrompt = numberOfWords(string);
  var timeInMinutes = time/60;
  var wpm = Math.floor(numberWordsInPrompt/timeInMinutes);
  return wpm
}

var correctChars = '';

function concatenatingString(event) {
  var testString = document.getElementById("test").innerText;
  var letter = keyPressed(event.keyCode);
  correctChars = correctChars.concat(letter);
  document.getElementById("text").innerText = correctChars;

  if (correctChars.length === 1) { 
    timer.start();
  };
  if (correctChars.length === testString.length) {
    timer.end();
    var timeInSeconds = (timer.endTime - timer.startTime) / 1000;
    document.getElementById("time-elapsed").innerText = "Seconds Elapsed: " + timeInSeconds;
    var wpm = wordsPerMinute(timeInSeconds, testString);
    document.getElementById("wpm").innerText = "WPM: " + wpm
  }
}

// function render {
  
// }