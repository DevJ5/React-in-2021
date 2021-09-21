import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: '',
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        console.log(res);
        this.setState({ lat: res.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err })
    );
  }

  static getDerivedStateFromProps() {
    console.log('derived');
  }

  shouldComponentUpdate() {
    console.log('should');
    return true;
  }
  componentDidUpdate() {
    console.log('update');
  }

  renderContent() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.errorMessage) {
      return <div>{this.state.errorMessage}</div>;
    }
    if (!this.state.lat && !this.state.errorMessage) {
      return <Spinner message=""></Spinner>;
    }
  }

  render() {
    console.log('render');
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

export default App;
