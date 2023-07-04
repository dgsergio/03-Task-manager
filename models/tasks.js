const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model('Task', taskSchema);
