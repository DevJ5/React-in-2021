import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../../Assets/mondrian-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <HamburgerMenu toggleSidebar={props.toggleSidebar}></HamburgerMenu>
      <div className={styles.Logo}>
        <img src={Logo} />
      </div>
      <nav className={styles.isDesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Toolbar;
