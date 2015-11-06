var Sequelize = require("sequelize");
var sequelize = require('../config');
var UserPersonal = sequelize.define('user_personal', {
    user_personal_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    user_id : { type: Sequelize.INTEGER },
    gender     : { type: Sequelize.STRING },
    dob : { type: Sequelize.DATE },
    address : { type: Sequelize.STRING }
  },{
  createdAt : false,
  updatedAt : false,
  
});



module.exports = UserPersonal;
