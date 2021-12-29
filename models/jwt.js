const jwt = require('jsonwebtoken')

const sign = payload => jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: '30d'})
const verify = token => jwt.verify(token, process.env.JWT_SECRET)

module.exports = { sign, verify}