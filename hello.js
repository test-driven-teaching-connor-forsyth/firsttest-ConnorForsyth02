/* jshint esversion: 6 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n'); 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


//Enable testing
//Here you can able testing for the various questions you will attempt
//To test set the variable to true, otherwise set to false
module.exports.question1aTest = true;
module.exports.question1bTest = true;

var example = ""
