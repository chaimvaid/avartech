const express = require('express')
const app = express()
const port = 3000
const tasksRouter = require('./app/api/tasks_router').tasksRouter;

app.use('/tasks', tasksRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

