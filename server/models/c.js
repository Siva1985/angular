var Sequelize = require("sequelize");
var sequelize = require('../config');
var C = sequelize.define('c', {
    c_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    b_id : { type: Sequelize.INTEGER },
    c_name : { type: Sequelize.STRING }
     },{
  createdAt : false,
  updatedAt : false,
  
});

module.exports = C;
