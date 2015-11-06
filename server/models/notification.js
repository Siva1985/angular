var Sequelize = require("sequelize");
var sequelize = require('../config');
var Domain = sequelize.define('notification', {
    notify_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    user_id     : { type: Sequelize.INTEGER },
    disp_date : { type: Sequelize.DATE , validate: { isDate: {  msg : "Please Enter Valid Date" } }  },
    message : { type: Sequelize.STRING(1000)}
  },
  {
  createdAt : false,
  updatedAt : false,
  
  });


module.exports = Domain;