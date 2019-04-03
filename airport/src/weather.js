'use strict';
function Weather(){
  this.probability = 0.6;
};

Weather.prototype.isStormy = function(){
  return (Math.random() > this.probability);
};
      
