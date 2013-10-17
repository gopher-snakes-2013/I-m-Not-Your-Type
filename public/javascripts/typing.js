// APP



//Key input from user
//View turns code into a string and passes to...
//Model determines if correct based on current location in prompt
//Here is a character that can be added: pass back to View
//View adds character to innerText

// VIEW

var view = {
  prompt: function() {
    return document.getElementById("prompt").innerHTML;
  },
  keyPressed: function(keycode) {
    return String.fromCharCode(keycode);
  },
  addCorrectLettersToPage: function(event) {
    var letter = this.keyPressed(event.keyCode);
    if (model.charIsCorrect(letter, this.prompt())) {
      document.getElementById("text").innerHTML += letter;
    };
  }
};

// MODEL

var model = {
  latestChar: 0,

  charIsCorrect: function(char) {
    if(char === view.prompt()[this.latestChar]) {
      ++this.latestChar;
      return true;
    };
    return false;
  }
};

