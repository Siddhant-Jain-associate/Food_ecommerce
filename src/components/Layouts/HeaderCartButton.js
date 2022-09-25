import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartIcon } from '../Cart';
import classes from './HeaderCartButton.module.css';
import { CartContext } from '../Context';


const HeaderCartButton = (props) => {
  const { onClick } = props;
  const { items } = useContext(CartContext);
  const totalQuantityInCart = items.reduce((currNumber, item) => currNumber + item.amount, 0);
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        {totalQuantityInCart}
      </span>
    </button>
  );
};

HeaderCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeaderCartButton;
