const express = require('express')
const router =  express.Router()

const 
{login, chat, register, home }
 = require('../controllers/adressController')

router.route('/login').get(login)
router.route('/chat').get(chat)
router.route('/register').get(register)
router.route('/home').get(home)


module.exports = router