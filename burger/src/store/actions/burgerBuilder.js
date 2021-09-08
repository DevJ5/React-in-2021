import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingredientName) => ({
  type: actionTypes.ADD_INGREDIENT,
  payload: ingredientName,
});

export const removeIngredient = (ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: ingredientName,
  };
};

export const updateTotalPrice = (price) => {
  return {
    type: actionTypes.UPDATE_TOTAL_PRICE,
    payload: price,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => (dispatch) => {
  axios
    .get(
      'https://react-burger-7e198-default-rtdb.firebaseio.com/ingredients.json'
    )
    .then((res) => {
      dispatch(setIngredients(res.data));
    })
    .catch((err) => {
      dispatch(fetchIngredientsFailed());
    });
};
