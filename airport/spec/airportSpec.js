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





// it("should be able to play a Song", function() {
//   player.play(song);
//   expect(player.currentlyPlayingSong).toEqual(song);
//
//   //demonstrates use of custom matcher
//   expect(player).toBePlaying(song);
// });
//
// describe("when song has been paused", function() {
//   beforeEach(function() {
//     player.play(song);
//     player.pause();
//   });
//
//   it("should indicate that the song is currently paused", function() {
//     expect(player.isPlaying).toBeFalsy();
//
//     // demonstrates use of 'not' with a custom matcher
//     expect(player).not.toBePlaying(song);
//   });
//
//   it("should be possible to resume", function() {
//     player.resume();
//     expect(player.isPlaying).toBeTruthy();
//     expect(player.currentlyPlayingSong).toEqual(song);
//   });
// });
//
// // demonstrates use of spies to intercept and test method calls
// it("tells the current song if the user has made it a favorite", function() {
//   spyOn(song, 'persistFavoriteStatus');
//
//   player.play(song);
//   player.makeFavorite();
//
//   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
// });
//
// //demonstrates use of expected exceptions
// describe("#resume", function() {
//   it("should throw an exception if song is already playing", function() {
//     player.play(song);
//
//     expect(function() {
//       player.resume();
//     }).toThrowError("song is already playing");
//   });
// });
