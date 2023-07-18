const express = require('express');
const cors = require('cors');
const app = express();
const todos = require('./routes/todos.routes');
const connectDB = require('./database/connect');
require('dotenv').config();

const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/v1/todos', todos);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('Server started at http://localhost:3001');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
