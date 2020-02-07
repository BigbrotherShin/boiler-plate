const express = require('express');
const app = express();
const port = 5000;

require('dotenv').config();

const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@bigtube-b1j5o.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('MongoDB Connected,,,'))
  .catch(e => console.log(e));

app.get('/', (req, res) => res.send('Hello World! 안녕하십니까'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
