var express = require('express')
var usersRouter = express.Router()
const path = require('path')
const db = require(path.join('../../models'))
const User = db.User;

usersRouter.post('/', (req, res) => {
  User.create(req.body).then((user) => {
      res.send(user)
  } ).catch(e=>console.log(e))  
})

module.exports.usersRouter = usersRouter;