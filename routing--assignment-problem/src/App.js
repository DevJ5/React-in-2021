import React, { Component } from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';

import './App.css';
import NoMatch from './Components/NoMatch/NoMatch';

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
          <Switch>
            <Route path="/users" component={Users}></Route>
            {/* <Route path="/courses/:id" component={Course}></Route> */}
            <Route path="/courses" component={Courses}></Route>
            <Redirect from="/all-courses" to="/courses"></Redirect>
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
