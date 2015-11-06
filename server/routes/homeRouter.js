'use strict';
var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  res.render('dashboard', { baseUrl: 'http://localhost:9000/' });
});


router.post('/login', function(req, res) {
  
 var dmodel = 'user';

 var Model = require("../models/"+dmodel);

 Model.find({ where: {username: req.body.username,password: req.body.password} }).then(function (user) {
      res.end(JSON.stringify(user));

   });


});

module.exports = router;
