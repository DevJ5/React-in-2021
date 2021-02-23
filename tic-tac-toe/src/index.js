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
  renderSquare(value) {
    return (
      <Square
        value={this.props.squares[value]}
        clickSquare={() => this.props.clickSquare(value)}
      />
    );
  }

  render() {
    return (
      <div>
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
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      turn: 0,
      winner: null,
    };
  }

  handleClickSquare = (value) => {
    let history = this.state.history;
    console.log(history);
    // Are we at the last turn?
    if (this.state.turn === history.length - 1) {
      if (this.state.winner) return false;
    } else {
      history = history.slice(0, this.state.turn + 1);
      console.log(history);
    }

    const current = history[history.length - 1];
    const squares = [...current.squares];
    squares[value] = this.state.xIsNext ? 'X' : 'O';
    this.setState(
      (prevState) => ({
        history: history.concat([{ squares }]),
        xIsNext: !prevState.xIsNext,
        turn: prevState.turn + 1,
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
      const currentStep = this.state.history[this.state.history.length - 1];
      const [a, b, c] = winningLines[i];
      if (
        currentStep.squares[a] &&
        currentStep.squares[a] === currentStep.squares[b] &&
        currentStep.squares[b] === currentStep.squares[c]
      ) {
        return currentStep.squares[a];
      }
    }
    return null;
  }

  jumpToTurnHandler = (turn) => {
    this.setState({ turn, xIsNext: turn % 2 === 0 });
  };

  render() {
    let status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    if (this.state.winner) status = `Winner: ${this.state.winner}`;

    const turns = this.state.history.map((_, turn) => {
      let text = `Go to turn #${turn}`;
      if (turn === 0) text = 'Go to game start';
      return (
        <li key={turn}>
          <button onClick={() => this.jumpToTurnHandler(turn)}>{text}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.history[this.state.turn].squares}
            clickSquare={this.handleClickSquare}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{turns}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
