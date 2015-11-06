var Sequelize = require("sequelize");
var sequelize = require('../config');
var ReminderDetails = sequelize.define('reminder_details', {
    rem_det_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    dom_id  : { type: Sequelize.INTEGER },
    start_date : { type: Sequelize.DATE },
    date_send : { type: Sequelize.DATE },
    email : { type: Sequelize.STRING }
  },{
  createdAt : false,
  updatedAt : false,
  
});


module.exports = ReminderDetails;