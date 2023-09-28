const express = require('express');
const https = require('https');
const fs = require('fs');
// const startup = require('./routes/startup');
const { alive, startup, device_info, user } = require('./routes');

const app = express();

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

const server = https.createServer(httpsOptions, app);

app.use(express.json());
app.use('/', startup);
app.use('/alive', alive);
app.use('/device_info', device_info);
app.use('user', user);

// GET Route with custom headers

app.get('/set-header', (req, res) => {
  // Set custom response headers

  res.setHeader('Content-Type', 'application/json');

  res.setHeader('Custom-Header', 'Hello from GET route');

  // Send a JSON response

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

app.use('/device-info');

app.get('/user-address', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
  res.send({ ip });
});

app.get('/test/:id', (req, res) => {
  const params = req.params.id;

  res.send(params);
});

app.post('/student', (req, res) => {
  const studentName = req.body.studentName;

  res.send({ studentName });
});

server.listen(3000, () => {
  console.log('Server listening on 3000');
});
