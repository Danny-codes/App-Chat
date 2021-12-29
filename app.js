const express = require('express')
const app = express()
require("dotenv").config()

//body parser
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

//connection
const {DB} = require('./database/db.js')
const users = require('./routes/usersRoute')
const auth = require('./routes/authRoute')


//routes
app.use('/api/user', users)
app.use('/api/user', auth)


const port = process.env.PORT
const start = async () => {
        await DB()
        app.listen(port, ()=> {
        console.log('Running')
        })
}
start()
