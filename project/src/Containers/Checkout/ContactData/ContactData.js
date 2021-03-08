import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';
import withErrorHandler from '../../../HOC/withErrorHandler';
import * as orderActions from '../../../store/actions/index';

const createOrderFormObject = (
  tag,
  elementConfig,
  value,
  validationRules,
  isValid,
  isTouched
) => {
  return { tag, elementConfig, value, validationRules, isValid, isTouched };
};

class ContactData extends Component {
  state = {
    orderForm: {
      name: createOrderFormObject(
        'input',
        { type: 'text', placeholder: 'Your name' },
        '',
        { required: true },
        false,
        false
      ),
      email: createOrderFormObject(
        'input',
        { type: 'email', placeholder: 'Your email' },
        '',
        { required: true, isEmail: true },
        false,
        false
      ),
      street: createOrderFormObject(
        'input',
        { type: 'text', placeholder: 'Your streetname' },
        '',
        { required: true },
        false,
        false
      ),
      postalCode: createOrderFormObject(
        'input',
        { type: 'text', placeholder: 'Your postalcode' },
        '',
        { required: true, minLength: 4, maxLength: 6, isNumeric: true },
        false,
        false
      ),
      country: createOrderFormObject(
        'input',
        { type: 'text', placeholder: 'Your country' },
        '',
        { required: true },
        false,
        false
      ),
      deliveryMethod: createOrderFormObject(
        'select',
        {
          options: [
            { value: 'cheapest', displayName: 'Cheapest' },
            { value: 'fastest', displayName: 'Fastest' },
          ],
        },
        'cheapest',
        {},
        true,
        false
      ),
    },
    isValidForm: false,
  };

  orderHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key]['value'];
    }

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: formData,
    };

    this.props.purchaseBurger(order);
  };

  checkValidity(value, validationRules) {
    let isValid = true;
    if (!validationRules) return isValid;

    if (validationRules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (validationRules.minLength) {
      isValid = value.length >= validationRules.minLength && isValid;
    }
    if (validationRules.maxLength) {
      isValid = value.length <= validationRules.maxLength && isValid;
    }
    if (validationRules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (validationRules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }

  formDataChangeHandler = (e, id) => {
    // Deep clone
    const updatedForm = {
      ...this.state.orderForm,
    };
    const updatedElement = {
      ...updatedForm[id],
    };
    updatedElement.value = e.target.value;
    updatedElement.isValid = this.checkValidity(
      e.target.value,
      updatedElement.validationRules
    );

    updatedElement.isTouched = true;

    updatedForm[id] = updatedElement;

    let isValidForm = true;
    for (let key in updatedForm) {
      isValidForm = isValidForm && updatedForm[key].isValid;
    }
    this.setState({ orderForm: updatedForm, isValidForm });
  };

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({ ...this.state.orderForm[key], id: key });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map((el) => {
          return (
            <Input
              key={el.id}
              tag={el.tag}
              value={el.value}
              elementConfig={el.elementConfig}
              isValid={el.isValid}
              shouldValidate={el.validationRules !== undefined}
              isTouched={el.isTouched}
              change={(e) => this.formDataChangeHandler(e, el.id)}
            />
          );
        })}
        <Button btnType="Success" disabled={!this.state.isValidForm}>
          ORDER
        </Button>
      </form>
    );

    if (this.props.loading) form = <Spinner></Spinner>;

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
  };
};

export default connect(mapStateToProps, {
  purchaseBurger: orderActions.purchaseBurger,
})(withErrorHandler(ContactData, axios));
