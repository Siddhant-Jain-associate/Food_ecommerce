import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartIcon } from '../Cart';
import classes from './HeaderCartButton.module.css';
import { CartContext } from '../Context';


const HeaderCartButton = (props) => {
  const [isShowBump, setIsShowBump] = useState(false);
  const { onClick } = props;
  const { items } = useContext(CartContext);

  useEffect(() => {
    if (!items.length) { return; }
    setIsShowBump(true);
    const timer = setTimeout(() => {
      setIsShowBump(false);
    }, 300);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const totalQuantityInCart = items.reduce((currNumber, item) => currNumber + item.amount, 0);

  const buttonClass = `${classes.button} ${isShowBump && classes.bump}`;
  return (
    <button type="button" className={buttonClass} onClick={onClick}>
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
