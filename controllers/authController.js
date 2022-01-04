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
               res.redirect('/home')
           }else{
               res.redirect('/login')
           }
        }else{
            res.redirect('/login')
        }
    }catch(error){
        res.json(error)
    }
}


module.exports = authenticate
