import React from 'react';
import PropTypes from 'prop-types';
import styles from './Painting.module.css';

const Painting = (props) => {
  return (
    <div className={styles.Painting}>
      {props.squares.map((color, i) => (
        <div
          key={color + i}
          className={styles.Square}
          style={{ backgroundColor: color }}></div>
      ))}
    </div>
  );
};

Painting.propTypes = {
  squares: PropTypes.array,
};

export default Painting;
