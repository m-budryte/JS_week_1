function FizzBuzz(){
  this._list = range(1, 100)
};

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
};

FizzBuzz.prototype.play = function(num) {
  if (num % 3 === 0 && num % 5 !== 0) {
    return 'fizz'
  } else if (num % 5 === 0 && num % 3 !== 0) {
    return 'buzz'
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz'
  } {
    return num
  }
};

function game(){
  var fizzBuzz = new FizzBuzz();
  var log = [];

  for (var i = 1; i <= 100; i++) {
    log.push(fizzBuzz.play(i));
  }

  return log;
};
