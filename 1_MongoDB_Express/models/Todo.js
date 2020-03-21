const {Schema, model} = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
  // id задается автоматом
});

module.exports = model('Todo', schema);
