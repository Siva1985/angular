var app = angular.module('User',[]);

app.controller('UserProfileController', ['$controller','$scope','$http','$location','$rootScope','$timeout',
        function ($controller,$scope,$http, $location, $rootScope,$timeout) {

            $scope.designationSavaParams = {'model':'designation','respTarget':'designation','addType':'none','scop':$scope}
            $scope.domainSavaParams = {'model':'domain','dom_name':'http://a.com','respTarget':'domain','addType':'none','scop':$scope}
            $scope.designationFetchParams = {'model':'designation','respTarget':'designationlistobj','limit':15,'offset':0,'addType':'none','scop':$scope};
            $scope.domainFetchParams = {'model':'domain','respTarget':'domainlistobj','limit':15,'offset':0,'addType':'none','scop':$scope};

            angular.extend(this, $controller('CrudController', {$scope: $scope}));

            $scope.listData = function()
            {
                $scope.fetch($scope.designationFetchParams);
                $timeout(function(){$scope.fetch($scope.domainFetchParams)},1000);
                 


            } 
            $scope.listData();
            

             
           
        }]);
