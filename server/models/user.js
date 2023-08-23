const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    minlength: 3,
    maxlength: 25,
  },
  email: {
    type: String,
    required: [true, 'Please provide email.'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email address.',
    ],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide a password.'],
    minlength: 6,
    maxlength: 12,
  },
});

module.exports = mongoose.model('User', UserSchema);