const express = require('express')
const router =  express.Router()

const {
    getAllUsers, 
    getAUser, 
    createUser, 
    updateUser, 
    deleteUser
} = require('../controllers/usersController')

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getAUser).patch(updateUser).delete(deleteUser)


module.exports = router