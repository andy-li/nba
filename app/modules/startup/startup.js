// Filename: app/modules/startup/startup.js
// Author: andy li

define([
	'namespace',
	'jquery',
	'underscore',
	'backbone',
	
	'text!modules/startup/templates/startup.html',
	
	// plugins
	'jqueryTmpl'
	
], function(namespace, $, _, Backbone, startupTpl) {
	'use strict';
	
	var App = namespace.app, startup = namespace.module();
	
	startup.Modules.Startup = Backbone.View.extend({
		id: '#nbaStartupView',
		
		initialize: function() {
			_.bindAll(this);
		},
		
		render: function(done) {
			this.$el.html(_.template(startupTpl));
			
			if (_.isFunction(done)) {
				done();
			}	
			
			return this;
		}		
	});
	
	return startup;
});
