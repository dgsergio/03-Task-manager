const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', taskSchema);
