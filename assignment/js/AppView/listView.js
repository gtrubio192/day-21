var ListItemView = Backbone.View.extend({

	initialize: function(options) {

		_.bindAll(
			this,
			'onCheckBoxClicked',
			'onModelChanged'
			);

		console.log("ListItemView. Template: ");

		var innterHTML = $('#item-view').html();
		var listItemTemplate  = _.template(innterHTML);
		console.log(listItemTemplate);
		this.$todo = $(listItemTemplate(this.model.attributes));

		this.$currentCheckBox = $(this.$todo.find('.check-box'));

		// this.$el = $(this.el);

		this.$currentCheckBox.on('click', this.onCheckBoxClicked);
		this.model.on('change', this.onModelChanged);
		console.log("initialized ListItemView");

	},

	onCheckBoxClicked: function(){
		console.log("checked");
		console.log(this.$el.find(('.check-box')));
		console.log($('.check-box').is(':checked'));
		
		if(this.model.get('completed')){
			this.model.set({completed: false});
		}
		else{
			this.model.set({completed: true })
		}

	},

	onModelChanged: function(){
		this.$todo.toggleClass('todo-checkbox-clicked');
	}
});