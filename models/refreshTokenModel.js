const Sequelize = require('sequelize')
const {connection } = require('../database/db')

const RefreshToken = connection.define('RefreshToken',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    expiresIn:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
            model: 'users',
            key: 'id'
          }
    }
 
})

RefreshToken.sync({force: false})

module.exports = RefreshToken