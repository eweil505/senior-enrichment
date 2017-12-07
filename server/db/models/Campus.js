const Sequelize = require('sequelize');
const db = require('../db.js');

const Campus = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'http://i64.tinypic.com/dqpugl.jpg'
    },
    description: Sequelize.TEXT
})

module.exports = Campus;