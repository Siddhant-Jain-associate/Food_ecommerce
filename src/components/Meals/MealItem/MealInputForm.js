
import PropTypes from 'prop-types';
import classes from './MealInputForm.module.css';
import { Input } from '../../UI';

const MealInputForm = (props) => {
  const { id } = props;
  const inputSettings = {
    id: `Amount_${id}`,
    type: 'number',
    defaultValue: '1',
    min: '1',
    max: '5',
  };
  return (
    <div className={classes.form}>
      <Input label="Quantity: " inputProps={inputSettings} />
      <button type="submit">+Add</button>
    </div>
  );
};

MealInputForm.propTypes = {
  id: PropTypes.string,
};
MealInputForm.defaultProps = {
  id: '',
};

export default MealInputForm;
