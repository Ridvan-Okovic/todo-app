const { StatusCodes } = require('http-status-codes');
const Todo = require('../models/todo');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ createdBy: req.user.userId }).sort(
      'createdAt'
    );
    res.status(StatusCodes.OK).json({ success: true, todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTodo = async (req, res) => {
  try {
    const {
      user: { userId },
    } = req;
    const { id: todoID } = req.params;
    const todo = await Todo.findOne({ _id: todoID, createdBy: userId });
    if (!todo) {
      throw new NotFoundError(`There is no todo with such id: ${todoID}`);
    }
    res.status(StatusCodes.OK).json({ success: true, todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const todo = await Todo.create(req.body);
    res.status(StatusCodes.CREATED).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const {
      user: { userId },
    } = req;
    const { id: todoID } = req.params;
    const todo = await Todo.findByIdAndDelete({
      _id: todoID,
      createdBy: userId,
    });
    if (!todo) {
      throw new NotFoundError(`There is no todo with such id: ${todoID}`);
    }
    res.status(StatusCodes.OK).json({ success: true, todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const { id: todoID } = req.params;
    const todo = await Todo.findByIdAndUpdate(todoID, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      throw new NotFoundError(`There is no todo with such id: ${todoID}`);
    }
    res.status(StatusCodes.OK).json({ success: true, todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTodos, createTodo, getTodo, updateTodo, deleteTodo };
