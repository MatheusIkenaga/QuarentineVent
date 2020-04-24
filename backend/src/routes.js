const express = require('express')
const postController = require('./controllers/postController')


const routes = express.Router();

routes.get('/api/post', postController.index)
routes.post('/api/post', postController.create)

module.exports = routes;