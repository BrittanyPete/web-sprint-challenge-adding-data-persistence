const db = require('../../data/dbConfig');

function findResource() {
    return db('resource')
}

function findById(resource_id) {
    return db('resource')
        .where({ resource_id: Number(resource_id)})
        .first()
}

function addResource(resource) {
    return db('resource')
    .insert(resource)
    .then(resource_id => {
        return findById(resource_id[0])
    })
}

module.exports = {
    findResource,
    findById,
    addResource
}