// Filename: app/router.js
// Author: andy li

define([
    'namespace',
    
	'jquery',
	'underscore',
	'backbone',
	
	//modules
	'modules/startup/startup',
	'modules/main/main',
	'modules/news/news'	
	
], function(namespace, $, _, Backbone, Startup, Main, News) {
	'use strict';
	
	var App = namespace.app;
	
	var Router = Backbone.Router.extend({
				
		routes: {
			"": "startup",
			"main": "main",
			
			"team": "team",
			"team/:teamId": "team",
			
			"news": "news",
			"news/:newsId": "news",
			
			"*anything": "redirect"					
		},
		
		navigate: function (fragment, options) {						
			options = options || {};
			
			if (!Backbone.History.started) return false;
			
			if (options.force_router_function) {
				options.trigger = false;	
			}
						
			Backbone.Router.prototype.navigate.call(this, fragment, options);
			
			if (options.force_router_function) {
				Backbone.history.loadUrl();
			}
		},
		
		startup: function() {			
			var view = new Startup.Modules.Startup;			
			$.mobile.jqmNavigator.pushView(view);				    					
		},
				
		main: function() {
			//		    
			var view = new Main.Modules.Main;
			$.mobile.jqmNavigator.pushView(view, {transition: 'none'});							
		},
		
		team: function(teamId) {
			console.log('team view');
		},
		
		news: function(newsId) {		    
		    if (_.isUndefined(newsId)) return this.navigate('/', {replace: true});
		    
		    var view = new News.Modules.News({newsId: newsId});
		    $.mobile.jqmNavigator.pushView(view);	 		       		      
		},
		
		redirect: function(hash) {
            return this.navigate('/', {replace: true});
        }		
	});
	
	return Router;
});
