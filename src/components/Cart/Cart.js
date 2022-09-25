import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../UI';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { CartContext } from '../Context';

const Cart = (props) => {
  const { onClose } = props;
  const { items, totalPrice } = useContext(CartContext);
  const cartItem = items.map((dishesInCart) => {
    const {
      name, price, id, amount,
    } = dishesInCart;
    return (
      <CartItem
        id={id}
        key={id}
        name={name}
        price={price}
        amount={amount}
      />
    );
  });
  const totalFormattedPrice = `₹ ${totalPrice.toFixed(2)}`;

  return (
    <Modal onClick={onClose}>
      <ul className={classes['cart-items']}>{cartItem}</ul>
      <div className={classes.total}>
        <div>TotalPrice</div>
        <div>{totalFormattedPrice}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} type="button" onClick={onClose}>Close</button>
        {items.length > 0 && <button className={classes.button} type="button">Order</button>}
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
