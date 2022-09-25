import { useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './MealInputForm.module.css';
import Input from '../../UI';

const MealInputForm = (props) => {
  const amountInputRef = useRef();
  const { id, addAmount } = props;
  const inputSettings = {
    id: `Amount_${id}`,
    type: 'number',
    defaultValue: '1',
    min: '1',
    max: '5',
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const selectedQuantity = amountInputRef.current.value;
    addAmount(selectedQuantity);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input ref={amountInputRef} label="Quantity: " inputProps={inputSettings} />
      <button type="submit">+Add</button>
    </form>
  );
};

MealInputForm.propTypes = {
  id: PropTypes.string,
  addAmount: PropTypes.func.isRequired,
};
MealInputForm.defaultProps = {
  id: '',
};

export default MealInputForm;
