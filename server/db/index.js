'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const Student = require('./models/Student.js');
const Campus = require('./models/Campus.js');
const db = require('./db.js');

Student.belongsTo(Campus) //student belongs to one campus 
Campus.hasMany(Student) //campus has many students, may have none

module.exports = db