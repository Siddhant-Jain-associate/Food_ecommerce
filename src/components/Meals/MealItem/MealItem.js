import React from 'react';
import PropTypes from 'prop-types';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const { name, description, price } = props;
  const formattedPrice = `₹ ${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
    </li>
  );
};

MealItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
MealItem.defaultProps = {
  name: 'ShahiPaneer',
  description: 'Indian Dish',
  price: 299.00,
};
export default MealItem;
