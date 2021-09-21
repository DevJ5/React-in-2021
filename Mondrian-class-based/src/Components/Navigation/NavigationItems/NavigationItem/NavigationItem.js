import React from 'react';
import styles from './NavigationItem.module.css';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  return (
    <li className={styles.NavigationItem}>
      <a href={props.link} className={props.active ? styles.active : null}>
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default NavigationItem;
