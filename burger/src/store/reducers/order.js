import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHECKOUT_INIT:
      return {
        ...state,
        purchased: false,
      };
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [...state.orders, payload],
        purchased: true,
      };
    case actionTypes.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SET_ORDERS:
      return {
        ...state,
        orders: payload,
        loading: false,
      };
    case actionTypes.FETCH_ORDERS_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
