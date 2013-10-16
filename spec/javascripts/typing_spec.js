describe("keyPressed", function() {
  it("should return a letter when passed a keycode", function(){
    var key = keyPressed(81);
    expect(key).toEqual("Q");
  })
});