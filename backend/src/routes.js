const express = require('express')
const testController = require('./controllers/testController')


const routes = express.Router();

routes.get('/api/test', testController.index)

module.exports = routes;