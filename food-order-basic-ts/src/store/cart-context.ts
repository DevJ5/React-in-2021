import React from 'react';

interface CartContextInterface {
  items: CartItemInterface[];
  totalAmount: number;
  addItem: (item: CartItemInterface) => void;
  removeItem: (id: CartItemInterface['id']) => void;
}

export interface CartItemInterface {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const CartContext = React.createContext<CartContextInterface>(null!);

export default CartContext;
