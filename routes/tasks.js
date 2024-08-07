const express = require('express')
const router = express.Router()
const { 
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask } = require('../controllers/taskController')

router.route('/').get(getAllTasks).get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router