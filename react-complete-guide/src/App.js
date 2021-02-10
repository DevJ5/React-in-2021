import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './UserOutput/ValidationComponent';
import UserOutput from './UserOutput/UserOutput';
import CharComponent from './UserOutput/CharComponent'

class App extends Component {
  constructor(props) {
    console.log("App.js constructor runs.")
    super(props);
    this.state = {
      input: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps runs", props);
    return state;
  }


  componentDidMount() {
    console.log("App.js componentDidMount runs.")
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
    console.log("App.js render runs.")
    const chars = this.state.input.split("").map((char, index) => <CharComponent value={char} onDelete={(e) => this.onDeleteHandler(e, index)} key={index} />)
    return (

      <div className={classes.App}>
        <UserInput change={this.onChangeHandler} input={this.state.input} />
        <UserOutput length={this.state.input.length} />
        <ValidationComponent length={this.state.input.length} />
        {chars}
      </div>
    );
  }
}

export default App;
