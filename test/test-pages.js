var expect  = require('chai').expect;
var request = require('request');

if('Main page content', function(done) {
    request('http://localhost:3001' , function(error, response, body) {
        expect(body).to.equal('Hello Node.js Server!');
        done();
    });
});