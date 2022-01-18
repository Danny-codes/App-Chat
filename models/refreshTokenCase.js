const RefreshToken = require('./refreshTokenModel')
const jwt = require('../models/jwt')

const RefreshTokenCase = async(refresh_token) => {
    try{
        const refreshToken = await RefreshToken.findOne({
            where:{
                id: refresh_token
            }
        })
    
        if(!refreshToken){
            throw new Error('Refresh token invalid')
        }
    
        const token = jwt.sign(refreshToken.userId)

    }catch(error){
        console.log(error)
    }

}

module.exports = RefreshTokenCase