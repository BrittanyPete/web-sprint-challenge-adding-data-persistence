const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
    Project.findProject()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const projData = req.body;
    Project.addProject(projData)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(next)
})

module.exports = router;
