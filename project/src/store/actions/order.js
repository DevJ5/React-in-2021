import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const checkoutInit = () => {
  return {
    type: actionTypes.CHECKOUT_INIT,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData) => (dispatch) => {
  dispatch(purchaseBurgerStart());
  axios
    .post('/orders.json', orderData)
    .then((res) => {
      dispatch(purchaseBurgerSuccess(res.data.name, orderData));
    })
    .catch((error) => dispatch(purchaseBurgerFailed(error)));
};

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    payload: { id, ...orderData },
  };
};

export const purchaseBurgerFailed = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    payload: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = () => (dispatch) => {
  dispatch(fetchOrdersStart());
  axios
    .get('/orders.json')
    .then((res) => {
      const orders = [];
      for (let key in res.data) {
        const order = { id: key, ...res.data[key] };
        orders.push(order);
      }
      dispatch(setOrders(orders));
    })
    .catch((error) => dispatch(fetchOrdersFailed(error)));
};

export const setOrders = (orders) => {
  return {
    type: actionTypes.SET_ORDERS,
    payload: orders,
  };
};

export const fetchOrdersFailed = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
  };
};
