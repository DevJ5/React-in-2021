import React, { Component } from 'react';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    console.log('Blog render runs');
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{ textDecoration: 'underline' }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts></Posts>} /> */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
