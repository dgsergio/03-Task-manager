const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middlewere/not-found');
const errorHandler = require('./middlewere/error-handler');
require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    app.listen(port, () => {
      console.log(`Server listening at port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
