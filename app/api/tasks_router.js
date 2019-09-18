var express = require('express')
var tasksRouter = express.Router()


// define the home page route
tasksRouter.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
tasksRouter.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports.tasksRouter = tasksRouter