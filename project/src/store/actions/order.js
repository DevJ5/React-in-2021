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
      console.log(res.data);
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
