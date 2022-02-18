const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
    const editedProj = [];
    Project.findProject()
    .then(projects => {
        projects.forEach(project => {
            if(project.project_completed === 0) {
                editedProj.push({
                    ...project,
                    project_completed: false
                })
            } else {
                editedProj.push({
                    ...project,
                    project_completed: true
                })
            }
        })
        res.status(200).json(editedProj);
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const projData = req.body;
    Project.addProject(projData)
        .then(newProj => {
            if(newProj.project_completed === 0) {
                res.status(201).json({
                    ...newProj,
                    project_completed: false
                })
            } else {
                res.status(201).json({
                    ...newProj,
                    project_completed: true
                })
            }
        })
        .catch(next)
})

module.exports = router;
