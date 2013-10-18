var correctChars = '';
var latestChar = 0;
var totalCharsPressed = 0;

function gameLogic(event) {
  var testString = document.getElementById("test").innerText;
  concatenatingString(event, testString);
  if (isDone(testString)) {
    var timeInSeconds = (timer.endTime - timer.startTime) / 1000;
    var wpm = wordsPerMinute(timeInSeconds, testString);
    var accuracy = accuracyRating(totalCharsPressed,testString);
    renderAccuracy("accuracy", accuracy);
    renderSecondsElapsed("time-elapsed", timeInSeconds);
    renderWPM("wpm", wpm);
  }
}

function isDone(testString) {
  if (correctChars.length === testString.length) {
    correctChars = '';
    return true;
  }
  return false;
}

function checkCorrect(char) {
  var testString = document.getElementById("test").innerText;
  ++totalCharsPressed;
  if(char === testString[latestChar]) {
    ++latestChar;
    return true;
  }
  return false;
}

function keyPressed(keycode) {
  return String.fromCharCode(keycode);
}

function concatenatingString(event, string) {
  var letter = keyPressed(event.keyCode);
  if (checkCorrect(letter)) {
    correctChars = correctChars.concat(letter);
    setTimer(string);
    renderString("text", correctChars);
  }
}

var timer = {
  startTime: 0,
  endTime: 0,
  start: function() {
    this.startTime += new Date().getTime();
  },
  end: function() {
    this.endTime += new Date().getTime();
  }
};

function setTimer(comparisonString) {
  if (correctChars.length === 1) {
    timer.start();
  }
  if (correctChars.length === comparisonString.length) {
    timer.end();
  }
}

function numberOfWords(string) {
  var length = string.split(' ').length;
  return length;
}

function wordsPerMinute(time, string) {
  var numberWordsInPrompt = numberOfWords(string);
  var timeInMinutes = time/60;
  var wpm = Math.floor(numberWordsInPrompt/timeInMinutes);
  return wpm;
}

function accuracyRating(user_typed, actual_text) {
  return Math.floor((actual_text.length)/user_typed * 100);
}

//VIEW

function renderString(id, string) {
  document.getElementById(id).innerText = string;
}

function renderSecondsElapsed(id, seconds) {
  document.getElementById(id).innerText = "Seconds Elapsed: " + seconds;
}

function renderWPM(id, wpm) {
  document.getElementById(id).innerText = "WPM: " + wpm;
}

function renderAccuracy(id, accuracy) {
  document.getElementById(id).innerText = "Accuracy: " + accuracy + "%";
}
