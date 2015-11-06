'use strict';
var express = require('express');
var router = express.Router();
var sequelize = require('../config');
var Sequelize = require("sequelize");  
var http      = require('http');

function getModel(modelName)
{
  var sequelize = require('../config');
  var Sequelize = require("sequelize");  
  sequelize.sync();
  var Model = require("../models/"+modelName);
  return Model;
}

function getPrimaryKey(Model)
{

 var props = Model.primaryKeys;
 return Object.keys(props)[0];

}


router.post('/fetch', function(req, res) {
  
 var data        = req.body;

 var Model       = getModel(data.model); 

 var condition   = data.condition;

 var offset      = (data.offset) ? data.offset : 0 ;
 var limit       = (data.limit) ? data.limit : 100 ;
 var attributes  = data.columns;
 var scopes      = (data.scopes) ? data.scopes : [];

 Model.scope(scopes).findAndCountAll( { offset: offset, limit: limit, attributes:attributes , where:condition } ).then(function(data){
                                                        res.end(JSON.stringify({total:data.count,datas:data.rows}));
                                                      },
                                        function(error){
                                                        res.end(JSON.stringify(error));
                                                      });

});


router.post('/save', function(req, res) {
  
 var data = req.body;

 var Model = getModel(data.model);

 var Pk    = getPrimaryKey(Model);

 if(Pk in data)
 {

  var condition = {};
  condition[Pk] = data[Pk];

   Model.find({ where:condition}).then(function(model) {
      if (model) { 
        model.updateAttributes(data).then(function(data){
          res.end(JSON.stringify(data));
        }).catch(function(error) {
         res.end(JSON.stringify(error));
      });
        
      }
    })
    
 }
 else
 {

  Model.create(data).then(function(model) {
      res.end(JSON.stringify(model));

    }).catch(function(error) {
     res.end(JSON.stringify(error));
  });

 }

     
    
});


router.post('/saveMultiple', function(req, res) {
  
 var data = req.body;

 var Model = getModel(data.model);

 var datas = data.datas;

 Model.bulkCreate(datas, {returning: true}).then(function(model) {
      res.end(JSON.stringify(model));

    }).catch(function(error) {
     res.end(JSON.stringify(error));
  });

 

     
    
});



router.post('/delete', function(req, res) {
  
 var data = req.body;

 var Model = getModel(data.model);

 var Pk    = getPrimaryKey(Model);

 var ids   = data.ids;

 sequelize.query('DELETE  FROM '+modelName+'s where '+Pk+' in ('+ids+')').then(function(data){
   res.end('Deleted');
 })

});

router.post('/fetchView', function(req, res) {
  
 var data = req.body;

 var vname = data.viewname;

 var condition = (data.condition) ? ' where '+data.condition : '' ;

 var attributes  = (data.columns) ? data.attributes : '*' ;

 sequelize.query('SELECT '+attributes+' FROM '+vname+' '+condition).then(function(data){
                                                                           res.end(JSON.stringify(data[0]));
                                                                         },
                                                          function(error){
                                                                            res.end(JSON.stringify(error));
                                                                          })

});



module.exports = router;
