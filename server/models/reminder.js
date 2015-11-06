var Sequelize = require("sequelize");
var sequelize = require('../config');
var Reminder = sequelize.define('reminder', {
    remin_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true },
    dom_id : { type: Sequelize.INTEGER },
    date_send : { type: Sequelize.DATE },
    emails : { type: Sequelize.STRING(1000)}
  },
  {
  createdAt : false,
  updatedAt : false,
  
  });


module.exports = Reminder;