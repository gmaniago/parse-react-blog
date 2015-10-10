var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p>{this.state.error}</p>
			);
		}
		return (
			<div className="loginPage">
				<h1 className="pageHeader">Log In</h1>
				<hr />
				<form className="form" onSubmit={this.onLogin}>
					<input type="text" ref="username" placeholder="username" />
					<br />
	
					<input type="test" ref="password" placeholder="password" />
					<br />
					<button>LogInn</button>
				</form>
			</div>
			)
	},
	onLogin: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		Parse.User.logIn(
			this.refs.username.value,
			this.refs.password.value,
			{
				success: (u) => {
					this.props.router.navigate('', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
	}


})



