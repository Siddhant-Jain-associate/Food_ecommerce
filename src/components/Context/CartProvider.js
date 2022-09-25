import { useReducer } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

const defaultValue = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type } = action;
  let updatedItems;
  switch (type) {
    case 'ADD': {
      const updatedTotalPrice = state.totalPrice + action.item.amount * action.item.price;
      const existingItems = state.items;
      const existingItemIndex = existingItems.findIndex(item => item.id === action.item.id);
      if (existingItemIndex !== -1) {
        const existingItem = existingItems[existingItemIndex];
        existingItems[existingItemIndex] = {
          ...existingItem, amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...existingItems];
      } else {
        updatedItems = [...existingItems, action.item];
      }
      return { items: updatedItems, totalPrice: updatedTotalPrice };
    }
    case 'REMOVE': {
      const existingItems = state.items;
      const removeItemIndex = existingItems.findIndex(item => item.id === action.id);
      if (existingItems[removeItemIndex].amount === 1) {
        updatedItems = existingItems.filter(item => item.id !== action.id);
      } else {
        const removeItem = existingItems[removeItemIndex];
        existingItems[removeItemIndex] = { ...removeItem, amount: removeItem.amount - 1 };
        updatedItems = [...existingItems];
      }
      const updatedTotalPrice = state.totalPrice - existingItems[removeItemIndex].price;
      return { items: updatedItems, totalPrice: updatedTotalPrice };
    }
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const { children } = props;
  const [state, cartDispatchFunction] = useReducer(cartReducer, defaultValue);

  const addCartItemHandler = (item) => {
    cartDispatchFunction({ type: 'ADD', item });
  };
  const removeCartItemHandler = (id) => {
    cartDispatchFunction({ type: 'REMOVE', id });
  };

  const defaultContextValue = {
    items: state.items,
    totalPrice: state.totalPrice,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={defaultContextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.element])).isRequired,
};

export default CartProvider;
