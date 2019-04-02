describe("FizzBuzz", function(){
  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  it('prints 100 numbers', function() {
    expect(game().length).toEqual(100);
    console.log(game());
  });

  it('returns 1 for 1', function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  });

  it('returns 7 for 7', function() {
    expect(fizzBuzz.play(7)).toEqual(7);
  });

  it('returns fizz for 3', function() {
    expect(fizzBuzz.play(3)).toEqual('fizz');
  });

  it('returns fizz for 27', function() {
    expect(fizzBuzz.play(27)).toEqual('fizz');
  });

  it('returns fizz for 81', function() {
    expect(fizzBuzz.play(81)).toEqual('fizz');
  });

  it('returns buzz for 5', function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  });

  it('returns buzz for 25', function() {
    expect(fizzBuzz.play(25)).toEqual('buzz');
  });

  it('returns buzz for 70', function() {
    expect(fizzBuzz.play(70)).toEqual('buzz');
  });

  it('returns fizzbuzz for 30', function() {
    expect(fizzBuzz.play(30)).toEqual('fizzbuzz');
  });

  it('returns fizzbuzz for 45', function() {
    expect(fizzBuzz.play(45)).toEqual('fizzbuzz');
  });

  it('returns fizzbuzz for 15', function() {
    expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
  });
});
