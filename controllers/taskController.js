const Task = require('../models/task')

const getAllTasks =(req, res)=>{
    res.send('all items 1')
}

const getTask = (req, res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req, res)=>{ 
    res.json({id:req.params.id})
}

const createTask = async (req, res) => {
    res.json(req.body)
    // try {
    //     const task = await Task.create(req.body);
    //     res.status(201).json({task});
       
    // } catch (error) {
    //     res.status(400).json({ error: error.message });
    // }
} ;

const deleteTask = (req, res)=>{
    res.json({id:req.params.id})
}

module.exports = {getAllTasks,
    getTask, updateTask, deleteTask, createTask
}