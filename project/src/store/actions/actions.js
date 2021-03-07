export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const UPDATE_PRICE = 'UPDATE_PRICE';

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
});
