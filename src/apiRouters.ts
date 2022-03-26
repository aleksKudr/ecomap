import bodyParser from 'body-parser';
import express from 'express';
import Point from './mongoose/point-model';
import fs from 'fs';
import path from 'path';
const apiRouters = express.Router();

apiRouters.get('/point', async function (req, res) {
  const point = await Point.find({});
  res.send(point);
});

apiRouters.post('/point', bodyParser.json(), async function (req, res) {
  const newPoint = await Point.create(req.body);
  res.send(newPoint);
});

apiRouters.post('/model', bodyParser.json(), async function (req, res) {
  fs.writeFile(path.join(__dirname, '../public/ecopoint/results.json'), JSON.stringify(req.body), err => {
    if (err) {
      return res.status(500).send();
    }
    res.status(200).send();
  });
});

export default apiRouters;
