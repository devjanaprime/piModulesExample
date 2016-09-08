var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
// our custom module
var testModule = require( '../modules/testModule' );
var randomNumbers = require( '../modules/randomNumbers' );
// spin up a server
app.listen( '2001', 'localhost', function(){
  console.log( "I'm listening on 2001, Dave..." );
}); // end server up

// base route/url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.send( 'something happened' );
  // call randoNummy from our randomNumbers module
  var stan = randomNumbers( 3, 14, true );
  console.log( stan );
  var asdf = randomNumbers( 3, 14, false );
  console.log( asdf );
});

// another route
app.get( '/spaceship', function( req, res ){
  console.log( 'you can\'t do that, Dave...' );
  res.send( 'well... it looks I do that, Hal. What?!?!?' );
  var fromTestModule = testModule();
  console.log( fromTestModule );
}); // end spaceship
