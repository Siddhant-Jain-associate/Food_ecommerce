import PropTypes from 'prop-types';
import { CartIcon } from '../Cart';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {
  const { onClick } = props;
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  );
};

HeaderCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeaderCartButton;
