describe("FizzBuzz", function(){
  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  it('prints the number 100 string', function() {
    hello = fizzBuzz.hello();
    expect(hello).toEqual('100');
  });

});
