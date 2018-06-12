var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');

//test home
describe('GET /', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/')
            .expect(200, done);
    });
});

//test login
describe('GET auth/login', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/auth/login')
            .expect(200, done);
    });
});

//test signup
describe('GET /signup', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/auth/signup')
            .expect(200, done);
    });
});



