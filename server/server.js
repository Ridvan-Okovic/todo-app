const express = require('express');
const cors = require('cors');
const app = express();
const todos = require('./routes/todos.routes');
const auth = require('./routes/auth.routes');
const connectDB = require('./database/connect');
const authenticateUser = require('./middleware/authentication');
require('dotenv').config();

const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', auth);
app.use('/api/v1/todos', authenticateUser, todos);

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
