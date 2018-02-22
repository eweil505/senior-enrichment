const router = require('express').Router()
const db = require('../../db')
const Campus = db.model('campuses')
const Student = db.model('students')

router.get('/', (req, res, next) => {
    Campus.findAll({
        include: Student
    })
    .then((campuses) => {
        res.json(campuses)
    })
    .catch(next)
})

router.get('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId, {include: Student})
    .then(campus => res.json(campus))
    .catch(next)
})

router.post('/newCampus', (req, res, next) => {
    Campus.create(req.body)
    .then(createdCampus => res.json(createdCampus))
    .catch(next)    
})

router.put('/:campusId', (req, res,  next) => {
    const id = req.params.campusId
    Campus.findById(id) 
        .then(campus => campus.update(req.body))
        .then(updatedCampus => Campus.findById(updatedCampus.id))
        .then(campus => res.status(202).send(campus))
        .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
    const campusId = req.params.campusId;

    Campus.destroy({
        where: {
            campusId
        }
    })
    .then(() => res.sendStatus(202))
    .catch(next)
})


module.exports = router;