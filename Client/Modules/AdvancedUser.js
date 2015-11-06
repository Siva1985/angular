define(['User'], function (User) {   
var app = angular.module('AdvancedUser',['User']);
app.controller('UserProfileAdvancedController', ['$scope','$http','$location', '$rootScope','$timeout','$controller','fetch','Save','Delete',
        function ($scope,$http, $location, $rootScope,$timeout,$controller,fetch,Save,Delete) {

          angular.extend(this, $controller('UserProfileController', {$scope: $scope}));


          $scope.initializeController = function () {
                $scope.testExtend();
                //fetch.init({'model':'designation','respTarget':'designation','limit':15,'offset':0,'addType':'none','columns':['hi']},$scope); SequeliseDatabaseError
                //Save.init({'model':'domain','desg_name':'http://a.com','respTarget':'applied'},$scope) //SequelizeValidationError
                /*$timeout(function(){Save.ini
                t({'model':'designation','desg_name':'Sys Ad updated New 42','desg_id':16},$scope)},200);
                Delete.init({'model':'designation','ids':[16,17,18]});
               fetch.init({'model':'designation','respTarget':'applied','condition':{desg_id:[1,2,3]}},$scope);
               fetch.init({'model':'designation','respTarget':'applied','condition':{}},$scope);
               fetch.init({'model':'designation','respTarget':'applied','condition':{},'limit':2,'offset':2},$scope);
               fetch.init({'model':'designation','respTarget':'applied','condition':{},'limit':20,'offset':2,'columns':['desg_id']},$scope);
               fetch.init({'model':'designation','respTarget':'applied','condition':{},'limit':20,'offset':2,'columns':['desg_id','desg_name']},$scope);
               fetch.init({'model':'designation','respTarget':'applied','condition':{desg_id:[1,2,3]},'columns':['desg_id','desg_name']},$scope);   
               fetch.init({'model':'designation','respTarget':'applied','condition':{desg_id:{gt: 12}},'columns':['desg_id','desg_name']},$scope);
               fetch.init({'model':'designation','respTarget':'applied','condition':{desg_id:{notIn:[1,2,3]}},'columns':['desg_id','desg_name']},$scope);
               fetch.init({'model':'designation','respTarget':'applied','condition':{desg_id:{in:[1,2,3,8]}},'columns':['desg_id','desg_name']},$scope);
               fetch.init({'model':'designation','respTarget':'applied'},$scope);
               fetch.init({'model':'designation','respTarget':'applied','scopes':['owners','staff']},$scope);
               fetch.init({'model':'designation','respTarget':'applied'},$scope);
               fetch.View({'model':'designation','respTarget':'applied','viewname':'DesgView'},$scope);
               fetch.View({'model':'designation','respTarget':'applied','viewname':'DesgView','condition':'desg_name = "Tester" '},$scope);*/
               //Save.Multiple({'model':'designation',datas:[{'desg_name':'hello1'},{'desg_name':'hello2'}]},$scope)
               //fetch.init({'model':'domain','respTarget':'domain','limit':15,'offset':0,'addType':'none'},$scope);
               //$timeout(function(){fetch.init({'model':'designation','respTarget':'designation','limit':15,'offset':0,'addType':'none'},$scope);},500)
               //fetch.init({'model':'domain','respTarget':'domain','limit':15,'offset':0,'addType':'none'},$scope);
               //fetch.init({'model':'designation','respTarget':'designation','limit':15,'offset':0,'addType':'none'},$scope);
               fetch.init({'model':'designation','respTarget':'designation','limit':10,'offset':0,'addType':'none'},$scope);
               $timeout(function(){ fetch.init({'model':'domain','respTarget':'domain','limit':10,'offset':0,'addType':'none'},$scope);},500)
            }

          $scope.paginate = function(page,limit)
          {
            console.log(page,limit)
            fetch.init({'model':'designation','respTarget':'designation','limit':limit,'offset':page*limit},$scope);
          }

          $scope.testExtend = function()
          {

            //console.log($scope.get())
            //console.log(this,'this');
            //$scope.hello();
            //Save.init({'model':'designation','desg_name':'http://a.com','respTarget':'designation'},$scope) //SequelizeValidationError
          }

           
        }]);


app.controller('UserPersonalAdvancedController', ['$scope','$http','$location', '$rootScope','$timeout',
        function ($scope,$http, $location, $rootScope,$timeout) {

            

           
        }]);


 } ); 
