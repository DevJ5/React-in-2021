import React, { useContext } from 'react';

interface CartContextInterface {
  items: CartItemInterface[];
  totalAmount: number;
  addItem: (item: CartItemInterface) => void;
  removeItem: (id: CartItemInterface['id']) => void;
  clearCart: () => void;
}

export interface CartItemInterface {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const CartContext = React.createContext<CartContextInterface>(null!);

// Custom hook to check whether we are inside a provider:
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error('useCartContext must be used within CartContextProvider');

  return context;
};

export default CartContext;
