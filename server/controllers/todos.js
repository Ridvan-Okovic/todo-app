const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ success: true, todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findOne({ _id: todoID });
    if (!todo) {
      return res.status(404).json({
        msg: `There is no todo with such id: ${todoID}`,
      });
    }
    res.status(200).json({ success: true, todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findByIdAndDelete(todoID);
    if (!todo) {
      return res.status(404).json({
        msg: `There is no todo with such id: ${todoID}`,
      });
    }
    res.status(200).json({ success: true, todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findByIdAndUpdate(todoID, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({
        msg: `There is no todo with such id: ${todoID}`,
      });
    }
    res.status(200).json({ success: true, todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTodos, createTodo, getTodo, updateTodo, deleteTodo };
