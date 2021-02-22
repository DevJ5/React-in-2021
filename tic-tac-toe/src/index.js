import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => {
  return (
    <button className="square" onClick={props.clickSquare}>
      {props.value}
    </button>
  );
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: 'X',
    };
  }

  renderSquare(value) {
    return (
      <Square
        value={this.state.squares[value]}
        clickSquare={() => this.handleClickSquare(value)}
      />
    );
  }

  handleClickSquare = (value) => {
    const squares = [...this.state.squares];
    squares[value] = this.state.currentPlayer;
    this.setState((prevState) => {
      return {
        squares,
        currentPlayer: prevState.currentPlayer === 'X' ? 'O' : 'X',
      };
    });
  };

  calculateWinner() {}

  render() {
    const status = `Next player: ${
      this.state.currentPlayer === 'X' ? 'X' : 'O'
    }`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
