var Sequelize = require("sequelize");
var sequelize = require('../config');
var Domain = sequelize.define('domain', {
    dom_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    dom_name     : { type: Sequelize.STRING , validate: { isUrl: {  msg : "Please Enter Valid URL" } } },
    start_date : { type: Sequelize.DATE , validate: { isDate: {  msg : "Please Enter Valid Date" } }  },
    exp_date : { type: Sequelize.DATE , validate: { isDate: {  msg : "Please Enter Valid Date" } }  },
    remainder_emails : { type: Sequelize.STRING(1000)}
  },
  {
  createdAt : false,
  updatedAt : false,
  
  });


module.exports = Domain;