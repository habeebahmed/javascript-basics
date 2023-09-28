const express = require('express');

const app = express.Router();

app.get('/getuser', (req, res) => {
  // Echo back the payload received
  res.send(req.body);
});

module.exports = app;
