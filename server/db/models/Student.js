const Sequelize = require('sequelize');
const db = require('../db.js')

const Student = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true,
        allowNull: false
    },
    gpa: {
        // type: Sequelize.STRING,
        type: Sequelize.FLOAT, //FLOAT(M,D) => Values can be stored with up to M
        //digits in total, of which D digits may be after the decimal point
        validate: {
            min: 0.0,
            max: 4.0
        }
    },

    name: {
        type: Sequelize.STRING,
        get() {
            return this.firstName + " " + this.lastName        
        }
    }
})


module.exports = Student;