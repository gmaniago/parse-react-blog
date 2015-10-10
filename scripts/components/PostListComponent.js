var React = require('react');
var ReactDOM = require('react-dom');
var PostModel = require('../models/PostModel.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			post: null
		}
	},
	componentWillMount: function() {
		var query = new Parse.Query(PostModel);
		query
		.get(this.props.postId)
		.then(
			(post) => {
				this.setState({post: post});
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {
		var content = <div>Loading...</div>;

		if(this.state.post) {
			content = (
				<div className="postList">
					<h2 className="title">{this.state.post.get('title')}</h2>
					<div className="date">{this.state.post.get('date')}</div>
					<div className="body">{this.state.post.get('body')}</div>
					<div className="author">{this.state.post.get('author')}</div>
					<div className="category">Category: {this.state.post.get('category')}</div>
				</div>
			)
		}
		return(
			<div>
				{content}
			</div>
		)
	}
})