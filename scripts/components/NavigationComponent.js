var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var links = [];

			links.push(this.createNavLink('', 'Home'));

		if(!Parse.User.current()) {
			links.push(this.createNavLink('login', 'Log In'));
			links.push(this.createNavLink('register', 'Register'));
		}
		else {
			links.push(this.createNavLink('addPost', 'Post'));
			links.push(<li><a href="#" onClick={this.logout}>Logout</a></li>);
		}
		return (
			<section>
				<header>
					<h1 id="logo">Blog Box</h1>
				</header>
				<nav className="links">
					{links}
				</nav>
				<div className="logoLine"></div>
			</section>

			)
	},
	logout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('login', {trigger: true});
	},
	createNavLink: function(url, label) {
		var currentUrl = Backbone.history.getFragment();
		if(currentUrl === url) {
			return (<li className="active"><a href={'#'+url}>{label}</a></li>);
		}
		else {
			return (<li><a href={'#'+url}>{label}</a></li>);
		}
	}


})



