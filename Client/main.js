require.config({

    baseUrl: "/",
    waitSeconds: 0,
    
    paths: {
        'application-configuration': 'Scripts/application-configuration',

         // Scripts Section START 
        'jquery' : 'Scripts/jquery.min',       
        'angular': 'Scripts/angular.min',
        'angular-route': 'Scripts/angular-route.min',
        'angularAMD': 'Scripts/angularAMD.min',
        'angular-sanitize' : 'Scripts/angular-sanitize', 
        'ngload': 'Scripts/ngload',
        'usjs': 'Scripts/underscore-min',
        'datePicker' : 'Scripts/bootstrap-datepicker.min',
         // Scripts Section END
     
        'EditService' : 'Services/EditService',

        
        // Module's Section START
        'User' : 'Modules/User',
        'AdvancedUser' : 'Modules/AdvancedUser',
        'Crud' : 'Modules/CrudModule',
        // Module's Section END
        
        
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-sanitize': ['angular'],
        angular: {
		    exports: "angular"
		},
       
	
         
    },

    // kick start application
    deps: ['application-configuration']
});


