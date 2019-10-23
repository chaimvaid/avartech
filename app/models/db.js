const Sequelize = require('sequelize');


const db = new Sequelize('avarthech', 'homestead', 'secret', {
  host: '192.168.10.10',
  dialect:  'mysql'
});

module.exports = db;
