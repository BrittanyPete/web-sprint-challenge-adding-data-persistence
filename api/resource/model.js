const db = require('../../data/dbConfig');

function findResource() {
    return db('resource')
}

async function addResource(resource) {
    const [resource_id] = await db('resource')
    .insert(resource);
    return findResource().where({resource_id}).first()
}

module.exports = {
    findResource,
    addResource
}