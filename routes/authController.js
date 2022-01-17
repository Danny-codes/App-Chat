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
               const token = jwt.sign({name: foundUser.name, bio: foundUser.bio, email: foundUser.email})
              return res.render('home',{
                  userName: foundUser.name, token : token
              })
           }else{
               return res.json({msg: 'Email or password incorrect'})
           }
        }else{
            return res.json({msg: 'Email or password incorrect'})
        }
    }catch(error){
       return res.json(error)
    }
}


module.exports = authenticate
