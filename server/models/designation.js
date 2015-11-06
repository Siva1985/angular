var Sequelize = require("sequelize");
var sequelize = require('../config');
var Desg = sequelize.define('designation', {
    desg_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    desg_name : { type: Sequelize.STRING}
     },{
  createdAt : false,
  updatedAt : false,
  scopes: {
    owners: {
      where: {
        desg_id: [2,3]
      }
    },
    staff: {
      where: {
        desg_id: [6,7,8,9,10,11,12,13,14,15]
      }
    }
  },
});

module.exports = Desg;
