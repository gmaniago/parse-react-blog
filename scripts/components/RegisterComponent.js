var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var hasError = null;
		if(this.state.error) {
			hasError = (
				<p>{this.state.error}</p>
			);
		}
		return (
			<div className="registerBox">
				<form className="form" onSubmit={this.onRegister}>
					<h2 className="logRegister">Register</h2>
					<input type="text" ref="username" placeholder="UserName" /><br />
					<input type="email" ref="email" placeholder="Email Address" />
					<br />
					<input type="password" ref="password" placeholder="Password" />
					<br />
					<button>Register</button>
					{hasError}
				</form>
			</div>
			)
	},
	
	onRegister: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		user.signUp(
			{
				username: this.refs.username.value,
				password: this.refs.password.value,
				email: this.refs.email.value
			},
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
		this.refs.username.value = ''
		this.refs.password.value = ''
		this.refs.email.value = ''
	}


})



