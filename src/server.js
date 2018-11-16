const express = require('express')
const app = express()
const http = require("http").Server(app)
const bodyParser = require('body-parser')
const cors = require("cors")
const io = require('socket.io')(http)

const Rx = require('rxjs')
const homePage = new Rx.Subject()
const coordsPage = new Rx.Subject()

const ApiRoutes = require("./Routes/Index")
const sockets = new Map()
const PORT = 85


app.engine('html', require('ejs').renderFile)
app.use(cors())


homePage.subscribe( args => {
    const [ req, res ] = args
    res.render('homePage.html', {  })
})

coordsPage.subscribe( args => {
    const [ req, res ] = args
    res.render('coordsPage.html', {  })
})


app.get("/home", (req, res) => chat.next([req, res ]))
app.use("/api", ApiRoutes)


io.on('connection', function (socket){
    socket.on('disconnection', function (from, msg) {
	
    })
})


http.listen(PORT, function(){
    console.log("Server ok");
})


