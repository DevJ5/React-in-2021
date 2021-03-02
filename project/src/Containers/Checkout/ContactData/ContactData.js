import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
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
      .post('/orders.json', order)
      .then((res) => {
        console.log('response retrieved.');
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => this.setState({ loading: false }));
  };
  render() {
    console.log(this.props);
    let form = (
      <React.Fragment>
        <h4>Enter your contact data</h4>
        <form action="">
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Your street" />
          <input type="text" name="postal" placeholder="Your postal code" />
          <Button btnType="Success" clicked={this.orderHandler}>
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
