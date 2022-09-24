/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const BackDrop = (props) => {
  const { onClick } = props;
  return (
    <div
      className={classes.backdrop}
      onClick={onClick}
    />
  );
};
const Modal = (props) => {
  const { children } = props;
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};


const Modals = (props) => {
  const { onClick } = props;
  const modalRoot = document.getElementById('modal-root');
  const { children } = props;

  return (
    <>
      {ReactDom.createPortal(<BackDrop onClick={onClick} />, modalRoot)}
      {ReactDom.createPortal(<Modal onClick={onClick}>{children}</Modal>, modalRoot)}
    </>
  );
};

Modals.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onClick: PropTypes.func.isRequired,
};
Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
BackDrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Modals;
