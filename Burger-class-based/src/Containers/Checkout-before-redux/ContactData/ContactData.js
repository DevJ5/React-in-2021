import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Input from '../../../Components/UI/Input/Input';

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
        { required: true },
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
        { required: true, minLength: 4, maxLength: 6 },
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
    loading: false,
    isValidForm: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key]['value'];
    }

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: formData,
    };

    axios
      .post('/orders.json', order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => this.setState({ loading: false }));
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
    console.log(this.state);
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({ ...this.state.orderForm[key], id: key });
    }
    let form = (
      <React.Fragment>
        <h4>Enter your contact data</h4>
        <form action="">
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
          <Button
            btnType="Success"
            clicked={this.orderHandler}
            disabled={!this.state.isValidForm}>
            ORDER
          </Button>
        </form>
      </React.Fragment>
    );

    if (this.state.loading) form = <Spinner></Spinner>;
    return <div className={classes.ContactData}>{form}</div>;
  }
}

export default ContactData;
