const express = require('express')
const postController = require('./controllers/postController')
const loginController = require('./controllers/loginController')
const commentController = require('./controllers/commentController')



const routes = express.Router();

routes.get('/api/post', postController.index)
routes.post('/api/post', postController.create)
routes.get('/api/postFull', postController.indexFull)

routes.post('/api/post/comment', commentController.create)
routes.post('/api/post/comment/', commentController.getComments)

routes.post('/api/createLogin', loginController.create)
routes.post('/api/checkLogin', loginController.check)



module.exports = routes;