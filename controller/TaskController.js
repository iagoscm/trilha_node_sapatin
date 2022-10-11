const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasksList = await Task.find();
        return res.render('index', {task: null, tasksList, taskDelete: null});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createTask = async (req, res) => {
    const task = req.body;

    if(!task) {
        return res.redirect("/")
    }

    try{
        await Task.create(task);
        return res.redirect("/");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const tasksList = await Task.find();
        if(req.params.method == "update") {
            const task = await Task.findOne({ _id: req.params.id});
            res.render("index", {task, tasksList, taskDelete: null});
        } else {
            const taskDelete = await Task.findOne({ _id: req.params.id});
            res.render("index", {task: null, tasksList, taskDelete});
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateTask = async (req, res) => {
    try{
        const task = req.body;
        await Task.updateOne({ _id: req.params.id },task);
        res.redirect("/");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteTask = async (req, res) => {
    try{
        await Task.deleteOne({ _id: req.params.id });
        res.redirect("/");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateTask,
    deleteTask,
};

