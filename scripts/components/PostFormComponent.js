var React = require('react');
var ReactDOM = require('react-dom');
var PostModel = require('../models/PostModel.js');
var moment = require('moment')

module.exports = React.createClass({

	render: function() {
		return (
			<div>			
				<form className="postForm" onSubmit={this.onAddPost}>
					<h2 className="pageHeader">Post Form</h2>
					<input type="text" ref="title" placeholder="title" />
					<br />
					<textarea ref="body" placeholder="write your post here..."></textarea>
					<br />
					<input type="text" ref="author" placeholder="author" />
					<br />
					<div className="category">
						<label htmlFor="categories">Category</label><br />
							<select className="form-control" id="type" ref="category">
								<option value="Books">Books</option>
								<option value="Coffee">Coffee</option>
								<option value="Music">Music</option>
								<option value="Events">Events</option>
								<option value="Everything Else">Everything Else</option>
							</select>
					</div>					
					<button>Add Post</button>
				</form>
			</div>
			)
	},
	onAddPost: function(e) {
		e.preventDefault();
		var newPost = new PostModel({
			title: this.refs.title.value,
			body: this.refs.body.value,
			author: this.refs.author.value,
			category: this.refs.category.value,
			date: moment().format('MMMM Do YYYY')
		});

		newPost.save();
		console.log('post saved');
	}


})



