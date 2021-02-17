import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
  return props.isOpen ? (
    <div className={styles.Backdrop} onClick={props.click}></div>
  ) : null;
};

Backdrop.propTypes = {
  click: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
};

export default Backdrop;
