const express = require('express')
const router =  express.Router()
const authMiddleware = require('../middlewares/authMiddleware')


const 
    UserServices
 = require('../controllers/usersController')

router.route('/').get(authMiddleware,UserServices.getAllUsers).post(UserServices.createUser)
router.route('/:id').get(authMiddleware,UserServices.getAUser).patch(authMiddleware,UserServices.updateUser).delete(authMiddleware,UserServices.deleteUser)


module.exports = router