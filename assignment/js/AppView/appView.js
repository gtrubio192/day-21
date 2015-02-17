		// new collections object. 

		// new gameView, pass in collection object

		// new leaderboardView, pass in collection object

		// new settingsView, pass in collection object

		// create an outside reference for 'this' called self

		// new var Router = Backbone.Extend.router({              })
			// make routes object with views 

			// new functions for each view inside of routes

			// hide whole page

			// show only the view thats invoked 

		// outside of router, create new router var

		// 		Backbone.history.start();       ?

		// make a hideAll() function that hides class .page-view 

var AppView = Backbone.View.extend({
	el: '#app',
	initialize: function(){
		console.log("initializing app view");

		// new collections object. 
		this.users = new collections();
		// new homeView
		this.homeView = new homeView({
			users: this.users
		});
		// new gameView, pass in collection object
		this.gameView = new gameView({
			users: this.users
		});
		// new leaderboardView, pass in collection object
		this.leaderboardView = new leaderboardView({
			users: this.users
		});
		// new settingsView, pass in collection object
		this.settingsView = new settingsView({
			users: this.users
		});
		// new loadingView
		this.loadingView = new loadingView({
			users: this.users
		});

		// create an outside reference for 'this' called self
		var self = this;
		// new var Router = Backbone.Extend.router({              })
		var Router = Backbone.Router.extend({
			// hideAll();
			// loading();
			// this.loadingView.$el.show();			

			// make routes object with views 
			routes: {
				// looks for #url : functions in router
				'loading': 'loading',
				'menu': 'home',
				'game': 'game',
				'leader-board': 'leaderboard',
				'settings': 'settings',
                '': 'loading'
			},
			// new functions for each view inside of routes
			loading: function(){
				console.log("Loading");
				// self.hideAll();
				$('.pages').hide();
			// show only the view thats invoked 
				self.loadingView.$el.show();
                setTimeout(function(){
                    self.loadingView.$el.hide();
                    self.homeView.$el.show();
                },4000);
			},
			home: function(){
				console.log("Home");
				// self.hideAll();
				$('.pages').hide();
				self.homeView.$el.show();
			},
			game: function(){
				console.log("game");
				// self.hideAll();
				$('.pages').hide();
				self.gameView.$el.show();				
			},
			leaderboard: function(){
				console.log("leader-board");
				// self.hideAll();
				$('.pages').hide();

				self.leaderboardView.$el.show();
			},
			settings: function(){
				console.log("settings");
				$('.pages').hide();
				// self.hideAll();
				console.log(self.settingsView.$el);
				self.settingsView.$el.show();
				console.log(self.settingsView.$el.css('display'));
			}
		});
		// outside of router, create new router var
		var approuter = new Router();

		Backbone.history.start(); 
	}, // end of initialize
		// make a hideAll() function that hides class .page-view 
	hideAll: function(){
		$('pages').hide();
	}
});