import React from 'react';
import { MOCK_MEALS } from './mocks';
import classes from './AvailableMeals.module.css';
import { MealItem } from './MealItem';
import { Card } from '../UI';

const AvailableMeals = () => {
  const mealsList = MOCK_MEALS.map((meal) => {
    const { name, description, price } = meal;
    return (
      <MealItem
        name={name}
        description={description}
        price={price}
      />
    );
  });
  return (
    <div className={classes.meals}>
      <ul>
        <Card>{mealsList}</Card>

      </ul>
    </div>
  );
};

export default AvailableMeals;
