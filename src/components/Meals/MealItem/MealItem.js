import { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './MealItem.module.css';
import MealInputForm from './MealInputForm';
import { CartContext } from '../../Context';

const MealItem = (props) => {
  const {
    id, name, description, price,
  } = props;
  const formattedPrice = `₹ ${price.toFixed(2)}`;
  const { addItem } = useContext(CartContext);
  const addAmount = (amount) => {
    const updatedAmount = +amount;
    addItem({
      id,
      name,
      description,
      price,
      amount: updatedAmount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealInputForm id={id} addAmount={addAmount} />
      </div>
    </li>
  );
};

MealItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
MealItem.defaultProps = {
  id: '',
  name: 'ShahiPaneer',
  description: 'Indian Dish',
  price: 299.00,
};
export default MealItem;
