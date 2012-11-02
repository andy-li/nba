// Filename: app/config.js
// Author: andy li

require.config({
	urlArgs: "timer=" +  (new Date()).getTime(),
	
	deps: ["main"],
	
	paths: {	    
		text: '../assets/js/require/text',
		
		jquery: '../assets/js/jquery/jquery-1.8.2.min',		
		underscore: '../assets/js/underscore/underscore-1.3.3',
		backbone: '../assets/js/backbone/backbone-0.9.2',
		
		jqueryTmpl: "../assets/js/jquery/jquery.tmpl-1.0.0",
		jqm: '../assets/js/jquery.mobile/jquery.mobile-1.2.0.min',
		jqmNavigator: '../assets/js/jquery.mobile/jqmNavigator'						
	},
	
	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		
		underscore: {
			exports: '_'
		},
		
		jqm: {
			deps: ['jquery', 'jqmNavigator']
		},
		
		jqueryTmpl: {
            deps: ['jquery']
        }
	}	
});

require.onError = function(err) {
    if (err.requireType === 'timeout') {
        console.log('modules:' + err.requireModules);
    }
    console.log(err);
    throw err;
};