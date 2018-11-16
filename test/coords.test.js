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

        const formData = {lat: '1', long: '2'}
        getCoordsStub.returns(null)

        create(formData).subscribe( res => {
            const coords = JSON.parse(JSON.stringify(res))
            request
                .post('/coord')
                .type('form')
                .send(formData)
                .set('Accept', /application\/json/)
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

        const params = { uuid: '1' }
        const formData = { lat: '1', long: '2' }
        getCoordsStub.returns(params)

        update(params.uuid, formData).subscribe( res => {
            const coords = JSON.parse(JSON.stringify(res))
            request
                .put('/coord/1')
                .expect('Content-Type', /json/)
                .type('form')
                .send(formData)
                .set('Accept', /application\/json/)
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
        const params = { uuid: '1' }
        getCoordsStub.returns(params)
        remove(params).subscribe( res => {
            const coords = JSON.parse(JSON.stringify(res))
            request
                .delete('/coord/1')
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
        const params = { uuid: '1' }
        getCoordsStub.returns(params)
        getById(params).subscribe( res => {
            const coord = JSON.parse(JSON.stringify(res))
            request
                .get('/coord/1')
                .expect('Content-Type', /json/)
                .expect(200, function (err, res) {
                  //console.log(res.body)
                expect(res.body).to.deep.equal({
                    status: 'ok',
                    data: coord
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

