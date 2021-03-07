import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../../store/actions/actions';

import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Burger from '../../Components/Burger/Burger';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../../HOC/Auxiliary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/withErrorHandler';
import * as actionTypes from '../../store/actions/actions';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    isModalOpen: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get(
    //     'https://react-burger-7e198-default-rtdb.firebaseio.com/ingredients.json'
    //   )
    //   .then((res) => {
    //     this.setState(
    //       { ingredients: res.data },
    //       this.orderNowButtonStatusUpdate
    //     );
    //   })
    //   .catch((err) => {
    //     this.setState({ error: true });
    //   });
  }

  addIngredientHandler = (ingredientType) => {
    this.props.addIngredient(ingredientType);
    this.props.updateTotalPrice(INGREDIENT_PRICES[ingredientType]);
  };

  removeIngredientHandler = (ingredientType) => {
    if (this.props.ingredients[ingredientType] > 0) {
      this.props.removeIngredient(ingredientType);
      this.props.updateTotalPrice(-INGREDIENT_PRICES[ingredientType]);
    }
  };

  orderNowButtonStatusUpdate = () => {
    const ingredients = { ...this.props.ingredients };
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
    return sum <= 0;
  };

  toggleModalStatus = () => {
    this.setState((state) => ({
      isModalOpen: !state.isModalOpen,
    }));
  };

  purchaseCancelHandler = () => {
    this.toggleModalStatus();
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const removeButtonsDisabled = { ...this.props.ingredients };
    for (const key in removeButtonsDisabled) {
      removeButtonsDisabled[key] = removeButtonsDisabled[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.props.ingredients}
        totalPrice={this.props.totalPrice}
        purchaseCancel={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}></OrderSummary>
    );

    if (!this.props.ingredients || this.state.loading) {
      orderSummary = <Spinner></Spinner>;
    }

    let burger = (
      <Aux>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          removeButtonsDisabled={removeButtonsDisabled}
          orderNowButtonDisabled={this.orderNowButtonStatusUpdate()}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          totalPrice={this.props.totalPrice}
          toggleModalStatus={this.toggleModalStatus}
        />
      </Aux>
    );

    if (!this.props.ingredients) {
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
          toggleModalStatus={this.toggleModalStatus}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredientType) => dispatch(addIngredient(ingredientType)),
    removeIngredient: (ingredientType) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        payload: ingredientType,
      }),
    updateTotalPrice: (price) =>
      dispatch({ type: actionTypes.UPDATE_PRICE, payload: price }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
