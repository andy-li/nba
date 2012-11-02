// Filename: app/modules/main/models/home.js
// Author: andy li

define([
    'namespace',
    
    'jquery',
    'underscore',
    'backbone',
    
    'modules/model'
], function(namespace, $, _, Backbone, Model) {
   'use strict';
   
    var home = Model.Class.extend({
        url: namespace.config.apiHost + 'home.php'       
    });
    
    return home;
});
