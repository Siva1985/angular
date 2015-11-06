
'use strict';

var express = require('express');
var router = express.Router();
//var cron = require('../../ReminderCron');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { baseUrl: 'http:localhost:9000' });
});

/* Experiment */

/*var CronJob = require('cron').CronJob;
// will run every day at 10 am 
var job = new CronJob('* * * * * 0-6', function() {
  //cron.processData();
  }, function () {
  console.log('Cron Stopped');
  },
  true, 
  'Asia/Calcutta'
);*/

module.exports = router;

