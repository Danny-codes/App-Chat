const Sequelize = require('sequelize')
require('dotenv').config()

const connection = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USERNAME, 
        process.env.DB_PASS, 
        {host: process.env.DB_HOST, dialect: 'postgres'}
    )

const DB = (req,res) => {
    return connection
    .authenticate()
    .then(() => {
        console.log('Conexão estabelecida ')
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = {connection, DB};