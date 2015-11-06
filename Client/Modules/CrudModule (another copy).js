var crud = angular.module('CrudModule', []);

crud.controller('CrudController', ['$scope','$http','$location', '$rootScope','$timeout','$controller','getService',
        function ($scope,$http, $location, $rootScope,$timeout,$controller,getService) {
        }]);

crud.service('httpService',function($http){

this.post =  function(data,successCallback,errorCalback)
{

}

})

crud.service('fetch',function($http,messageServise){


var ref = this; // reference to 'this' access
this.reqScope = {};
this.respTarget = '';
this.post =  function(data)
{
	var http = $http.post('crud/'+data.func,data);
		       http.then(ref.successCallback,ref.errorCallback);
},

/*this.One = function(data,scope)
{
	data = angular.extend(data,{'func':'fetch'});
	scope[data.respObj] = {};
	angular.extend(scope,{name:'here is res obj you get'})
	ref.post(data);
	console.log(scope,'is scope')
}*/

this.successCallback = function(response)
{

	ref.reqScope[ref.respTarget] = response.data;
},

this.errorCallback  = function(response)
{
	messageServise.showError(response.statusText);
},

this.One = function(data,scope)
{
	data = angular.extend(data,{'func':'getall'});
	ref.beforePost(data,scope);
	
},
this.beforePost = function(data,scope)
{

	ref.reqScope = scope;
	ref.respTarget = data.respTarget;
	ref.post(data);

}

})


crud.service('messageServise',function(){

	this.showError = function(msg)
	{
		alert(msg)
	}
})

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
crud.service('Save',function($http,messageServise){

	var ref = this; // reference to 'this' access
	this.reqScope = {};
	this.respTarget = '';
	 this.init = function(data,scope)
	{
		ref.beforePost(data,scope);
		
	},
     this.post = function(data,scope)
        {
            
            var http = $http.post('crud/save',data);

            http.then(ref.successCallback,ref.errorCallback);
         }

		this.successCallback = function(response)
		{

			ref.reqScope[ref.respTarget] = response.data;
		},

		this.errorCallback  = function(response)
		{
			messageServise.showError(response.statusText);
		},
		this.beforePost = function(data,scope)
		{

			ref.reqScope = scope;
			ref.respTarget = data.model;
			ref.post(data);

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