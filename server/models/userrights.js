var Sequelize = require("sequelize");
var sequelize = require('../config');
var UserRight = sequelize.define('user_right', {
    user_right_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    user_id : { type: Sequelize.STRING },
    item     : { type: Sequelize.STRING },
    access : { type: Sequelize.STRING }
  },{
  createdAt : false,
  updatedAt : false,
  
});



module.exports = UserRight;
