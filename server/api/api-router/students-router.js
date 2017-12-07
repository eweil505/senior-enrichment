const router = require('express').Router();
const db = require('../../db');
const Student = db.model('students');
const Campus = db.model('campuses');

router.get('/', (req, res, next) => {
    Student.findAll()
        .then((students) => {
            res.json(students)
        })
        .catch(next)
})

router.get('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId)
        .then(student => {res.json(student)})
        .catch(next)
})

router.post('/newStudent', (req, res, next) => {
    Student.create(req.body)
    .then(createdStudent => res.json(createdStudent))
    .catch(next)    
})

router.put('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId) 
    .then(student => {
        return student.update(req.body)
    })
    .then(updatedStudent => {
        res.json(updatedStudent)
    })
    .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
    const studentId = req.params.studentId
    console.log('studentId', studentId)
    Student.findById(+studentId)
    .then(student => {
        return student.destroy()
    })
    .then(() => {
        console.log(`deleted student ${studentId}`)
        res.redirect('/')
    })
    .catch(next);

})

module.exports = router;