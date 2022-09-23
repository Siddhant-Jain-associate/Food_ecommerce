import React from 'react';
import classes from './MealSummary.module.css';

const MealSummary = () => (
  <div className={classes.summary}>
    <h3>Delicious Meals, Delivered to You</h3>
    <p>
      Choose your favorite meal from our broad selection of available meals
      and enjoy a delicious lunch or dinner at home.
    </p>
    <p>
      All our meals are cooked with high-quality ingredients, just-in-time and
      of course by experienced chefs!
    </p>
  </div>
);

export default MealSummary;
