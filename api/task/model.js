const db = require('../../data/dbConfig');

function findTask() {
    return db('tasks')
}