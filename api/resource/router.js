const router = require('express').Router();
const Resource = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const resource = await Resource.findResource()
        res.status(200).json(resource)
    }
    catch(err) {
        next()
    }
})

router.post('/', (req, res, next) => {
    Resource.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

module.exports = router;