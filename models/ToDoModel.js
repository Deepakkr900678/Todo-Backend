const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    text: { type: String, require: true }
}, { versionKey: false })

const ToDoModel = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDoModel;