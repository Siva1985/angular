define(['application-configuration'], function (app) {

var crud = angular.module('CrudModule', []);

crud.constant('dirTemplBaseUrl','/Views/Crud/'); // Directive Template Base Url


crud.controller('CrudController', ['$scope','$http','$location', '$rootScope','$timeout','$controller','fetch','Save','Delete',
        function ($scope,$http, $location, $rootScope,$timeout,$controller,fetch,Save,Delete) {

          
          $scope.save = function(params)
          {
            Save.init(params);
          }

          $scope.fetch = function(params)
          {
            fetch.init(params);
          }

          $scope.paginate = function(params,limit,offset)
          {
            params.limit=limit;
            params.offset=offset;
            $scope.fetch(params);
          }

          $scope.scrollspy = function(params,limit,offset)
          {
            params.limit=limit;
            params.offset=offset;
            params.addType = 'append';
            $scope.fetch(params);
          }

        }]);

crud.service('httpService',function($http,$timeout,messageService){

		var ref = this; // reference to 'this' access
		this.reqScope = {};
		this.respTarget = '';
		this.typ = '';
		this.post = function(params){
          var data = (params.formData===undefined) ? params : params.formData; 
          $http.post(params.funct,data).then(ref.successCallback,ref.errorCallback);
        }

		this.successCallback = function(response){

      data = response.data;
			if(messageService.validateResponse(data,ref.reqScope)===false) return;
			if(ref.reqScope.addType=='append')
				ref.appendDatas(data);
			else
			ref.reqScope[ref.reqScope.respTarget]=data;	

		},

		this.errorCallback  = function(response){

			messageService.showError(response.statusText);

		},
		this.beforePost = function(params){

			ref.reqScope = params.scop;
			ref.reqScope.respTarget = params.respTarget;
			ref.reqScope.typ = params.typ;
			ref.reqScope.addType = params.addType;
      if(params.typ==='read')
      {
        ref.post(params);
        return;
      }
      params.formData = params.scop[params.model];
      params.formData.model = params.model;
			ref.post(params);


		},
		this.appendDatas = function(data)
		{
				if(data.datas.length===0) return; 
				for(var i=0; i<=data.datas.length;i++)
				  ref.reqScope[ref.reqScope.respTarget]['datas'].push(data.datas[i])


		} 

})

crud.service('fetch',function($http,$timeout,httpService,messageService,DevValidationService){


	this.init = function(data){

		if(DevValidationService.validate(data)===false) return;
		data = angular.extend(data,{'funct':'crud/fetch','typ':'read'});
		httpService.beforePost(data);
		/*scope.$watch(function(scope) { return scope[data.respTarget] },
              function(newValue, oldValue) {
                  console.log(newValue,'watch');
              }
             );*/
		
	},

	this.View = function(data,scope){

		data = angular.extend(data,{'funct':'crud/fetchView','typ':'read'});
		httpService.beforePost(data,scope);
		
	}


})


crud.service('Save',function($http,httpService){

	this.init = function(data){

		angular.extend(data,{'funct':'crud/save','respTarget':data.model,'typ':'save'});
		httpService.beforePost(data);
		
	},
	this.Multiple = function(data,scope){

		angular.extend(data,{'funct':'crud/saveMultiple','respTarget':data.model,'typ':'save','scop':data.scop});
		httpService.beforePost(data);
	}     

});
crud.service('Delete',function($http,httpService){

	this.init = function(data){

		angular.extend(data,{'funct':'crud/delete','scop':data.scop});
		httpService.beforePost(data);
		
		
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

          var model = scope.respTarget.replace('listobj','');
          scope[model+'dberrobj'] = {};
	    		scope[model+'dberrobj'] = data;
	    		scope[model+'dberrobj']['dberrorFlag']=1;
	    		return false;
	    	}
	    	else{
	    		if(scope.typ==='save')
	    		ref.successMessage(data,scope);

	    		return true;	

	    	}

	    },
	    this.successMessage = function(data,scope){
           scope[scope.respTarget+'msgobj'] = {};
           angular.extend(scope[scope.respTarget+'msgobj'],{'msg':'Data Saved Successfully','msgclass':'success','flag':1})
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
	    	if(data.scop=='' || data.scop===undefined){

	    		alert('Scope is Required');
	    		return false;
	    	}
	    	return true;

	    }

  });


 /* crud.directive('message',function()
  {

  	return{

  		template : "{{mymessage}}"
  	}
  })

 crud.directive('message',function()
  {

  	return{

  		link: function(scope,elem,attrs)
  		{
  			elem.html("my inner html");
  			console.log('Hello da')
  		}
  	}
  })

  crud.directive('message',function()
  {

  	return{

  		link: function(scope,elem,attrs)
  		{
  			elem.on('click',function(){

  				alert('You Clicked Me')
  			})
  		}
  	}
  })

   crud.directive('message',function()
  {

  	return{

  		link: function(scope,elem,attrs)
  		{
  			elem.on('click',function(){

  				console.log(attrs,'Attributes ')
  			})
  		}
  	}
  })

  crud.directive('message',function()
  {

  	return{

  		link: function(scope,elem,attrs)
  		{
  			elem.on('click',function(){

  				console.log(scope,'Scope of the current controller ')
  			})
  		}
  	}
  })

  crud.directive('message',function()
  {

  	return{

  		link: function(scope,elem,attrs)
  		{
  			elem.on('click',function(){

  				//console.log(attrs.respTarget,'attrs')
  				console.log(scope[attrs.respTarget])
  			})
  		}
  	}
  })

  crud.directive('message',function()
  {

  	return{

  		link: function(scope,elem,attrs)
  		{
  			elem.on('click',function(){

  				//console.log(attrs.respTarget,'attrs')
  				console.log(scope[attrs.respTarget])
  			})
  		}
  	}
  })*/

crud.directive('message',function($timeout,dirTemplBaseUrl)
  {

  	return{
  		templateUrl: dirTemplBaseUrl+'message.html',
  		
  		link: function(scope,elem,attrs)
  		{

  			

  			$timeout(function(){


  			scope['respTarget'] = 	attrs.resptarget;
  			scope[attrs.resptarget]['datas'] = scope[attrs.resptarget]['datas'];

  			},500)

  			scope.$watch(function(scope) { return scope[attrs.resptarget] },
              function(newValue, oldValue) {
              	
                 scope[attrs.resptarget]['datas'] = scope[attrs.resptarget]['datas'];
              }
             );

  		}
  	}
  });


/*crud.directive('listdata',function($timeout,dirTemplBaseUrl)
  {

  	return{

  		restrict:'E',
  		templateUrl: dirTemplBaseUrl+'listdata.html',
  		scope:{
  			listobj : '=listobj',
        datatepmlateurl : '@'
  		},
  		link: function(scope,elem,attrs)
  		{
  		  scope.$watch(function(scope) { return scope.listobj });
  		}		

  	}
  });*/


crud.directive('success',function($timeout,dirTemplBaseUrl)
{
   return{
   	restrict: 'E',
   	templateUrl: dirTemplBaseUrl+'success.html',
    scope:{
      messageobj : '=messageobj'
    },
   	link:function(scope,elem,attrs)
   	{
   		
      scope.$watch(function(scope) { return scope.messageobj },
              function() {
                  
              }
             );
   	}
   }
});

crud.directive('dberror',function($timeout,dirTemplBaseUrl)
{
    return{
    	restrict: 'E',
    	templateUrl: dirTemplBaseUrl+'dberror.html',
      scope:{
      dberrobj : '=dberrobj'
    },
    	/*controller:function($scope)
		{
		    $scope.close = function(id)
		    {
		      $('#'+id).remove();
		      $scope.dberrorFlag = 0;
		    }
		},*/
     //controller:'CrudController',
    	link:function(scope,elem,attrs)
    	{
       console.log('ins link') 
          scope.$watch(function(scope) { return scope.dberrobj },
                  function(newValue,oldValue) {

                     //scope.dberrobj = newValue;
                     console.log(scope,'watch')
                                           
                  }
              );
    	}
    }

});



crud.directive('pagination',function(dirTemplBaseUrl)
    {
        return{
        	restrict: 'EA',
         	templateUrl: dirTemplBaseUrl+'pagination.html',
        	scope:{
  			dataset : '=dataset',
        params : '=params'
        },
        controller:'CrudController',
  			link:function(scope,elem,attrs)
        	{
           
               scope.$watch(function(scope) { return scope.dataset },
                  function(newValue,oldValue) {

                     var datas = newValue;
                     if(datas===undefined) return; 
                     var total= datas['total'];
                     scope.limit= attrs.limit;
                     var noOfPages = Math.floor(Number(total)/Number(scope.limit));
                     scope.pages = [];
                     for(var i=1;i<=noOfPages;i++)
                        scope.pages.push(i);
                      
                  }
              );

        	}
        }
    });

crud.directive('datatable',function(dirTemplBaseUrl)
{
        return{
          restrict: 'E',
          templateUrl:dirTemplBaseUrl+'datatable.html',
          controller: 'CrudController',
          scope:{
            dataset: '=dataset'
          },
          link: function(scope,elem,attrs)
          {
             scope.$watch(function(scope) { return scope.dataset },
                  function(newValue,oldValue) {

                  }
              );
          }
        }
});


crud.directive('scrollspy',function($timeout,fetch,dirTemplBaseUrl)
    {
        return{
        	restrict: 'EA',
        	//templateUrl: dirTemplBaseUrl+'scrollspy.html',
        	controller:'CrudController',
          scope:{
                params : '=params'
          },
        	link:function(scope,elem,attrs)
        	{
        		
                     
                 $('#'+attrs.id).bind('scroll', function(){

                 
                 		var offset = $('#'+attrs.id+' ul li').length;
                 		var limit = 15;
                    if($('#'+attrs.id).scrollTop()>=212)
                    scope.scrollspy(scope.params,limit,offset);


                 	})
                 
                 
                 
        		

            
    	   	}
        }
    });


});  

