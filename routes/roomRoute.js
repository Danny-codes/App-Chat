const express = require('express')
const router =  express.Router()
const authMiddleware = require('../middlewares/authMiddleware')


const 
roomServices
 = require('../controllers/roomController')

router.route('/room').post(authMiddleware,roomServices.choosingRoom)
router.route('/buidRoom').post(authMiddleware,roomServices.buidRoom)


module.exports = router