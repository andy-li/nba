// Filename:app/modules/model.js
// Author: andy li

define([
    'namespace',
    'jquery',
    'underscore',
    'backbone'
], function(namespace, $, _, Backbone) {
    'use strict';
    
    var Model = Backbone.Model.extend({        
        parse: function(resp) {
            return this.parseJSON(resp);
        },
        
        parseJSON: function(resp) {
            var url = _.isFunction(this.url) ? this.url() : this.url;
            
            if (_.isUndefined(resp) || _.isUndefined(resp.results)) {
                throw new Error("Can not parse URL: " + url);
                return false;
            }
            
            if (_.isUndefined(resp.status) || resp.status !== 'success') {
                throw new Error("Parse URL found Error: " + url);
                return false;
            }
            
            return resp.results;
        }    
    });
    
    return {Class: Model};
});
