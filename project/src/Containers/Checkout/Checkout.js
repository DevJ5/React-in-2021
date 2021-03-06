import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  // The old willMount is now the same as the contructor, basically it means before rendering any
  // child components. didMount happens after rendering child components, thats why it doesnt work.
  constructor(props) {
    super(props);
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totalPrice;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        totalPrice = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.state = {
      ingredients,
      totalPrice,
    };
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    console.log(this.state.totalPrice);
    this.props.history.replace(this.props.match.url + '/contact-data');
  };

  render() {
    console.log('render');
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}></CheckoutSummary>
        <Route
          path={this.props.match.url + '/contact-data'}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...this.props}
            />
          )}></Route>
      </div>
    );
  }
}
export default Checkout;
