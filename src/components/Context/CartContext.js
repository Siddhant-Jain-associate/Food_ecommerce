import React from 'react';

const defaultCartData = {
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
};

const cartContext = React.createContext(defaultCartData);

export default cartContext;
