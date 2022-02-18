const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res, next) => {
    Resource.findResource()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const data = req.body;
    Resource.addResource(data)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(next)
})

module.exports = router;
