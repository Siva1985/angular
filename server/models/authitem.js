var Sequelize = require("sequelize");
var sequelize = require('../config');
var AuthItems = sequelize.define('auth_items', {
    item_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    role_id : { type: Sequelize.INTEGER  },
    access_url : { type: Sequelize.STRING  },
    section : { type: Sequelize.STRING },
    description : { type: Sequelize.STRING(1000)}
  },
  {
  createdAt : false,
  updatedAt : false,
  
  });


module.exports = AuthItems;