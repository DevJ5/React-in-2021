import React, { Component } from 'react';
import ColorPanel from '../../Components/ColorPanel/ColorPanel';
import Painting from '../../Components/Painting/Painting';

export default class PaintingBuilder extends Component {
  state = {
    amounts: {
      yellow: 0,
      green: 0,
      blue: 0,
      red: 0,
      black: 0,
    },
    squares: [],
  };

  addSquareHandler = (color) => {
    const squares = [...this.state.squares];
    squares.push(color);
    this.setState({ squares });
    const amounts = { ...this.state.amounts };
    amounts[color] = amounts[color] + 1;
    this.setState({ amounts });
  };

  removeSquareHandler = (color) => {
    const squares = [...this.state.squares];
    const index = squares.lastIndexOf(color);
    if (index > -1) {
      squares.splice(index, 1);
      this.setState({ squares });
      const amounts = { ...this.state.amounts };
      amounts[color] = amounts[color] - 1;
      this.setState({ amounts });
    }
  };

  render() {
    return (
      <main>
        <Painting squares={this.state.squares}></Painting>
        <ColorPanel
          addSquare={this.addSquareHandler}
          removeSquare={this.removeSquareHandler}></ColorPanel>
      </main>
    );
  }
}
