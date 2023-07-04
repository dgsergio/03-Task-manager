const Task = require('../models/tasks');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
    console.log(err);
  }
};

const getTask = async (req, res) => {
  const taskID = req.params.taskID;
  try {
    const task = await Task.findOne({ _id: taskID });
    if (!task)
      return res.status(404).json({ msg: `Task 'id: ${taskID}' not found.` });
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
    console.log(err);
  }
};

const createTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(201).json({ data: req.body });
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
    console.log(err);
  }
};

const updateTask = async (req, res) => {
  const taskID = req.params.taskID;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task)
      return res.status(404).json({ msg: `Task 'id: ${taskID}' not found.` });
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
  }
};

const deleteTask = async (req, res) => {
  const taskID = req.params.taskID;
  try {
    const task = await Task.findByIdAndDelete({ _id: taskID });
    if (!task)
      return res.status(404).json({ msg: `Task 'id: ${taskID}' not found.` });
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
  }
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
