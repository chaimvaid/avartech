const db = require("./db");
const Sequelize = require('sequelize');



const Model = Sequelize.Model;
class User extends Model {}
User.init({
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING
  }
}, {
  sequelize: db,
  
});

module.exports = User;