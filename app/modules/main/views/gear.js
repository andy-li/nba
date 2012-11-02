// Filename: app/modules/main/views/gear.js
// Author: andy li

define([
	'jquery',
	'underscore',
	'backbone',
	
	'modules/view',    
    'text!modules/main/templates/gear.html'
], function($, _, Backbone, View, tpl) {
	'use strict';
    
    var gear = View.Class.extend({                
        initialize: function() {            
            this._id = '.gearview-content';                                               
            View.Class.prototype.initialize.apply(this, this.options);                        
        },        
        
        render: function() {             	                  
            var view = _.template(tpl)();            
            $(view).appendTo(this.el);
            
            return this;         
        }        
    });    
    
    return gear; 
});
