roomServices = {}
 roomServices.choosingRoom = async (req,res) => {
    const room = await  req.body.room
    const user = req.logged

    try{
        if(room != undefined){
            res.render('chat',{
                room : room, user : user, token: token
            })
        }else{
            res.redirect('home',{
                msg : 'Please choose a room'
            })
        }
    }catch(error){
        res.json({msg: "Error"})
    }
}

 roomServices.buidRoom = async (req,res) => {
    const newRoom = await req.body.newRoom

    try{
        if(newRoom != undefined){
            res.render('chat',{
                room : newRoom
            })
        }else{
            res.redirect('home',{
                msg : 'Invalid name'
            })
        }
    }catch(error){
        res.json({msg: "Error"})
    }
}

module.exports = roomServices