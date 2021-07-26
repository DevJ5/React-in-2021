import { useReducer } from 'react';
import { ICartItem } from '../components/Interfaces';

import CartContext from './cart-context';

enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

interface AddItemAction {
  type: ActionTypes.ADD_ITEM;
  payload: ICartItem;
}

interface RemoveItemAction {
  type: ActionTypes.REMOVE_ITEM;
  payload: ICartItem['id'];
}

type Action = AddItemAction | RemoveItemAction;

interface IDefaultCartState {
  items: ICartItem[];
  totalAmount: number;
}

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: IDefaultCartState, action: Action) => {
  if (action.type === ActionTypes.ADD_ITEM) {
    const updatedItems = state.items.concat(action.payload);
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider: React.FC = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: ICartItem) => {
    dispatchCartAction({ type: ActionTypes.ADD_ITEM, payload: item });
  };

  const removeItemFromCartHandler = (id: ICartItem['id']) => {
    dispatchCartAction({ type: ActionTypes.REMOVE_ITEM, payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
