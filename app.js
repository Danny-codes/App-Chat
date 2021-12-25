const express = require('express')
const app = express()

const users = require('./routes/usersRoute')

//routes
app.use('/api/user', users)


app.listen(3000, ()=> {
    console.log('Running')
})