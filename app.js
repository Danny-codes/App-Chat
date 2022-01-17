const express = require('express')
const cors = require('cors');
require("dotenv").config()
const app = express()

app.use(cors())

var http = require('http').createServer(app),
sockets = require('./sockets')

//static
app.use(express.static('./public'));


//view engine
app.set('view engine', "ejs")

//body parser
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

//connection
const {DB} = require('./database/db.js')
const users = require('./routes/usersRoute')
const auth = require('./routes/authRoute')
const room = require('./routes/roomRoute')
const adress = require('./routes/adressRoute')

//routes
app.use('/api/user', users)
app.use('/api/user', auth)
app.use('/home', room)
app.use('/', adress)



const port = process.env.PORT
const start = async () => {
        await DB()
        http.listen(port, ()=> {
        console.log('Running')
        })
}
sockets.startingIoServer(http)
start()

module.exports = http

