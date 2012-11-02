// Filename: app/modules/main/views/team.js
// Author: andy li

define([    
    'jquery',
    'underscore',
    'backbone',
    
    'modules/view',    
    'text!modules/main/templates/team.html'
], function($, _, Backbone, View, tpl) {
    'use strict';
    
    var team = View.Class.extend({                
        initialize: function() {            
            this._id = '.teamview-content';                                               
            View.Class.prototype.initialize.apply(this, this.options);                        
        },        
        
        render: function() {             	                 
            var view = _.template(tpl)();            
            $(view).appendTo(this.el);
            
            return this;         
        }        
    });    
    
    return team;    
});
