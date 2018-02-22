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
    Campus.findById(req.params.campusId) 
    .then(campus => {
        return campus.update(req.body)
    })
    .then(updatedCampus => {
        res.status(204).json(updatedCampus)
    })
    .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
    const campusId = req.params.campusId;

    Campus.findById(campusId)
    .then(campus => {
        return campus.destroy()
    })
    .then(() => {
        console.log(`deleted campus ${campusId}`)
        res.status(202).redirect('/')
    })
    .catch(next)
})


module.exports = router;