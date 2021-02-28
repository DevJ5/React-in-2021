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
    ingredients: null,
    totalPrice: 4,
    isOrderNowButtonDisabled: true,
    isModalOpen: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get(
        'https://react-burger-7e198-default-rtdb.firebaseio.com/ingredients.json'
      )
      .then((res) => {
        this.setState(
          { ingredients: res.data },
          this.orderNowButtonStatusUpdate
        );
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

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
    // this.setState({ loading: true });

    // const order = {
    //   ingredients: this.state.ingredients,
    //   totalPrice: this.state.totalPrice,
    //   customer: {
    //     name: 'Bert',
    //     address: {
    //       street: 'teststreet 1',
    //       zipCode: '2342',
    //       country: 'Holland',
    //     },
    //     email: 'test@mail.com',
    //     deliveryMethod: 'fastest',
    //   },
    // };
    // axios
    //   .post('/orders.jsons', order)
    //   .then((res) => {
    //     this.setState({ loading: false, isModalOpen: false });
    //   })
    //   .catch((err) => this.setState({ loading: false }));
    const queryParams = [];
    for (let ingredient in this.state.ingredients) {
      queryParams.push(
        `${encodeURIComponent(ingredient)}=${encodeURIComponent(
          this.state.ingredients[ingredient]
        )}`
      );
    }
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`,
    });
  };

  render() {
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

    if (!this.state.ingredients || this.state.loading) {
      orderSummary = <Spinner></Spinner>;
    }

    let burger = (
      <Aux>
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

    if (!this.state.ingredients) {
      if (this.state.error) {
        burger = <p>An error has occured fetching data</p>;
      } else {
        burger = <Spinner></Spinner>;
      }
    }

    return (
      <Aux>
        <Modal
          isModalOpen={this.state.isModalOpen}
          updateModalStatus={this.updateModalStatus}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
