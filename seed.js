const db = require('./server/db');
const Student = db.model('students');
const Campus = db.model('campuses');

const enrolledStudents = [
    {firstName: 'Sully', lastName: 'Sullivan', email: 'sully@monsters-u.edu', gpa: 3.8, campusId: 1},
    {firstName: 'Mike', lastName: 'Wazowski', email: 'mikew@monsters-u.edu', gpa: 3.9, campusId: 1},
    {firstName: 'Squishy', lastName: 'McSquishy', email: 'squishy@monsters-u.edu', gpa: 3.5, campusId: 2},
    {firstName: 'Randall', lastName: 'Boggs', email: 'rboggs@monsters-u.edu', gpa: 3.7, campusId: 1},
    {firstName: 'Johnny', lastName: 'Worthington', email: 'iamworthy@monsters-u.edu', gpa: 3.4, campusId: 2},
    {firstName: 'Claire', lastName: 'Wheeler', email: 'wheeley@monsters-u.edu', gpa: 4.0, campusId: 1}
]

const campuses = [
    {
        name: 'Main Campus',
        description: 'Welcome to our main campus! This is where we started, and our monsters have been in demand ever since.' 
    },
    {
        name: 'Auxillary Campus',
        description: 'We\'ve just started offering our state-of the art curriculum online. We welcome students from around the world to learn our scare tactics.'
    }
]


db.sync({force:true})
    .then(()=> {
        console.log('starting enrollement!')
        return Promise.all(campuses.map(c => Campus.create(c)))
    })
    .then((campusArray) => {
        return Promise.all(enrolledStudents.map(s => Student.create(s)))
    })
    .then((studentsArray) => {
        console.log('data committed');
        db.close()
    })
    .catch((error) => {
        console.log('oh no!')
        console.log(error.stack)
        db.close()
    })