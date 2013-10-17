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
  var string = "With great power comes great responsibility."
  it("should have calculate the correct number of words in test string", function() {
    expect(numberOfWords(string)).toEqual(6);
  });
});

describe("wordsPerMinute()", function() {
  var string = "With great power comes great responsibility."
  it("should return a wpm count", function(){
    expect(wordsPerMinute(60, string)).toEqual(6);
  });
});

describe("setTimer()", function() {
  xit("should be defined and shit", function(){
    expect(setTimer()).toBeDefined();
  });
});