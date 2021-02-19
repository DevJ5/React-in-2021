import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [
      {
        userId: 0,
        id: 0,
        title: 'a',
        body: 'b',
        author: 'Alex',
      },
    ],
    selectedPost: null,
  };

  componentDidMount = () => {
    console.log('component did mount runs.');

    const request = axios.get('https://jsonplaceholder.typicode.com/posts/1');
    request.then((res) => {
      this.setState({
        posts: [...this.state.posts, { ...res.data, author: 'Francine' }],
      });
    });

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => res.text())
    //   .then((data) => null);
  };

  selectPostHandler(id) {
    this.setState({ selectedPost: id });
  }

  render() {
    const posts = this.state.posts.map((post) => (
      <Post
        title={post.title}
        key={post.id}
        selectPost={this.selectPostHandler.bind(this, post.id)}></Post>
    ));
    console.log('render runs.');
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost
            post={this.state.posts.find(
              (post) => post.id === this.state.selectedPost
            )}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
