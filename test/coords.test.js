const proxyquire = require('proxyquire')
const sinon = require('sinon')
const supertest = require('supertest')
const expect = require('chai').expect
const express = require('express')
const { list, create, remove, update, getById } = require('../src/Routes/functionsCoords.js')

describe('GET, POST, PUT, DELETE /coords', function () {
    let app, getCoordsStub, request, route;

    beforeEach(function () {

        getCoordsStub = sinon.stub()
        app = express()

        route = proxyquire('../src/Routes/coords.js', {
          './coords': {
            getCoords: getCoordsStub
          }
        })

        route(app)
        request = supertest(app)
    })

    it('List coords', function (done) {

        getCoordsStub.returns(null)

        list({}).subscribe( res => {
            const coords = JSON.parse(JSON.stringify(res))
            request
              .get('/coords')
              .expect('Content-Type', /json/)
              .expect(200, function (err, res) {
                expect(res.body).to.deep.equal({
                  status: 'ok',
                    data: coords
                })
                done()
            })
        })
    })

    it('Create coord', function (done) {

        getCoordsStub.returns({lat: 1, long: 1})

        create({data: "seeeee"}).subscribe( res => {
            const coords = JSON.parse(JSON.stringify(res))
            request
              .post('/coord')
              .expect('Content-Type', /json/)
              .expect(200, function (err, res) {
                expect(res.body).to.deep.equal({
                  status: 'ok',
                    data: coords
                })
                done()
            })
        })
    })

    it('Update coord', function (done) {

        getCoordsStub.returns({uuid: 1})

        update({}).subscribe( res => {
            const coords = JSON.parse(JSON.stringify(res))
            request
                .put('/coord/:uuid')
              .expect('Content-Type', /json/)
              .expect(200, function (err, res) {
                expect(res.body).to.deep.equal({
                  status: 'ok',
                    data: coords
                })
                done()
            })
        })
    })

    it('Remove coord', function (done) {
        getCoordsStub.returns({uuid: 1})
        remove({}).subscribe( res => {
            const coords = JSON.parse(JSON.stringify(res))
            request
                .delete('/coord/:uuid')
              .expect('Content-Type', /json/)
              .expect(200, function (err, res) {
                expect(res.body).to.deep.equal({
                  status: 'ok',
                    data: coords
                })
                done()
            })
        })
    })
    it('Get coord by id', function (done) {
        getCoordsStub.returns({uuid: 1})
        getById({}).subscribe( res => {
            const coords = JSON.parse(JSON.stringify(res))
            request
                .get('/coord/:uuid')
              .expect('Content-Type', /json/)
              .expect(200, function (err, res) {
                expect(res.body).to.deep.equal({
                  status: 'ok',
                    data: coords
                })
                done()
            })
        })
    })

})


describe('Observers', function () {
    it('List object coords', function (done) {
        list({}).subscribe( res => {
            const coords = [{}, {}]
            expect(res).to.deep.equal(coords)
            done()
        })
    })


})

