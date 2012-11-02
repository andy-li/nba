// Filename: app/modules/view.js
// Author: andy li

define([
    'namespace',
    
    'jquery',
    'underscore',
    'backbone'
], function(namespace, $, _, Backbone) {
    'use strict';
                    
    var Interface = new namespace.Interface('ViewInterface', ['show', 'hide', 'render']);
    
    var View = Backbone.View.extend({        
        initialize: function() {
            _.bindAll(this);
        },
                
        show: function() {                       
            var el = $(this._id);
            
            if (!el[0]) {                
                this.render();                
            } else {
                el.removeClass('ui-screen-hidden');
            }            
        },
        
        hide: function() {            
            var el = $(this._id);
            if (el[0]) el.addClass('ui-screen-hidden');
        },
        
        render: function() {            
            throw new Error("Unsupport operation on the class View.");
        }
    });
    
    return {
        Interface: Interface,
        Class: View
    };
})
