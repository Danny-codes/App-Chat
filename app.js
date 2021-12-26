const express = require('express')
const app = express()
require("dotenv").config()

const {DB} = require('./database/db.js')
const users = require('./routes/usersRoute')

//routes
app.use('/api/user', users)

const port = process.env.PORT
const start = async () => {
        await DB()
        app.listen(port, ()=> {
        console.log('Running')
        })
}
start()
