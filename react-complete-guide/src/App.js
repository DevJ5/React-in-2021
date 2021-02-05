import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './UserOutput/ValidationComponent';
import UserOutput from './UserOutput/UserOutput';
import CharComponent from './UserOutput/CharComponent'

class App extends Component {
  state = {
    input: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  onDeleteHandler = (e, index) => {
    let str = this.state.input;
    const part1 = str.substring(0, index);
    const part2 = str.substring(index + 1, str.length)
    this.setState({ input: part1 + part2 })
  }

  render() {
    const chars = this.state.input.split("").map((char, index) => <CharComponent value={char} onDelete={(e) => this.onDeleteHandler(e, index)} key={index} />)
    return (
      <div className="App">
        <UserInput change={this.onChangeHandler} input={this.state.input} />
        <UserOutput length={this.state.input.length} />
        <ValidationComponent length={this.state.input.length} />
        {chars}
      </div>
    );
  }
}

export default App;
