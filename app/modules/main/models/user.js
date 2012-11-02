// Filename: app/modules/main/models/user.js
// Author: andy li

define([
    'namespace',
    
    'jquery',
    'underscore',
    'backbone',
    
    'modules/model'
], function(namespace, $, _, Backbone, Model) {
   'use strict';
   
    var user = Model.Class.extend({
        url: namespace.config.apiHost + 'user.php'       
    });
    
    return user;
});
