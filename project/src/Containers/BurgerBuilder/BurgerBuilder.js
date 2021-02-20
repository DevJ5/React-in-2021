import React, { Component } from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Burger from '../../Components/Burger/Burger';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../../HOC/Auxiliary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    isOrderNowButtonDisabled: true,
    isModalOpen: false,
    loading: false,
  };

  addIngredientHandler = (type) => {
    const newAmount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newAmount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState(
      { ingredients: updatedIngredients, totalPrice: newPrice },
      this.orderNowButtonStatusUpdate
    );
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newAmount = this.state.ingredients[type] - 1;
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = newAmount;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState(
        { ingredients: updatedIngredients, totalPrice: newPrice },
        this.orderNowButtonStatusUpdate
      );
    }
  };

  orderNowButtonStatusUpdate = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
    this.setState({ isOrderNowButtonDisabled: sum <= 0 });
  };

  updateModalStatus = () => {
    this.setState((state) => {
      return {
        isModalOpen: !state.isModalOpen,
      };
    });
  };

  purchaseCancelHandler = () => {
    this.updateModalStatus();
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        name: 'Bert',
        address: {
          street: 'teststreet 1',
          zipCode: '2342',
          country: 'Holland',
        },
        email: 'test@mail.com',
        deliveryMethod: 'fastest',
      },
    };
    axios
      .post('/orders.jsonss', order)
      .then((res) => {
        this.setState({ loading: false, isModalOpen: false });
      })
      .catch((err) => this.setState({ loading: false }));
  };

  render() {
    console.log('in render');
    const removeButtonsDisabled = { ...this.state.ingredients };
    for (const key in removeButtonsDisabled) {
      removeButtonsDisabled[key] = removeButtonsDisabled[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
        purchaseCancel={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}></OrderSummary>
    );

    if (this.state.loading) {
      orderSummary = <Spinner></Spinner>;
    }

    return (
      <Aux>
        <Modal
          isModalOpen={this.state.isModalOpen}
          updateModalStatus={this.updateModalStatus}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          removeButtonsDisabled={removeButtonsDisabled}
          orderNowButtonDisabled={this.state.isOrderNowButtonDisabled}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          updateModalStatus={this.updateModalStatus}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
