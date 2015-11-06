var crud = angular.module('CrudModule', []);

crud.controller('CrudController', ['$scope','$http','$location', '$rootScope','$timeout','$controller','getService',
        function ($scope,$http, $location, $rootScope,$timeout,$controller,getService) {
        }]);

crud.service('getService',function($http){

	this.get = function(data,callback)
		      {
		      	var http = $http.post('crud/getall',data);
		                http.then(function(response){
		                    callback(response);
		                });
		      }
	    
});
crud.service('getByConditionService',function($http){
	 this.getByCondition = function(data,callback)
		            {
		                var http = $http.post('crud/getbycondition',data);
		                http.then(function(response){
		                     callback(response);
		               });
		            }
});
crud.service('saveService',function($http){
     this.save = function(data,primaryid,callback)
        {
            this.formData = data;
            this.formData.primaryid = primaryid;
            if(this.formData.primaryid!==undefined)
                var http = $http.post('crud/update',this.formData);
            else
                var http = $http.post('crud/save',this.formData);

            http.then(function(response){
                if(response.data!=null)  // response.data.<primary key> Change Primary Key Here
                 {

                    callback(response.data);
                }
                else
                  errcallback(response.data) ; 
            },function(data){

                 alert(data.statusText) ; 
            });
         }

});
crud.service('messageService',function($http){
	    this.messageCondtion = function(scop,obj)
	        {
	            for(prop in obj)
	            {
	                var primaryid = (obj[prop]);
	                break;
	            }
	            if(isNaN(primaryid) === false)
	            {
	                angular.extend(scop,{'msg':'Data Saved Successfully','msgclass':'success','flag':1})
	            }
	            else
	            {
	                this.validateForm(obj); 
	            }
	        }
	    
	    this.validateForm = function(data)
	    {
	        angular.forEach(data.errors,function(error){

	            $('[ng-model$=".'+error.path+'"]').next().html('<span class="text text-danger"><br>'+error.value+' </span>')
	        })

	    }

  });
  crud.service('deletebyidService',function($http){
        this.deletebyid = function(data,callback)
            {
               
               this.formData = data;
                var http = $http.post('crud/delete',this.formData);
                http.then(function(response){
                    callback(response.data);
                });
            }
   });