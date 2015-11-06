var Sequelize = require("sequelize");
var sequelize = require('../config');
var A = sequelize.define('a', {
    a_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    a_name : { type: Sequelize.STRING }
     },{
  createdAt : false,
  updatedAt : false,
  
});

module.exports = A;
