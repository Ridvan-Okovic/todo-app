const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, 'Name can not exceed 20 characters.'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide a user.'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);
