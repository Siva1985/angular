var Sequelize = require("sequelize");
var sequelize = require('../config');
var B = sequelize.define('b', {
    b_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    a_id : { type: Sequelize.INTEGER },
    b_name : { type: Sequelize.STRING }
     },{
  createdAt : false,
  updatedAt : false,
  
});

module.exports = B;
