import PropTypes from 'prop-types';
import { Modal } from '../UI';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { onClose } = props;
  const cartItemList = [{
    name: 'ShahiPaneer', price: 299.00, id: 'm_5', description: 'Indian Dish',
  }];
  const cartItem = cartItemList.map(dishesInCart => (
    <li key={dishesInCart.id}>{dishesInCart.name}</li>
  ));

  return (
    <Modal onClick={onClose}>
      <ul className={classes['cart-items']}>{cartItem}</ul>
      <div className={classes.total}>
        <div>TotalPrice</div>
        <div>₹599.00</div>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} type="button" onClick={onClose}>Close</button>
        <button className={classes.button} type="button">Order</button>
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
