const Task = require("../models/task.model");

const createTask = async (req, res, next) => {
  try {
    const { title, userId } = req.body;

    const task = await Task.createTask({
      title,
      userId
    });

    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.getTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTask,
  getTasks
};
