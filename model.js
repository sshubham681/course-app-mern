const mongoose = require('mongoose')

const Todo = new mongoose.Schema({
  title: String,
  done: Boolean,
})

const TodoModel = mongoose.model('todo', Todo)

module.exports = {
  TodoModel
}