// Filename: app/modules/main/views/home.js
// Author andy li

define([    
    'jquery',
    'underscore',
    'backbone',
    
    'modules/view',    
    'text!modules/main/templates/home.html'
], function($, _, Backbone, View, tpl) {
    'use strict';
           
    var home = View.Class.extend({                                
        initialize: function() {            
            _.bindAll(this);
            
            this._id = '.homeview-content';                                                           
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
            var html = this.$el.find("#appHomeNewsTpl").tmpl({TeamNews: this.model.toJSON()});
            this.$el.find('.homeview-listview').append(html).listview('refresh');            
        }        
    });    
    
    return home;        
});
