import express from 'express';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// const startup = require('./routes/startup');
import { startup, device_info, user, fedexAPI, alive } from './routes/index.js';
// import { alive } from './routes/index.js';
import createAxiosInstance from './axiosInstance.js';

const app = express();

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

const server = https.createServer(httpsOptions, app);

const axiosInstance = createAxiosInstance({
  // any specific config for this instance
});

app.use(express.json());
app.use('/', startup);
app.use('/alive', alive);
app.use('/device_info', device_info);
app.use('/user', user);
app.use('/fedex', fedexAPI(axiosInstance));

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

app.use('/device-info', device_info);

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
