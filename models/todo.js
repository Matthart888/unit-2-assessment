const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Schema
const todoSchema = new Schema({
    name:  { type: String, required: true },
    complete: { type: Boolean, default: false}
});

// Create Model of our Schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;