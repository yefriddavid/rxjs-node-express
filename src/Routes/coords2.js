const express = require('express')
const uuid = require('uuid')
const Rx = require('rxjs')
const bodyParser = require("body-parser")

const router = express.Router()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const CreateCoord = new Rx.Subject(),
 ListCoords = new Rx.Subject(),
 UpdateCoords = new Rx.Subject()


router.use(bodyParser.urlencoded({
    extended: true
}))


router.use(bodyParser.json())

ListCoords.pipe(map( res => {
	return {}
}))

/* functions */
ListCoords.subscribe( args => {
    const [ req, res ] = args
    res.json({})
})

CreateCoords.subscribe( args => {
    const [ req, res ] = args
    res.json({})
})

UpdateCoords.subscribe( args => {
    const [ req, res ] = args
    res.json({})
})


// router.get("/coords", ( req, res ) => ListCoords.next([req, res]))
// router.post("/coords", ( req, res ) => CreateCoord.next([req, res]))
// router.put("/coords", ( req, res ) => UpdateCoord.next([req, res]))



module.exports = router
