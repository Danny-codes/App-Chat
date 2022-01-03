const express = require('express')
const router =  express.Router()

const 
    UserServices
 = require('../controllers/usersController')

router.route('/').get(UserServices.getAllUsers).post(UserServices.createUser)
router.route('/:id').get(UserServices.getAUser).patch(UserServices.updateUser).delete(UserServices.deleteUser)


module.exports = router