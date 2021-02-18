import React from 'react';
import styles from './HamburgerMenu.module.css';
import PropTypes from 'prop-types';

const HamburgerMenu = (props) => {
  return (
    <div className={styles.HamburgerMenu} onClick={props.toggleSidebar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

HamburgerMenu.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default HamburgerMenu;
