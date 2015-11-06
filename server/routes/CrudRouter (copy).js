'use strict';
var express = require('express');
var router = express.Router();


function getModel(modelName)
{
  var sequelize = require('../config');
  var Sequelize = require("sequelize");  
  sequelize.sync();
  var Model = require("../models/"+modelName);
  return Model;
}


router.post('/getall', function(req, res) {
  
 var modelName = req.body.model;

 var Model = getModel(modelName); 

 Model.all().then(function (data) {
       res.end(JSON.stringify(data));
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

 var modelName = req.body.model;

 var Model = getModel(modelName); 

     Model.create(data).then(function(model) {
      res.end(JSON.stringify(model));

    }).catch(function(error) {
     res.end(JSON.stringify(error));
  });

    
});

router.post('/update', function(req, res) {
  
 var data = req.body;

 var modelName = req.body.model;

 var Model = getModel(modelName); 

 var condtn = req.body.condtn;

 Model.find({ where:condtn}).then(function(model) {
  if (model) { 
    model.updateAttributes(data).then(function(){
      res.end('Saved');
    }).catch(function(error) {
     res.end(JSON.stringify(error));
  });
    
  }
}) 

});


router.post('/delete', function(req, res) {
  
 var data = req.body;

 var modelName = req.body.model;

 var Model = getModel(modelName);

 var condtn = req.body.condtn; 

 Model.find({ where:condtn}).then(function(model) {
  model.destroy().then(function() {
    res.end('Deleted');
  })
})


});



module.exports = router;
