'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

Parse.initialize("lSTT4hQMyXQmxoNNI8EllvElXOiUUtt6GmNcmkph", "M8k7Z0e5PgXRqELdZ8siGFpkDUBl4fTh57nkUDbK");

var NavigationComponent = require('./components/NavigationComponent.js');
var PostComponent = require('./components/PostComponent.js');
var PostFormComponent = require('./components/PostFormComponent.js');
var LoginComponent = require('./components/LoginComponent.js');
var RegisterComponent = require('./components/RegisterComponent.js');
var PostListComponent = require('./components/PostListComponent.js');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'main',
		'addPost': 'addPost',
		'login': 'login',
		'register': 'register',
		'post/details/:id': 'lists'
	},
	main: function() {
		ReactDOM.render(
			<PostComponent router={r} />, 
			app
		);
	},
	addPost: function() {
		if(!Parse.User.current()) {
			this.navigate('login', {trigger: true});
		}
		else {
			ReactDOM.render(<PostFormComponent router={r} />, app);
		}

	},
	login: function() {
		ReactDOM.render(
			<LoginComponent router={r} />, 
			app
		);
	},
	register: function() {
		ReactDOM.render(
			<RegisterComponent router={r} />, 
			app
		);
	},
	lists: function(id) {
		ReactDOM.render(
			<PostListComponent router={r} postId={id} />,
			app
		);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);




