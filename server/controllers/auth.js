const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  res.json(req.body);
};

const login = async (req, res) => {
  res.send('Login user.');
};

module.exports = { register, login };
