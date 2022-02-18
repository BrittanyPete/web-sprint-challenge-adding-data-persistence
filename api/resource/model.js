const db = require('../../data/dbConfig');

function findResource() {
    return db('resources')
}

async function addResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return findResource().where({resource_id}).first()
}

module.exports = {
    findResource,
    addResource
}