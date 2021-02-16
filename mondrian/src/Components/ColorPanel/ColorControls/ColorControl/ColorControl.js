import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorControl.module.css';

const ColorControl = (props) => {
  return (
    <div className={styles.ColorControl}>
      <div>{props.label}</div>
      <button onClick={() => props.removeSquare(props.color)}>Less</button>
      <button onClick={() => props.addSquare(props.color)}>More</button>
    </div>
  );
};

ColorControl.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  removeSquare: PropTypes.func.isRequired,
  addSquare: PropTypes.func.isRequired,
};

export default ColorControl;
