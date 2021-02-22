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
      winner: null,
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
    if (this.state.winner) return false;
    const squares = [...this.state.squares];
    squares[value] = this.state.currentPlayer;
    this.setState(
      (prevState) => ({
        squares,
        currentPlayer: prevState.currentPlayer === 'X' ? 'O' : 'X',
      }),
      () => {
        const winner = this.calculateWinner();
        if (winner) this.setState({ winner });
      }
    );
  };

  calculateWinner() {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        this.state.squares[a] &&
        this.state.squares[a] === this.state.squares[b] &&
        this.state.squares[b] === this.state.squares[c]
      ) {
        return this.state.squares[a];
      }
    }
    return null;
  }

  render() {
    let status = `Next player: ${this.state.currentPlayer === 'X' ? 'X' : 'O'}`;
    if (this.state.winner) status = `Winner: ${this.state.winner}`;

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
