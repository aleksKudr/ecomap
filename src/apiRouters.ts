import bodyParser from 'body-parser'
import express from 'express'
import Point from './mongoose/point-model'
const apiRouters = express.Router()

apiRouters.get('/point', async function (req,res) {
    const point = await Point.find({});
    res.send(point)
})

apiRouters.post('/point', bodyParser.json(), async function (req,res) {
    const newPoint = await Point.create(req.body);
    res.send(newPoint);
})


export default apiRouters