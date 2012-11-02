// Filename: app/modules/news/news.js
// Author: andy li

define([
    'namespace',
    'jquery',
    'underscore',
    'backbone',
    
    'modules/news/models/news',
    
    'text!modules/news/templates/news.html',
    
    //plugins
    'jqueryTmpl'
    
], function(namespace, $, _, Backbone, newsModel, newsTpl) {
    'use strict';
    
    var App = namespace.app;
    var news = namespace.module();
    
    news.Modules.News = Backbone.View.extend({
    	id: '#nbaNewsView',
    	
        events: {
            'click #btnBack': 'btnBackHandler'   
        },
        
        initialize: function() {            
            _.bindAll(this);
            
            this.newsId = this.options.newsId;
            
            if (_.isUndefined(this.newsId)) {
                throw new Error('Has not NewsId.');
            }
            
            this.model = new newsModel;
            
            this.model.bind('change', this.wrapper);
        },
        
        render: function() {                        
            this.$el.html(_.template(newsTpl));
            this.model.fetch();
            
            return this;
        },
        
        wrapper: function() {
            var html = this.$el.find("#appNewsTpl").tmpl({News: this.model.toJSON()});
            this.$el.find('.newsview-content').append(html);
        },
        
        btnBackHandler: function(evn) {
            window.history.back();
        }   
    });
    
    return news;    
});
