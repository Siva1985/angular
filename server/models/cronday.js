var Sequelize = require("sequelize");
var sequelize = require('../config');
var CronDay = sequelize.define('cronday', {
    cron_day_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    user_id     : { type: Sequelize.INTEGER },
    remin_date : { type: Sequelize.INTEGER },
    cmnts : { type: Sequelize.STRING(1000)}
  },
  {
  createdAt : false,
  updatedAt : false,
  
  });


module.exports = CronDay;