import React from 'react';
import PropTypes from 'prop-types';
import styles from './Painting.module.css';

const Painting = (props) => {
  const squareColors = Object.keys(props.squares);

  return (
    <div className={styles.Painting}>
      {squareColors.map((color) => {
        const amount = props.squares[color];
        return Array(amount)
          .fill(null)
          .map((_, i) => (
            <div
              key={color + i}
              className={styles.Square}
              style={{ backgroundColor: color }}></div>
          ));
      })}
    </div>
  );
};

Painting.propTypes = {
  squares: PropTypes.object,
};

export default Painting;
