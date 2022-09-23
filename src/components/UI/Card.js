import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.css';

const Card = (props) => {
  const { children } = props;
  return (
    <div className={classes.card}>{children}</div>
  );
};

Card.propTypes = {
  children: PropTypes.instanceOf(HTMLElement),
};
Card.defaultProps = {
  children: <h1>No List Found!!</h1>,
};

export default Card;
