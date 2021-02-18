import React, { Component } from 'react';
import ColorPanel from '../../Components/ColorPanel/ColorPanel';
import OrderSummary from '../../Components/ColorPanel/OrderSummary/OrderSummary';
import Painting from '../../Components/Painting/Painting';
import Modal from '../../Components/UI/Modal/Modal';

const SQUARE_PRICES = {
  yellow: 500,
  green: 600,
  blue: 400,
  red: 400,
  black: 100,
};

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
    totalPrice: 0,
    isModalOpen: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps runs', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js componentDidMount runs.');
  }

  addSquareHandler = (color) => {
    const squares = [...this.state.squares];
    squares.push(color);
    this.setState({ squares });
    const amounts = { ...this.state.amounts };
    amounts[color] = amounts[color] + 1;
    this.setState({ amounts });
    const newTotalPrice = this.state.totalPrice + SQUARE_PRICES[color];
    this.setState({ totalPrice: newTotalPrice });
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
      const newTotalPrice = this.state.totalPrice - SQUARE_PRICES[color];
      this.setState({ totalPrice: newTotalPrice });
    }
  };

  toggleModalHandler = () => {
    this.setState((state) => {
      return {
        isModalOpen: !state.isModalOpen,
      };
    });
  };

  purchasePaintingHandler = () => {
    alert('Painting purchased.');
    this.toggleModalHandler();
  };

  render() {
    return (
      <main>
        <Painting squares={this.state.squares}></Painting>
        <ColorPanel
          totalPrice={this.state.totalPrice}
          addSquare={this.addSquareHandler}
          removeSquare={this.removeSquareHandler}
          toggleModal={this.toggleModalHandler}></ColorPanel>
        <Modal
          isOpen={this.state.isModalOpen}
          toggleModal={this.toggleModalHandler}>
          <OrderSummary
            toggleModal={this.toggleModalHandler}
            purchasePainting={this.purchasePaintingHandler}></OrderSummary>
        </Modal>
      </main>
    );
  }
}
