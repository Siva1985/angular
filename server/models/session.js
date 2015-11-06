var Sequelize = require("sequelize");
var sequelize = require('../config');
var Session = sequelize.define('session', {
    session_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    user_id : { type: Sequelize.INTEGER },
    log_start     : { type: Sequelize.DATE },
    log_end : { type: Sequelize.DATE },
    ip : { type: Sequelize.INTEGER },
    status : { type: Sequelize.INTEGER }
  },{
  createdAt : false,
  updatedAt : false,
  
});



module.exports = Session;
