var Cron = {

	getModel : function()
	{
		  var sequelize = require('./server/config');
		  var Sequelize = require("sequelize");  
		  sequelize.sync();
		  return Model = require("./server/models/domain");
	},
	processData : function()
	{
		
		var sequelize = require('./server/config');
		sequelize.query('SELECT dom_name FROM `domains` WHERE `exp_date` <= date_add("2015-10-10", INTERVAL 3 DAY)').then(function(data){
		   console.log(JSON.stringify(data));
		})
	}
}

module.exports = Cron;