import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
            </ul>
          </nav>
          <Route path="/users" component={Users}></Route>
          <Route path="/courses" component={Courses}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
