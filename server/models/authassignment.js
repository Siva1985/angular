var Sequelize = require("sequelize");
var sequelize = require('../config');
var AuthAssignment = sequelize.define('auth_assignment', {
    asgn_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    role_id : { type: Sequelize.INTEGER },
    user_id : { type: Sequelize.INTEGER },
    description : { type: Sequelize.STRING(1000)}
  },
  {
  createdAt : false,
  updatedAt : false,
  
  });


module.exports = AuthAssignment;