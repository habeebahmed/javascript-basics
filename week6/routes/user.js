import express from 'express';
import { getUserZipCode } from '../controller/index.js';

export const user = express.Router();

user.get('/getuser', (req, res) => {
  // Echo back the payload received
  res.send(req.body);
});

user.get('/user-address', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
  try {
    if (ip) {
      const location = await getUserZipCode(ip);
      res.send({ location: location?.data });
    } else {
      throw new Error('No IP');
    }
  } catch (err) {
    res.send({ error: err.message });
  }
});
