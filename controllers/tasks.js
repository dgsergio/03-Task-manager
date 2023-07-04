const Task = require('../models/tasks');
const asyncWrapper = require('../middlewere/async');
const { createCustomError } = require('../errors/custom-error');

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task)
    return next(createCustomError(404, `Task 'id: ${taskID}' not found.`));
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  await Task.create(req.body);
  res.status(201).json({ data: req.body });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const taskID = req.params.taskID;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task)
    return next(createCustomError(404, `Task 'id: ${taskID}' not found.`));
  res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const taskID = req.params.taskID;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task)
    return next(createCustomError(404, `Task 'id: ${taskID}' not found.`));
  res.status(200).json({ task });
});

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
