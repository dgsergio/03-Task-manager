const Task = require('../models/tasks');

const getTasks = (req, res) => {
  res.json({ success: true });
};

const getTask = (req, res) => {
  res.json({ success: true, msg: `get task ${req.params.taskID}` });
};

const createTask = (req, res) => {
  console.log(req.body);
  res.json({ success: true, msg: 'post a new task' });
};

const updateTask = (req, res) => {
  res.json({ success: true, msg: `patch task ${req.params.taskID}` });
};

const deleteTask = (req, res) => {
  res.json({ success: true, msg: `delete task ${req.params.taskID}` });
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
