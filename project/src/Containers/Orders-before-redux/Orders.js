import React, { Component } from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get('/orders.json')
      .then((res) => {
        const orders = [];
        for (let key in res.data) {
          console.log(res.data);
          orders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    console.log(this.state.orders);
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
