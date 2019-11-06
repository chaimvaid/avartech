var express = require('express')
var usersRouter = express.Router()


usersRouter.post('/', function (req, res) {
  res.send('success')
})

module.exports.usersRouter = usersRouter;