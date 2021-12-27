const User = require('../models/userModel')
const bcryptjs = require('bcryptjs')

const getAllUsers = async (req,res) => {
    try{
        const users = await User.findAll()
        res.send(users)
    }catch(error){
        res.send(error)
    }
}

const getAUser = async (req,res) => {
    try{
        const id = req.params.id
        const user = await User.findOne({where: {id:id}})

        if(!user){
            res.send('User not found')
        }else{
            res.send(user)
        }
     
    }catch(error){
        res.send(error)
    }
}

const createUser = async (req,res) => {
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
    
        res.send(newUser)
    }catch(error){
        res.send(error)
    }
}

const updateUser = async (req,res) => {
    const {name, email, password, bio} = req.body
    try{
        const id = req.params.id
        const user = await User.findOne({where:{id:id}})
        if(!user){
            res.send('Not found user')
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
               res.send(user)
           });

        }
    }catch(error){
        res.send(error)
    }
}

const deleteUser = async (req,res) => {
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
                res.send(user)
            })
           }else{
               res.send('Email does not correspond to user')
           }
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getAllUsers, getAUser, createUser, updateUser, deleteUser
}