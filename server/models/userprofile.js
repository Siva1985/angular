var Sequelize = require("sequelize");
var sequelize = require('../config');
var UserProfile = sequelize.define('user_profile', {
    user_profile_id : { type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
    userid : { type: Sequelize.INTEGER },
    user_fullname     : { type: Sequelize.STRING },
    designation : { type: Sequelize.INTEGER },
    photo : { type: Sequelize.STRING },
    do_join : { type: Sequelize.DATE },
    email : { type: Sequelize.STRING }
  },{
  createdAt : false,
  updatedAt : false,
  
});


module.exports = UserProfile;