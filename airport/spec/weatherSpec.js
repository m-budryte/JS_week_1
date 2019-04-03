describe("Weather", function() {
  var weather;

  // it("returns the weather", function() {
  //   weather = new Weather();
  //   expect(weather.isStormy()).toBeTruthy();
  // });

  it('gives stormy sometimes', function(){
    weather = new Weather();
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('gives not stormy sometimes', function(){
    weather = new Weather();
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});
