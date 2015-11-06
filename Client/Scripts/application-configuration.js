
﻿"use strict";

define(['angularAMD', 'angular-route','angular-sanitize','jquery'], function (angularAMD) {
    var app = angular.module("mainModule", ['ngRoute','ngSanitize']);
   
  

  app.provider('authService', function() {

    this.url = '';
    this.$get = function() {
        var url = this.url;
     return {
        validateUser: function() { 

            if(sessionStorage.getItem('loggedin')==1)
            console.log('logged in user id is ',sessionStorage.getItem('user_id'))
            else
            var redirect = window.location.href=url;    

           
        }
      }
    };

    this.setHomeUrl = function(url) {
        this.url = url;
    };

});

 


 // remove it when originally used
    /* app.directive('formNav', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).tableNav();
        }
    };
    });*/

 
  

     /*app.factory('httpRequestInterceptor', function (cfpLoadingBar,tokenstring) {
  return {
    request: function (config) {
        cfpLoadingBar.start();
      var token = tokenstring;
      config.url = config.url+token;
      return config;
      
    }
  };
});
   
app.factory('httpResponseInterceptor', function (cfpLoadingBar) {
  return {
    response: function (response) {
        cfpLoadingBar.complete();
      return response;
      
    }
  };
});  
app.value('tokenstring','?sessionId='+sessionId+'&acYear='+acYear+'&curracYear='+curracYear+'&schema='+schema);

     app.factory('httpRequestInterceptor', function (cfpLoadingBar,tokenstring) {
  return {
    request: function (config) {
        cfpLoadingBar.start();
      var token = tokenstring;
      config.url = config.url+token;    
      return config;
      
    }
  };
});
   
app.factory('httpResponseInterceptor', function (cfpLoadingBar) {
  return {
    response: function (response) {
        cfpLoadingBar.complete();
      return response;
      
    }
  };
});  
app.factory('httpResponseErrorInterceptor', function (cfpLoadingBar) {
  return {
    responseError: function (response) {
        cfpLoadingBar.complete();
      return response;
      
    }
  };
});   
   
*/
    app.config(function ($httpProvider,authServiceProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.withCredentials = true;
        /*$httpProvider.interceptors.push('httpRequestInterceptor');
        $httpProvider.interceptors.push('httpResponseInterceptor');
        $httpProvider.interceptors.push('httpResponseErrorInterceptor');*/
        authServiceProvider.setHomeUrl('http://localhost:9000') 
});

    app.value('baseApiUrl','http://localhost:9000'); // Change Per Need

    app.value('homeUrl','http://localhost:9000/home#/'); // Change Per Need

    app.value('clientUrl','http://localhost:9000/');  // Change Per Need

   app.config(['$routeProvider', function ($routeProvider) {
   
        var appUrl = "http://localhost:9000/";    // Change Per Need

        $routeProvider

           /*.when("/User/UserProfile", angularAMD.route({
                         
                templateUrl: function (rp) {  return appUrl+'Views/User/UserProfile.html';  },               
                controllerUrl: appUrl+"Views/User/UserProfile.js" 
            }))*/

            .when("/:section/:tree", angularAMD.route({

                templateUrl: function (rp) { return appUrl+'Views/' + rp.section + '/' + rp.tree + '.html'; },

                resolve: {

                    load: ['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {

                        var path = $location.path();
                        var parsePath = path.split("/");
                        var parentPath = parsePath[1];
                        var entryjs = parsePath[2].charAt(0).toUpperCase() + parsePath[2].slice(1);

                        var loadController = appUrl+"Views/" + parentPath + "/" + entryjs + ".js";                 

                        var deferred = $q.defer();
                        require([loadController], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;
                    }]
                }

            }))

           .otherwise({ redirectTo: '/' }) 

    }]);

 
    angularAMD.bootstrap(app);

  
    return app;
});



