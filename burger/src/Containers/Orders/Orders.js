import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    let orders = <Spinner></Spinner>;
    if (this.props.orders && !this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order key={order.id} order={order} />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(actions.fetchOrders()),
    setOrders: () => dispatch(actions.setOrders()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
