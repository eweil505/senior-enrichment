const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/monsters-u', {logging: false})

module.exports = db