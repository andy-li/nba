// Filename: app/modules/main/views/user.js
// Author: andy li

define([
	'jquery',
	'underscore',
	'backbone',
	
	'modules/view',    
    'text!modules/main/templates/user.html'
], function($, _, Backbone, View, tpl) {
	'use strict';
    
    var user = View.Class.extend({                
        initialize: function() {            
        	_.bindAll(this);
        	
            this._id = '.userview-content';
            this.model.bind('change', this.wrapper);
                                                           
            View.Class.prototype.initialize.apply(this, this.options);                        
        },        
        
        render: function() {             	                  
            var view = _.template(tpl)();            
            $(view).appendTo(this.el);
            this.model.fetch();
            
            return this;         
        },
        
        wrapper: function() {
        	var html = this.$el.find("#appUserFollowsTpl").tmpl({Follows: this.model.toJSON()});
            this.$el.find('.userview-listview').append(html).listview('refresh'); 
        }        
    });    
    
    return user; 
});
