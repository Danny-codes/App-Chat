const Sequelize = require('sequelize')
const {connection } = require('../database/db')

const User = connection.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false,
        min:{
            args:[6],
            msg: 'Password must have more than 5 characters'
        }
    },
    bio:{
        type: Sequelize.TEXT,
        allowNull: true,
        validate:{
            len:[0, 255]
        }
    },
    deleted:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

User.sync({force: false})

module.exports = User