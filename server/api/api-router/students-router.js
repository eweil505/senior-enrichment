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
    const id = req.params.studentId
    Student.findById(id) 
    .then(student => student.update(req.body))
    .then(updatedStudent => Student.findById(updatedStudent.id))
    .then(student => res.status(202).send(student))
    .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
	const id = req.params.studentId
	Student.destroy({
		where: {
			id
		}
	})
		.then(() => res.sendStatus(202))
		.catch(next)
})

module.exports = router;