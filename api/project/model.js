const db = require('../../data/dbConfig');

function findProject() {
    return db('projects')
}

async function addProject(project) {
    const [project_id] = await db('projects').insert(project);
    return findProject().where({project_id}).first()
}

module.exports = {
    findProject,
    addProject
}