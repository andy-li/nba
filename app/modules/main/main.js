// Finename: app/modules/main/main.js
// Author: andy li

define([
    'namespace',
    
    'jquery',
    'underscore',
    'backbone',
    
    'modules/view',
        
    'modules/main/views/home',
    'modules/main/models/home',
    'modules/main/views/team',
    'modules/main/views/user',
    'modules/main/models/user',
    'modules/main/views/gear',
    
    'text!modules/main/templates/main.html',
    
    // plugins
    'jqueryTmpl'
    
], function(namespace, $, _, Backbone, View, homeView, homeModel, teamView, userView, userModel, gearView, mainTpl) {
    'use strict';
    
    var main = namespace.module();
    
    main.Modules.Main = Backbone.View.extend({    	    	
    	id: '#nbaMainView',
    	
        events: {
            'click ul.main-navbar li a': 'navbarHandler'             
        },
        
        initialize: function() {        	        	                	  
            _.bindAll(this);                                                                               
        },
                
        initViews: function(el) {        	
        	var options = {
        		el: el
        	}; 
        	       	
            this.views = {
            	'homeview': new homeView(_.extend(options, {model: new homeModel})),
            	'teamview': new teamView(options),
            	'userview': new userView(_.extend(options, {model: new userModel})),
            	'gearview': new gearView(options)
            };
                                             
            for (var view in this.views) {
            	namespace.Interface.ensureImplements(this.views[view], View.Interface);            
            	this.views[view].render().hide();
            }                           
        },
        
        render: function() {        	        	        	                                       
            this.$el.html(_.template(mainTpl));
            var el = this.$el.find('#content-wrapper');
            
            this.initViews(el);
            
            this.viewSelector().show();
            
            return this;
        },
                                
        viewSelector: function(view) {
        	if (!_.isUndefined(view) && !this.views.hasOwnProperty(view)) {
        		throw new Error('App MainView unsupport view:' + view);
        	}                                                    
            switch(view) {
                case 'teamview':
                    this.currentView = this.views.teamview;
                    break;             
                case 'userview':
                	this.currentView = this.views.userview;
                	break;
                case 'gearview':
                	this.currentView = this.views.gearview;
                	break;
                case 'homeview':
                default:
                    this.currentView = this.views.homeview;
                    break;                    
            }                                   
            return this.currentView;        
        },    
        
        navbarHandler: function(event) {                         
            var view = $(event.currentTarget).attr('app-view');
            
            if (!_.isUndefined(this.currentView)) this.currentView.hide();
                                                                   
            this.viewSelector(view).show();        
        }                
        
    });
    
    return main;
});
