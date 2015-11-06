var Sequelize = require("sequelize");
var sequelize = require('../config');
var User = sequelize.define('user', {
    user_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    username     : { type: Sequelize.STRING },
    password : { type: Sequelize.STRING },
    email : { type: Sequelize.STRING },
    user_type : { type: Sequelize.INTEGER },
    user_status : { type: Sequelize.INTEGER }
  },{
  createdAt : false,
  updatedAt : false,
  
});



module.exports = User;
