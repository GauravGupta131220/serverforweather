var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('should');
var App = require('../app.js')
var supertest = require('supertest')
var sinon = require('sinon')
var model = require('../model/User.js')
var modelStub = sinon.stub(model, 'find')
var modeldeleteStub = sinon.stub(model, 'remove')
var server = supertest.agent("http://localhost:3000")


var request = require('supertest')
var express = require('express')



describe('testing the put method', function() {
    it("check first name", function(done) {

        //calling ADD api
        server
            .post('/admin/')
            .send({ firstName: "gaurav", lastName: "gupta", age: 22 })
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err)
                expect(res.status).to.be.equal(200);
                expect(res.body.firstName).to.be.equal("gaurav");
                expect(res.body.age).to.be.equal(22);
                done();
            });
    });

})


describe('GET /index/home', function() {
    it('respond with json', function(done) {
        modelStub.yields(null, [{ firstName: "gaurav", lastName: "gupta", age: 22 }])
        request(App)
            .get('/index/home')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body[0].firstName).to.be.equal("gaurav");
                expect(res.body[0].lastName).to.be.equal("gupta");
                expect(res.body[0].age).to.be.equal(22);
                done();
            })
    });
});




describe('delete', function() {

    it('checking delete', function() {
        modelStub.yields(null, [{ _id: "59a57e6705ec6c114919d1f5", firstName: "gaurav", lastName: "gupta", age: 22 }])
        request(App)
            .delete('/logout/' + "59a57e6705ec6c114919d199")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                res.should.have.status(200)
                res.body.should.be.a('array');
                res.body.length.should.be.equal(0);
            })
    });


});