var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');
var db = require('../models');

before(function (done) {
    db.sequelize.sync({ force: true }).then(function () {
        done();
    });
});