// Filename: app/modules/news/models/news.js
// Author: andy li

define([
    'namespace',
    
    'jquery',
    'underscore',
    'backbone',
    
    'modules/model'
], function(namespace, $, _, Backbone, Model) {
    'use strict';
   
    var news = Model.Class.extend({
        url: namespace.config.apiHost + 'news.php'       
    });
    
    return news;
});
