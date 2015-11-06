var Sequelize = require("sequelize");
var sequelize = require('../config');
var AuthOperation = sequelize.define('auth_operation', {
    op_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    access_url     : { type: Sequelize.STRING },
    section : { type: Sequelize.STRING  },
    user_id : { type: Sequelize.INTEGER },
    description : { type: Sequelize.STRING(1000)}
  },
  {
  createdAt : false,
  updatedAt : false,
  
  });


module.exports = AuthOperation;