import React, { Component } from 'react';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  state = {
    auth: false,
  };
  render() {
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
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>}></Route>
          {/* <Redirect from="/" to="/posts"></Redirect> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
