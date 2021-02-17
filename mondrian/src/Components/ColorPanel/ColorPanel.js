import React from 'react';
import PropTypes from 'prop-types';
import ColorControls from './ColorControls/ColorControls';
import styles from './ColorPanel.module.css';

const ColorPanel = (props) => {
  return (
    <div className={styles.ColorPanel}>
      <p>Total price: {props.totalPrice.toFixed(2)}</p>
      <ColorControls
        addSquare={props.addSquare}
        removeSquare={props.removeSquare}></ColorControls>
      <button onClick={props.toggleModal}>Order</button>
    </div>
  );
};

ColorPanel.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  addSquare: PropTypes.func.isRequired,
  removeSquare: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ColorPanel;
