import { useReducer } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

const defaultValue = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'ADD': {
      const updatedItems = [...state.items, action.item];
      const updatedTotalPrice = state.totalPrice + action.item.amount * action.item.price;
      return { items: updatedItems, totalPrice: updatedTotalPrice };
    }
    default:
      break;
  }

  return state;
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
