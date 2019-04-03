describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it("returns a starting temperature of 20", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('the temperature can be increased by 1 degree', function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });

  it('the temperature can be decreased by 1 degree', function() {
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
  });

  it('the minimum temperature is 10 degrees', function() {
  var times = 20;
  for(var i = 0; i < times; i++) {
    thermostat.down();
  }
    expect(thermostat.temp).toEqual(10);
  });

  it('the power saving mode is on by default', function() {
    expect(thermostat.powerSaving).toBe(true);
  });

  it('the power saving mode can be changed to off', function() {
    thermostat.powerSavingSwitch()
    expect(thermostat.powerSaving).toBe(false);
    thermostat.powerSavingSwitch()
    expect(thermostat.powerSaving).toBe(true);
  });

  it('if power saving mode is on, the maximum temperature is 25 degrees', function() {
    var times = 20;
    for(var i = 0; i < times; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(25);
  });

  it('If power saving mode is off, the maximum temperature is 32 degrees', function() {
    thermostat.powerSavingSwitch()
    var times = 20;
    for(var i = 0; i < times; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(32);
  });

  it('resets temperature to 20', function() {
    var times = 20;
    for(var i = 0; i < times; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  });

  it("returns a low-usage if temp < 18", function() {
    thermostat.temp = 17;
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
  });

  it("returns a medium-usage if temp < 25", function() {
    thermostat.temp = 24;
    expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
  });

  it("returns a high-usage if temp >= 25", function() {
    thermostat.temp = 27;
    expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
  });
});
