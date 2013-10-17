
describe("view", function() {
  describe(".keyPressed", function() {
    it("should return a letter when passed a keycode", function(){
      var key = view.keyPressed(81);
      expect(key).toEqual("Q");
    });
  });
});

describe("model", function() {
  describe("model.charIsCorrect", function() {
    xit("should return true if letter matches marking letter in text", function() {
      expect(model.charIsCorrect('W')).toBe(true);
    });

    xit("should return false if letter does not match marking letter in text", function() {
      expect(model.charIsCorrect('p')).toBe(false);
    });

  });
})