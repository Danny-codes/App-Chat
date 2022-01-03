const express = require('express')
const cors = require('cors');
const http = require('http')
const socketio= require("socket.io")
require("dotenv").config()

const app = express()
app.use(cors())
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    console.log('New connection')
})
//body parser
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

//connection
const {DB} = require('./database/db.js')
const users = require('./routes/usersRoute')
const auth = require('./routes/authRoute')
const adress = require('./routes/adressRoute')



//routes
app.use('/api/user', users)
app.use('/api/user', auth)
app.use('/', adress)

//view engine
app.set('view engine', "ejs")


const port = process.env.PORT
const start = async () => {
        await DB()
        server.listen(port, ()=> {
        console.log('Running')
        })
}
start()

module.exports = io;