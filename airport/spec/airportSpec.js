describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = new Weather();
    airport = new Airport(weather);
    plane = new Plane();
    yodaPlane = new Plane();
  });

  it("instructs a plane to land", function() {
    spyOn(weather,'isStormy').and.returnValue(false);
    expect(airport.land(plane)).toEqual(plane);
  });

  it("instructs a plane to take off and confirms that it is no longer at the airport", function(){
    spyOn(weather,'isStormy').and.returnValue(false);
    airport.takeOff(plane);
    expect(airport.list).not.toContain(plane);
  });

  it("plane cannot land when stormy, raise error", function() {
    spyOn(weather,'isStormy').and.returnValue(true);
    expect(function() { airport.land(plane) }).toThrowError("Cannot land plane - stormy yasss!");
  });

  it("plane cannot take off when stormy, raise error", function() {
    spyOn(weather,'isStormy').and.returnValue(true);
    expect(function() { airport.takeOff(plane) }).toThrowError("Cannot take off plane - stormy yasss!");
  });

  it("cannot land plane if airport is full", function() {
    spyOn(weather,'isStormy').and.returnValue(false);
    airport.land(plane);
    expect(function() { airport.land(yodaPlane) }).toThrowError("Cannot land - airport full yasss!");
  });

  it("the capacity of the airport can be overriden", function() {
    var yodaAirport = new Airport(weather, 100);
    expect(yodaAirport.capacity).toEqual(100);
  });
});
