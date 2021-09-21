import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.click}
      className={[styles.Button, styles[props.btnType]].join(' ')}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.element,
  btnType: PropTypes.string.isRequired,
};

export default Button;
