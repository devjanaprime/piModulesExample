// random number module
var randoNummy = function( min, max, integer ){
  // get a random number between min and max
  var randyMarsh = Math.random() * ( max - min ) + min;
  if( integer ){
    randyMarsh = Math.floor( randyMarsh );
  }
  return randyMarsh;
};

module.exports=randoNummy;
