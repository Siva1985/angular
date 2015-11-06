var Sequelize = require("sequelize");
var sequelize = require('../config');
var AuthRole = sequelize.define('auth_roles', {
    role_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    role_name : { type: Sequelize.STRING },
    description : { type: Sequelize.STRING(1000)}
  },
  {
  createdAt : false,
  updatedAt : false,
  
  });


module.exports = AuthRole;