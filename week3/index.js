const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

const server = https.createServer(httpsOptions, app);

app.get('/', (req, res) => {
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

// Create a Get request for /live and send if its live Eg: '/live' and send the response of 'Web Service is live'
app.get('/live', (req, res) => {
  res.json({
    status: 200,
    msg: 'Web Service is live',
    data: {
      title: 'Server metrics',
      data: {
        serverMetrics: {
          timestamp: '2023-09-07T12:34:56Z',
          cpu: {
            totalUsage: '20%',
            userSpaceUsage: '10%',
            kernelSpaceUsage: '5%',
            idle: '65%',
          },
          memory: {
            total: '16GB',
            used: '5GB',
            free: '11GB',
            swapTotal: '4GB',
            swapUsed: '1GB',
          },
          disk: [
            {
              mountPoint: '/',
              total: '100GB',
              used: '40GB',
              free: '60GB',
            },
            {
              mountPoint: '/data',
              total: '200GB',
              used: '120GB',
              free: '80GB',
            },
          ],
          network: {
            incomingBytes: 1024,
            outgoingBytes: 2048,
            activeConnections: 50,
          },
          processes: {
            total: 120,
            running: 80,
            sleeping: 35,
            zombie: 5,
          },
        },
      },
    },
  });
});

// Create a Get Request for /startup and send if it has started
app.get('/startup', (req, res) => {
  res.json({
    status: 200,
    msg: 'Server started successfully',
    data: {
      title: 'Server Startup metrics',
      serverConfig: {
        environment: 'production',
        port: 8080,
        host: '0.0.0.0',
        logging: {
          level: 'info',
          format: 'json',
        },
        database: {
          type: 'mongodb',
          connectionString: 'mongodb://localhost:27017/myDatabase',
          poolSize: 10,
        },
        cache: {
          enabled: true,
          type: 'redis',
          host: 'localhost',
          port: 6379,
        },
        security: {
          cors: {
            enabled: true,
            origin: '*',
          },
          rateLimit: {
            enabled: true,
            maxRequests: 100,
            timeWindow: '1 minute',
          },
        },
        features: {
          authentication: true,
          realTimeUpdates: false,
        },
      },
    },
  });
});

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

server.listen(3000, () => {
  console.log('Server listening on 3000');
});
