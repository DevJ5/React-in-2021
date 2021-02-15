import React, { Component } from 'react';
import Painting from '../../Components/Painting/Painting';

export default class PaintingBuilder extends Component {
  state = {
    squares: {
      yellow: 1,
      green: 1,
      blue: 1,
      red: 1,
      black: 1,
    },
  };

  render() {
    return (
      <div>
        <Painting squares={this.state.squares}></Painting>
        <div>Color panel</div>
      </div>
    );
  }
}
