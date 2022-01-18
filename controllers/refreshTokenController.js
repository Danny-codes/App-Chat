const refreshTokenCase = require('../models/refreshTokenCase')

try{
    const RefreshTokenController = async(req,res) => {
        const {refresh_token} = req.body.refresh_token;
    
        const token = await refreshTokenCase(refresh_token)
    
        return res.json(token)
    }
    
    module.exports = RefreshTokenController
}catch(error){
    console.log(error)
}

