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
		var content = <div>Loading</div>;

		if(this.state.post) {
			content = (
				<div className="postList">
					<h3 className="title">{this.state.post.get('title')}</h3>
					<div className="date">{this.state.post.get('date')}</div>
					<div className="body">{this.state.post.get('body')}</div>
					<div className="author">written by: {this.state.post.get('author')}</div>
					<div className="category">category: {this.state.post.get('category')}</div>

					<form id="post-comment-form">
		                <h4>Post your comment on this topic:</h4>
		                <input id="post-comment-id" type="hidden" value="" /><br />
		                <textarea id="post-comment"></textarea><br />
		                <button>Submit</button>
            		</form>
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