describe("model", function() {
  describe("model.charIsCorrect", function() {
    xit("should return true if letter matches marking letter in text", function() {
      expect(model.charIsCorrect('W')).toBe(true);
    });

    xit("should return false if letter does not match marking letter in text", function() {
      expect(model.charIsCorrect('p')).toBe(false);
    });

  });
});

describe("keyPressed()", function() {
  it("should return a letter when passed a keycode", function(){
    var key = keyPressed(81);
    expect(key).toEqual("Q");
  });
});

describe("timer", function() {
  it("should have a start time and an end time", function() {
    expect(timer.startTime).toBeDefined();
    expect(timer.endTime).toBeDefined();
  });

  it("should have a start function which sets the start time", function() {
    timer.start();
    expect(timer.startTime).toNotEqual(0);
  });

  it("should have an end function which sets the end time", function() {
    timer.end();
    expect(timer.endTime).toNotEqual(0);
  });
});

describe("numberOfWords()", function() {
  var string = "With great power comes great responsibility.";
  it("should calculate the correct number of words in test string", function() {
    expect(numberOfWords(string)).toEqual(6);
  });
});

describe("wordsPerMinute()", function() {
  var string = "With great power comes great responsibility.";
  it("should return a wpm count", function(){
    expect(wordsPerMinute(60, string)).toEqual(6);
  });
});

describe("accuracyRating()", function() {
  var user_typed = 68;
  var actual_text = "With great power comes great responsibility.";
  it("should return an accuracy rating", function() {
    expect(accuracyRating(user_typed, actual_text)).toEqual(Math.floor((44/68) * 100));
  });
});