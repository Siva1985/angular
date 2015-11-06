'use strict';
var express = require('express');
var router = express.Router();
var sequelize = require('../config');
var User = require("../models/user");
var Sequelize = require("sequelize");  
sequelize.sync();



router.get('/getCourses', function(req, res, next) {
  
 /*var newCourse={
        course_id :3,
    course_name :'stat',
    seg_id     : 3,
    school_rule_id : 4,
    school_tim_id :5,
    course_status :6
    }
    Course.create(newCourse);*/

 

User.all().then(function (courses) {
       res.end(JSON.stringify(courses));
    });


});

router.post('/login', function(req, res) {
  
 var dmodel = 'user';

 var Model = require("../models/"+dmodel);

 Model.find({ where: {username: req.body.username,password: req.body.password} }).then(function (user) {
      res.end(JSON.stringify(user));

   });


});


router.post('/getall', function(req, res) {
  
 var dmodel = req.body.model;

 var Model = require("../models/"+dmodel);

 Model.all().then(function (desgs) {
       res.end(JSON.stringify(desgs));
    });


});

router.post('/getbyscope', function(req, res) {
  
 var dmodel = req.body.model;

 var Model = require("../models/"+dmodel);

 var fetched = Model.scope('segfilter').findAll();

 res.end(JSON.stringify(fetched));

});

router.post('/save', function(req, res) {
  
 var data = req.body;

 var Model = require("../models/"+req.body.model);

 Model.create(data);


});


router.post('/update', function(req, res) {
  
 var data = req.body;

 var Model = require("../models/"+req.body.model);

 Model.find({ where: {user_id: req.body.user_id} }).then(function(model) {
  if (model) { 
    model.updateAttributes(data);
  }
})


});


router.post('/delete', function(req, res) {
  
 var data = req.body;

 var Model = require("../models/"+req.body.model);

 Model.create(data);

 Model.find({ where: {user_id: req.body.user_id} }).then(function(model) {
  model.destroy().then(function() {
    res.end('Deleted');
  })
})


});



// router.get('/fetchStudentMaster/:cbatchid', function(req, res, next) {
  


//    sequelize.query('SELECT * FROM dummyschool.course_batch').then(function(projects){
//   res.end(JSON.stringify(projects));
// })

// });


module.exports = router;
