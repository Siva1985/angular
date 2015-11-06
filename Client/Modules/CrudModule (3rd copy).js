define(['application-configuration'], function (app) {

var crud = angular.module('CrudModule', []);

crud.controller('CrudController', ['$scope','$http','$location', '$rootScope','$timeout','$controller',
        function ($scope,$http, $location, $rootScope,$timeout,$controller) {
        }]);

crud.service('httpService',function($http,messageService){

		var ref = this; // reference to 'this' access
		this.reqScope = {};
		this.respTarget = '';
		this.post = function(data,scope){

          $http.post('http://localhost:9000/'+data.funct,data).then(ref.successCallback,ref.errorCallback);

        }

		this.successCallback = function(response){

			if(messageService.validateResponse(response.data,ref.reqScope)!==false)
			  ref.reqScope[ref.respTarget] = response.data;

		},

		this.errorCallback  = function(response){

			messageService.showError(response.statusText);

		},
		this.beforePost = function(data,scope){

			ref.reqScope = scope;
			ref.respTarget = data.respTarget;
			ref.post(data);

		} 

})

crud.service('fetch',function($http,$timeout,httpService,messageService,DevValidationService){


	this.init = function(data,scope){

		if(DevValidationService.validate(data,scope)===false) return;
		data = angular.extend(data,{'funct':'crud/fetch','typ':'read'});
		httpService.beforePost(data,scope);
		
	},

	this.View = function(data,scope){

		data = angular.extend(data,{'funct':'crud/fetchView','typ':'read'});
		httpService.beforePost(data,scope);
		
	}


})


crud.service('Save',function($http,httpService){

	this.init = function(data,scope){

		angular.extend(data,{'funct':'crud/save','respTarget':data.model,'typ':'save'});
		httpService.beforePost(data,scope);
		
	},
	this.Multiple = function(data,scope){

		angular.extend(data,{'funct':'crud/saveMultiple','respTarget':data.model,'typ':'save'});
		httpService.beforePost(data,scope);
	}     

});
crud.service('Delete',function($http,httpService){

	this.init = function(data,scope){

		angular.extend(data,{'funct':'crud/delete'});
		httpService.beforePost(data,scope);
		
	}    

});

crud.service('messageService',function($http){

		var ref = this;	
	    this.validateResponse = function(data,scope)
	    {

	    	if('errors' in data){

	    		ref.validateForm(data);
	    		return false;
	    	}
	    	else if(data['name']=='SequelizeDatabaseError'){

	    		console.log('Need to write a directive ..')
	    		return false;
	    	}
	    	else{

	    		if(data.typ==='save')
	    		ref.successMessage(scope);

	    		return true;	

	    	}

	    },
	    this.successMessage = function(scope){
            
           angular.extend(scope,{'msg':'Data Saved Successfully','msgclass':'success','flag':1})
            
        },
	    this.validateForm = function(data){

	        angular.forEach(data.errors,function(error){

	            $('[ng-model$=".'+error.path+'"]').next().html('<span class="text text-danger"><br>'+error.value+' </span>')
	        })

	    },
	    this.showError = function(message){

	    	alert(message);
	    }

  });

  crud.service('DevValidationService',function($http){

		var ref = this;	
	    this.validate = function(data,scope){

	    	if(data.model=='' || data.model===undefined){

	    		alert('Model Attribute is Required');
	    		return false;
	    	}
	    	
	    	if(data.respTarget=='' || data.respTarget===undefined){

	    		alert('Response Target Object is Required');
	    		return false;
	    	}
	    	if(scope=='' || scope===undefined){

	    		alert('Scope is Required');
	    		return false;
	    	}
	    	return true;

	    }

  });
  

  
});  
