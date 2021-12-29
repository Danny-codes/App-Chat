const jwt = require ('../models/jwt')
const bcrypt = require('bcryptjs')
const Users = require('../models/userModel')

const authenticate = async(req,res) => {
    const {email,password} = req.body
    try{
        const foundUser = await Users.findOne({where: {email:email}})
        if(foundUser){
           const correct = bcrypt.compareSync(password, foundUser.password)
           if(correct){
               const token = jwt.sign({user: foundUser.name, id: foundUser.id})
               res.send(token)
           }else{
               res.send('Password or email incorrect')
           }
        }else{
            res.send('wrong credentils provided')
        }
    }catch(error){
        res.send(error)
    }
}


module.exports = authenticate
