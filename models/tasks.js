const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: String,
  completed: Boolean,
});

module.exports = TaskSchema; //nop
