const Task = require("../models/task.model");

const createTask = async (req, res) => {
  try {
    const task = await Task.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTask,
  getTasks
};
