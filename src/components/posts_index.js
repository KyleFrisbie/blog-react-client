import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    this.props.posts.map((post) => {
      return (
        <li key={post.id}>
          {post.title}
        </li>
      );
    });
  }


  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
