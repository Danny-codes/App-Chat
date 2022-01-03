const express = require('express')
const router =  express.Router()

const 
{login, chat, register }
 = require('../controllers/adress')

router.route('/login').get(login)
router.route('/chat').get(chat)
router.route('/register').get(register)



module.exports = router