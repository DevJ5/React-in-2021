import React from 'react';
import { ICartContext } from '../components/Interfaces';

const initialState: ICartContext = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartContext = React.createContext(initialState);

export default CartContext;
