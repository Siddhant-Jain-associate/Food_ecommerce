import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './CartItem.module.css';
import { CartContext } from '../Context';

const CartItem = (props) => {
  const {
    name, price, amount, id,
  } = props;
  const { addItem, removeItem } = useContext(CartContext);
  return (
    <li>
      <div className={classes['cart-item']}>
        <div>
          <h2>{name}</h2>
          <div className={classes.summary}>
            <div className={classes.price}>{`₹ ${price.toFixed(2)}`}</div>
            <div className={classes.amount}>{`x ${amount}`}</div>
          </div>
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            onClick={addItem.bind(null,
              {
                name, price, amount: 1, id,
              })}
          >
            +
          </button>
          <button type="button" onClick={removeItem.bind(null, id)}>-</button>
        </div>
      </div>
    </li>
  );
};


CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartItem;
