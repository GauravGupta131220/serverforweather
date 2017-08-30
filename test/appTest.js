var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('should');
var App = require('../app.js')
var supertest = require('supertest')
var sinon = require('sinon')
var model = require('../model/User.js')
var server = supertest.agent("http://localhost:3000")

var request = require('supertest')
var express = require('express')



//testing the POST api
let postStub = sinon.stub(model.prototype, 'save');
describe('testing the post api', function() {

    before(function() {
        postStub.yields(null, {
            "ok": 1,
            "nModified": 1,
            "n": 1
        });
    });

    it('response from json', function(done) {
        request(App)
            .post('/admin/')
            .end(function(err, res) {
                if (err) return done(err)
                else {
                    expect(res.body.ok).to.be.equal(1);
                    done();
                }
            })
    })
})


//testing the GET api
let getStub = sinon.stub(model, 'find')
describe('testing the get api', function() {
    it('respond with json', function(done) {
        getStub.yields(null, [{ firstName: "gaurav", lastName: "gupta", age: 22 }])
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



//testing the DELETE api
let deleteStub = sinon.stub(model, 'remove')
describe('testing the delete api', function() {
    before(function() {
        deleteStub.withArgs({ '_id': 'abcdef' })
            .yields(null, {
                "ok": 1,
                "nModified": 1,
                "n": 1
            })
    })

    it('respond with json', function(done) {
        request(App)
            .delete('/logout/abcdef')
            .end(function(err, res) {
                if (err) return done(err)
                expect(res.body.ok).to.be.equal(1)
                done();
            })
    })

})


//testing the PUT api
let putStub = sinon.stub(model, 'update')
describe('testing the put api', function() {
    before(function() {
        putStub.withArgs({ '_id': 'pqrst' }, { $set: { "firstName": "gaurav", "lastName": "gupta", "age": 22 } })
            .yields(null, {
                "ok": 1,
                "nModified": 1,
                "n": 1
            })
    })

    it('respond with json', function(done) {
        request(App)
            .put('/user/user/pqrst')
            .send({ "firstName": "gaurav", "lastName": "gupta", "age": 22 })
            .end(function(err, res) {
                if (err) return done(err)
                expect(res.body.ok).to.be.equal(1)
                done();
            })
    })

})