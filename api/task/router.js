const router = require('express').Router();
const Tasks = require('./model');

router.get('/', (req, res, next) => {
    const editedTask = [];
    Tasks.findTask()
        .then(tasks => {
            tasks.forEach(task => {
                if(task.task_completed === 0) {
                    editedTask.push({
                        ...task,
                        task_completed: false
                    })
                } else {
                    editedTask.push({
                        ...task,
                        task_completed: true
                    })
                }
            })
            res.status(200).json(editedTask);
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.addTask(req.body)
        .then(newTask => {
            if(newTask.task_completed === 0) {
                res.status(201).json({
                    ...newTask,
                    task_completed: false
                })
            } else {
                res.status(201).json({
                    ...newTask,
                    task_completed: true
                })
            }
        })
        .catch(next)
})

module.exports = router;

