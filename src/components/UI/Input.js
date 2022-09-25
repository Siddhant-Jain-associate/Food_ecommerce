
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
  const { inputProps: { id, ...inputProps }, label } = props;
  return (
    <div className={classes.input}>
      <label htmlFor={id}>
        {label}
        <input ref={ref} id={id} {...inputProps} />
      </label>
    </div>
  );
});

Input.propTypes = {
  inputProps: PropTypes.objectOf(PropTypes.string),
  label: PropTypes.string,
};
Input.defaultProps = {
  inputProps: {
    id: 'amount_1',
  },
  label: '',
};

export default Input;
