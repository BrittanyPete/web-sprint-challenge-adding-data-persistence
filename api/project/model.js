const db = require('../../data/dbConfig');

function findProject() {
    return db('projects')
}

function findById(project_id) {
    return db('projects')
        .where({ project_id: Number(project_id)})
        .first()
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(project_id => {
        return findById(project_id[0])
    })
}

module.exports = {
    findProject,
    addProject
}