var Sequelize = require("sequelize");
var sequelize = require('../config');
var Leave = sequelize.define('leave', {
    leave_id : { type: Sequelize.INTEGER , primaryKey: true ,  autoIncrement: true},
    user_id : { type: Sequelize.DATE },
    start_date : { type: Sequelize.DATE },
    end_date     : { type: Sequelize.STRING },
    reason : { type: Sequelize.STRING },
    leave_status : { type: Sequelize.INTEGER }
  },{
  createdAt : false,
  updatedAt : false,
  
});



module.exports = Leave;
