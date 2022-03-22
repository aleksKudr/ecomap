import express from 'express'
import apiRouters from './apiRouters'
import viewRouters from './viewRouter'
const routers = express.Router()

// middleware that is specific to this router
routers.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
routers.use('/', viewRouters)
routers.use('/api/v1', apiRouters)

export default routers