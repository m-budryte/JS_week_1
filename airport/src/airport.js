const defCapacity = 1

function Airport(weather, capacity = defCapacity){
  this.list = [];
  this.weather = weather;
  this.capacity = capacity;
};

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy() === true) {
    throw new Error("Cannot land plane - stormy yasss!");
  } else {
    if (this.list.length === this.capacity) {
      throw new Error("Cannot land - airport full yasss!");
    };
    this.list.push(plane);
    return plane;
  };
}
Airport.prototype.takeOff = function(plane) {
  if (this.weather.isStormy() === true) {
    throw new Error("Cannot take off plane - stormy yasss!");
  } else {
  this.list.pop();
  };
}
