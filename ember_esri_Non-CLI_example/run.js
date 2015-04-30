require([
	"sample/app"
], function (App) {

	App.IndexRoute = Ember.Route.extend({
		model: function () {
			return ['red', 'yellow', 'blue']
		}
	});

	App.Router.map(function() {
		//routes go here
	});

	App.advanceReadiness();
});