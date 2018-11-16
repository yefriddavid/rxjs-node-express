const express = require('express')
const { Subject } = require('rxjs')
const bodyParser = require('body-parser')

const { list, create, update, remove, getById } = require("./functionsCoords")
const { baseFuncs } = require("./tools/base")

const ListCoords = baseFuncs(list)
const CreateCoord = baseFuncs(create)
const UpdateCoord = baseFuncs(update)
const GetCoordById = baseFuncs(getById)
const RemoveCoord = baseFuncs(remove)

const router = express.Router()


const clientResponse = (res, data) => {
    if (!data) {
        res.status(404).json({
            status: 'not ok',
            data: null
        })
    }
    else {
        res.json({
            status: 'ok',
            data: data
        })
    }
}

module.exports = function (app) {
    const routes = express.Router()
    const route = express.Router()

    ListCoords.subscribe( args => {
        const { req, res, payload } = args
        clientResponse(res, payload)
    })
    CreateCoord.subscribe( args => {
        const { req, res, payload } = args
        clientResponse(res, payload)
    })
    UpdateCoord.subscribe( args => {
        const { req, res, payload } = args
        clientResponse(res, payload)
    })
    RemoveCoord.subscribe( args => {
        const { req, res, payload } = args
        clientResponse(res, payload)
    })
    GetCoordById.subscribe( args => {
        const { req, res, payload } = args
        clientResponse(res, payload)
    })


    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use('/coords', routes)
    app.use('/coord', route)

    routes.get("/", ( req, res ) => ListCoords.next({req, res, params: [req.query]}))

    //routes.get("/", ( req, res ) => ListCoords.next([req, res, params: []]))
    route.post("/", ( req, res ) => CreateCoord.next({req, res, params: [req.body]}))

    route.put("/:uuid", ( req, res ) => UpdateCoord.next({req, res, params: [req.params.uuid, req.body]}))
    route.delete("/:uuid", ( req, res ) => RemoveCoord.next({req, res, params: [req.params.uuid]}))
    route.get("/:uuid", ( req, res ) => GetCoordById.next({req, res, params: [req.params.uuid]}))

}


