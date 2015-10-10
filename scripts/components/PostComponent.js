var React = require('react');
var ReactDOM = require('react-dom');
var PostModel = require('../models/PostModel.js');

module.exports = React.createClass({
	getInitialState: function() {
		return{
			posts: []
		};
	},
	componentWillMount: function() {
		var query = new Parse.Query(PostModel);
		query
		.descending('createdAt')
		.find()
		.then(
			(posts) => {
				this.setState({posts: posts});
			},
			(err) => {
				console.log(err)
			}
		)

	},
	render: function() {
		var postContent = this.state.posts.map(function(post) {
			return (
				<a className="allPost" href={'#post/details/' + post.id}>
					<div className="singlePost">
						<div className="title">{post.get('title')}</div>
						<div className="body">{post.get('body').substr(0, 140)}</div>
						<div>{post.get('date')}</div>
					</div>
				</a>
			)
		})
		return (
			<div>
				{postContent}
			</div>
			)
	}


})


