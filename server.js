const app = require('./app')
const port = 3000
const { db } = require('./app/models');

// db.sync().then( () => console.log("DB synced!")); 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))