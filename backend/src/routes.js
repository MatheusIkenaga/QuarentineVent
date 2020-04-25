const express = require('express')
const postController = require('./controllers/postController')
const loginController = require('./controllers/loginController')


const routes = express.Router();

routes.get('/api/post', postController.index)
routes.post('/api/post', postController.create)

routes.post('/api/createLogin', loginController.create)
routes.post('/api/checkLogin', loginController.check)

module.exports = routes;