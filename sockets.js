const http = require('./app')
const socketio = require("socket.io")(http)

module.exports = {
    startingIoServer: (app) => {
        
        io = socketio.listen(app);

        io.on('connection', socket => {
            console.log('New connection')
            console.log(socket.id)

            socket.emit('message', 'Welcome to YouTalk')

            //Broadcast when a new user connect 
            socket.broadcast.emit('message','New user connected')

            socket.on('disconnect', () => {
                io.emit('message', 'A user has left the chat')
            })

            //Listen for chatMessage
            socket.on('chatMessage', (msg) => {
                console.log(msg)
                io.emit('message', msg)
            })
        })
        
      
        
    }
}
