const jwt = require('../models/jwt')

const authMiddleware = (req,res, next) => {
    const authToken = req.headers['authorization'];

    if(authToken != undefined){

        const bearer = authToken.split(' ')
        const token = bearer[1]

        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err){
                res.status(401)
                res.json({err: "Invalid token"})
            }else{
                req.token = token;
                req.logged = {name: data.name, bio: data.bio, email: data.email}
                req.data = data
                next()
            }
        })
        
    }else{
        res.json({err:"Invalid Token"})
    }
}

module.exports = authMiddleware
