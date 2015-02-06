var AppView = Backbone.View.extend({
	el: '#app',
	initialize: function(){

		console.log("initializing app view");

		_.bindAll(
			this,
			'onAddToDoClick',	
			'onToDoEnter',
			'onToDoAdded',
			'render'
		);
		// get handle on input elements - text box and submit button
		this.$addButton = $('#input-button');
		this.$item = $('#input-box');
		// get handle on todoList appending area
		this.$todoList = $('#item-view');
		// set up collections
		this.list = new collections();

		// event listeners
		this.$addButton.on('click', this.onAddToDoClick);
		this.$item.on('keyup', this.onToDoEnter);
		this.list.on('add', this.onToDoAdded);
	},

	onAddToDoClick: function(){
		console.log("click");
		this.newModel = new models();
		this.newModel.set({
			item: this.$item.val()
		});
		// clear text box
		this.$item.val('');
		// console.log(this.newModel);
		this.list.add(this.newModel);
		// console.log(this.list);

	},

	onToDoEnter: function(e) {
		if(e.which == 13) {
			console.log("Enter button");
			this.onAddToDoClick();
		}
	},

	render: function(){

	},

	onToDoAdded: function(todoModel){
		console.log("collection increased");
		// console.log(todoModel.attributes);
		// console.log("Model attributes: " + todoModel.attributes);
		var newItemView = new ListItemView( {model: todoModel } );
		// console.log(newItemView.$el);
		// console.log(this.$todoList);
		$('#list').append(newItemView.$todo);
	}


});