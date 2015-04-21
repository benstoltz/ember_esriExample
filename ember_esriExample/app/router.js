import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

require([
  "map/app"
], function (App) {
  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return ['red', 'yellow', 'blue'];
    }
  });

  App.Router.map(function () {
    // Routes
  });

  App.advanceReadiness();
});
