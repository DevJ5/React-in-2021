import React from 'react';
import PropTypes from 'prop-types';
import ColorControls from './ColorControls/ColorControls';
import styles from './ColorPanel.module.css';

const ColorPanel = (props) => {
  return (
    <div className={styles.ColorPanel}>
      <p>Total price: 5.00</p>
      <ColorControls
        addSquare={props.addSquare}
        removeSquare={props.removeSquare}></ColorControls>
      <button>Order</button>
    </div>
  );
};

ColorPanel.propTypes = {
  addSquare: PropTypes.func.isRequired,
  removeSquare: PropTypes.func.isRequired,
};

export default ColorPanel;
