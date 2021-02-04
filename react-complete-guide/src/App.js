import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: "Bert"
  }

  updateUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} updateUsername={this.updateUsername} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
