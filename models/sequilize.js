const Sequilize = require("sequelize")

const { DB_NAME,DB_HOST,DB_PORT,DB_PASS,DB_USER } = process.env

const sequilize = new Sequilize(DB_NAME,DB_USER,DB_PASS,{
    host: DB_HOST,
    port: parseInt(DB_PORT,10),
    dialect: 'postgres'
})

module.exports = sequilize