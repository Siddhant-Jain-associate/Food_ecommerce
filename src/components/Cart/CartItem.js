import React from 'react';
import PropTypes from 'prop-types';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const {
    name, price, amount,
  } = props;
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
          <button type="button">+</button>
          <button type="button">-</button>
        </div>
      </div>
    </li>
  );
};


CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
};

export default CartItem;
