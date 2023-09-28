const express = require('express');

const app = express.Router();

app.get('/alive', (req, res) => {
  res.json({
    status: 200,
    msg: 'Hello world',
    data: {
      title: 'User Data',
      users: [
        {
          id: 1,
          name: 'Alice',
          email: 'alice@email.com',
          age: 30,
        },
        {
          id: 2,
          name: 'Bob',
          email: 'bob@email.com',
          age: 25,
        },
      ],
    },
  });
});


module.exports = app;
