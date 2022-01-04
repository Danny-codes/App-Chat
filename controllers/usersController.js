const User = require('../models/userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('../models/jwt');
require("dotenv").config()

const UserServices = {};

UserServices.getAllUsers = async (req,res) => {
    try{
        const users = await User.findAll()
        res.json(users)
    }catch(error){
        res.json(error)
    }
}

UserServices.getAUser = async (req,res) => {
    try{
        const id = req.params.id
        const user = await User.findOne({where: {id:id}})

        if(!user){
            res.json('User not found')
        }else{
            res.json(user)
        }
     
    }catch(error){
        res.json(error)
    }
}

UserServices.createUser = async (req,res) => {
    try{
        const {
            name, email, password, bio
        } = req.body
    
        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(password, salt)
    
        const newUser = await User.create({
            name: name,
            email: email,
            password: hash,
            bio: bio
        })

        const token = jwt.sign({user: newUser.name, id: newUser.id})
    
        res.redirect('/home')
    }catch(error){
        res.json(error)
    }
}

UserServices.updateUser = async (req,res) => {
    const {name, email, password, bio} = req.body
    try{
        const id = req.params.id
        const user = await User.findOne({where:{id:id}})
        if(!user){
            res.json('Not found user')
        }else{

            if(name){
                user.name = name
            }
            if(email != undefined){
                user.email = email
            }
            if(password){
                const salt = bcryptjs.genSaltSync(10)
                const hash = bcryptjs.hashSync(password, salt)

                user.password = hash
            }
            if(bio){
                user.bio = bio
            }
            user.save()
           .then(() => {
               res.json(user)
           });

        }
    }catch(error){
        res.send(error)
    }
}

UserServices.deleteUser = async (req,res) => {
    try{
        const id = req.params.id
        const email = req.body.email
        const user = await User.findOne({where: {id:id}})
        const foundByEmail = await User.findOne({where:{email:email}})

        if(!user){
            res.send('User not found')
        }else{
           if(user.email == foundByEmail.email){
            user.deleted = true
            user.save().then(() => {
                res.json(user)
            })
           }else{
               res.json('Email does not correspond to user')
           }
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = UserServices