import express from 'express';

export const device_info = express.Router();

device_info.get('/', (req, res) => {
    const user_agent = req.header('User-Agent');
  
    res.send({ user_agent });
  });
device_info.get('/get-device', (req, res) => {
    const userAgent = req.header('User-Agent').toLowerCase();

    const isWindows = userAgent.includes('windows');
    const isMac = userAgent.includes('mac');
    const isLinux = userAgent.includes('linux');
    const isPostman = userAgent.includes('postmanruntime');
  
    const deviceInfo = {
      isWindows,
      isMac,
      isLinux,
      postmanRunTime: isPostman,
    };
  
    res.send(deviceInfo);
  });
  